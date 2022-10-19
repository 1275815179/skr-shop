import React, { useEffect, useState } from 'react';
import PubSub from "pubsub-js";
import { getDefaultAddress, getAddress, addAddress, updateAddress, deleteAddress, getBuyOrderList, getPlaceOrder, getPay } from '../../api';
import { message } from 'antd';
import { useParams } from 'react-router-dom'
import SelectCity from './City';
import './index.scss';


// 当前页面跳转过来时，提交购买订单，
// 需要上一个页面购买订单提交后，返回的数组对象信息 用发布消息，
// 还需要订单编号，通过路由传递过来
// window.localStorage['customer_id'] = 7;
let customer_id = localStorage.getItem('customer_id');

// 定义全局提示按钮
const success = () => {
  message.success('地址修改成功');
};

export default function PayTotal() {

  let oriderId = useParams()
  // 商品列表
  let [shopList, setShopList] = useState([]);
  // 商品参数 尺码 颜色
  let [params, setParams] = useState([]);
  // 商品小计 总价，优惠，其他
  let [subtotal, setSubtotal] = useState({});
  // 默认地址
  let [defaultAddress, setDefaultAddress] = useState({});
  // 地址列表
  let [address, setAddress] = useState([]);
  // 定义修改地址
  let [modifyAddress, setModifyAddress] = useState([]);
  // 定义新的地址修改
  let [newAddress, setNewAddress] = useState('')
  // 判断是否新增地址
  let [addnewaddress, setAddnewaddress] = useState()
  // 选中地址id
  let [defaultid, setDefaultid] = useState()
  // 订单号
  let [code,setCode] = useState()
  // 获取商品数据处理
  useEffect(() => {
    getBuyOrderList(oriderId.params).then(res => {
      setCode(res.data[0].code)
      setShopList(res.data);
      // 页面加载后，订阅消息，获取订单列表
      // setShopList(data);
      let arr = [];
      // 总件数
      let allNum = 0;
      // 总价格
      let allPrice = 0;
      // 总优惠
      let allDiscount = 0;

      // 遍历数据，提取信息
      res.data.forEach((item) => {
        // 获取params
        let param = [];
        let params = item.params.slice(1, item.params.length - 1).split(',');
        params = params.forEach((item) => {
          param.push(item.replace(/"/g, ''));
        });
        arr.push(param);

        // 获取商品小计信息

        allNum += item.num;
        allDiscount += (item.price - item.special_price) * item.num;
        allPrice += item.price * item.num;
      });

      // 设置商品参数
      setParams(arr);
      // 设置商品小计
      let total = {
        allNum,
        allDiscount,
        allPrice: allPrice - allDiscount,
      };

      setSubtotal(total);
    })


  }, []);

  // 发送请求，获取地址处理
  useEffect(() => {
    setAddnewaddress('获取地址')
    // 获取到默认地址，渲染到页面中
    getDefaultAddress(customer_id).then((res) => {
      if (res.code === 402) {
        setDefaultAddress([])
      } else {
        setDefaultAddress(res.data[0]);
        setAddnewaddress('修改默认地址地址')
        // 获取选中地址id
        setDefaultid(res.data[0].id)
      }

    });

    // 订阅消息，当地址每次修改或新增时触发
    PubSub.subscribe('newAddress', (_, data) => {
      setNewAddress(data)
    })
  }, []);

  // 点击关闭遮罩层(收货地址)
  function close() {
    let mask = document.querySelector('.mask');
    mask.style.display = 'none';
  }

  // 点击编辑/更多显示遮罩层
  function more() {
    let mask = document.querySelector('.mask');
    mask.style.display = 'block';

    // 发送请求，获取地址列表，并进行渲染
    getAddress(customer_id).then((res) => {
      if (res.code === 402) {
        setAddress([]);
      } else {
        setAddress(res.data);
        setAddnewaddress('获取全部地址')
      }

    });
  }

  // 点击确认关闭遮罩层
  function sure() {
    let mask = document.querySelector('.mask');
    mask.style.display = 'none';

    // 遍历确定当前选中的是哪一个地址 
    let ipts = document.querySelectorAll('.dev-shop-radio input');
    let address = document.querySelectorAll('.mask .dev-shop-name');

    Array.from(ipts).forEach((item, index) => {
      if (item.checked) {
        let name = address[index].children[0].innerText;
        let addres = address[index].children[1].innerText;
        name = name.split(':')[1].split('-');
        addres = addres.split(':')[1];

        let obj = {
          id: item.getAttribute('data-id'),
          name: name[0],
          tel: name[1],
          address: addres,
        };

        // 重新给默认地址赋值
        setDefaultAddress(obj);
      }
    });

    success();
  }

  // 点击返回或者X关掉新增地址页面
  function closeMore() {
    let modify_address = document.querySelector('.modify_address');
    modify_address.style.display = 'none'
  }

  // 点击新增地址展开新增地址页面
  function show_modify_address(id, name, tel) {
    let modify_address = document.querySelector('.modify_address');
    modify_address.style.display = 'block'

    // 此判断为当前点击的修改地址
    if (typeof id == 'number') {
      // 修改地址
      let arr = [...arguments];

      setModifyAddress(arr)

    } else {
      // 新增地址
      setModifyAddress([])

    }
  }

  // 点击删除地址执行删除请求
  function del_modify_address(id) {
    deleteAddress(id).then(res => {
      if (res.code === 200) {
        message.success('删除地址成功');
        more();
      }
    })
  }


  // 点击修改地址 - 发送请求
  function changeAddress(e) {

    let name = document.querySelectorAll('.info input')[0].value;
    let tel = document.querySelectorAll('.info input')[1].value;
    let address = newAddress + document.querySelector('.detail_address input').value;
    let isDefault = document.querySelector('#default').checked;
    isDefault = isDefault ? 1 : 0;



    // 新增地址，发送新增地址请求，
    if (e.target.innerText === '新增地址') {
      addAddress(customer_id, name, tel, address, isDefault).then(res => {
        
        if (res.code === 200) {
          message.success('添加地址成功');
          setAddnewaddress('添加地址成功')
          closeMore()
          window.location.reload(); 
        }
      })
    } else {
      // 修改地址，发送修改地址请求
      updateAddress(name, tel, address, modifyAddress[0]).then(res => {
        if (res.code === 200) {
          message.success('修改地址成功');
          closeMore()
          more()
        }
      })
    }
  }

  // 提交订单 --- 发送请求，拉起支付
  function submitOrder() {
    getPlaceOrder(oriderId.params, defaultid)
    console.log(subtotal.allPrice,shopList[0].title,params,code);
    getPay(subtotal.allPrice,shopList[0].title,params[0][1],code).then(res=>{
      // console.log(res);
      window.location.href = res.url
    })
  }

  return (
    // 大盒子
    <div className='dev-payTotal-box'>
      {/* 左侧收货地址 */}
      <div className='payTotal'>
        <div className='dev-shop-paymoney'>
          <h1>结算</h1>
        </div>
        <div className='dev-shop-address'>
          <p>收货地址</p>
        </div>
        <div className='dev-shop-name'>
          <div className='dev-shop-na'>
            <p>
              收货人：{defaultAddress.name}-{defaultAddress.tel}
            </p>
            <p>地址：{defaultAddress.address}</p>
          </div>
          <div className='dev-shop-more'>
            <p onClick={() => more()}>编辑/更多</p>
          </div>
        </div>
        <div className='dev-shop-goodsDetail'>
          <p>商品明细(共{subtotal.allNum}件)</p>
          {/* 商品详情 */}
          {shopList.map((item, index) => {
            return (
              <div className='particulars' key={item.title}>
                <div className='partImg'>
                  <img src={item.img} alt='image' />
                </div>
                <div className='partdetail'>
                  <div id='title'>{item.title}</div>
                  <div id='size'>
                    <span>颜色：{params[index][0]}</span>
                    <span>尺码：{params[index][1]}</span>
                  </div>
                  <span id='nums'>数量:{item.num}</span>
                </div>
                <div className='partprice'>
                  <h2>￥{item.special_price}</h2>
                  <h3>￥{item.price}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* 右侧付款方式 */}
      <div className='paymentMethod'>
        <h1>请选择付款方式:</h1>
        <div className='method'>
          <div className='wechat'>
            <img src='https://stride.fun/static/img/wecart.76711447.jpeg' alt='img' />
          </div>
          <div className='alipay'>
            <img src='https://stride.fun/static/img/alipay.3eb09b48.jpeg' alt='' />
          </div>
        </div>
      </div>
      {/* 小票 */}
      <div className='subtotal'>
        <ul>
          <li>商品小计</li>
          <li>
            <span>商品总价:</span>
            <span>￥{subtotal.allPrice}</span>
          </li>
          <li>
            <span>优惠:</span>
            <span>￥{subtotal.allDiscount}</span>
          </li>
          <li>
            <span>其他:</span>
            <span>￥0</span>
          </li>
          <li>
            <div className='all_price'>
              <span>总计:</span>
              <h3>￥{subtotal.allPrice}</h3>
            </div>
            <button onClick={submitOrder}>提交订单</button>
          </li>
        </ul>
      </div>

      {/* 遮罩层 */}
      <div className='mask'>
        <div className='dev-shop-top'>
          <h2>请选择你的收货地址</h2>
          <main className='x' onClick={close}>
            X
          </main>
        </div>
        <ul className='dev-shop-more-message'>
          {address.map((item) => {
            return (
              <li key={item.id}>
                <div className='dev-shop-radio'>
                  <input
                    type='radio'
                    name='address'
                    data-id={item.id}
                    defaultChecked={item.id === defaultAddress.id ? true : false}
                  />
                </div>
                <div className='dev-shop-name'>
                  <p>
                    收货人:{item.name}-{item.tel}
                  </p>
                  <p>地址:{item.address}</p>
                </div>
                <div className='dev-shop-more'>
                  <span onClick={() => show_modify_address(item.id, item.name, item.tel)}>编辑 </span>
                  <span onClick={() => del_modify_address(item.id)}>删除 </span>
                </div>
              </li>
            );
          })}
        </ul>
        <div className='dev-shop-moreAddress'>
          <div className='left' onClick={show_modify_address}>
            <nav className='newAdd'>
              <p>+</p>
            </nav>
            <p className='newAdress'>新增收货地址</p>
          </div>
          <div className='right'>
            <p onClick={sure}>确认</p>
          </div>
        </div>
      </div>

      {/* 修改地址 / 添加地址 */}
      <div className='modify_address'>
        <div className='title'>
          <h2>{modifyAddress.length !== 0 ? "修改收货地址" : '新增收货地址'}</h2>
          <span onClick={closeMore}>X</span>
        </div>
        <div className='info'>
          <div>
            收货人
            <span>*</span>
            <br />
            <input type='text' placeholder='姓名' defaultValue={modifyAddress[1]} />
          </div>
          <div>
            手机号码
            <span>*</span>
            <br />
            <input type='text' placeholder='电话' defaultValue={modifyAddress[2]} />
          </div>
        </div>
        <div className='address_item'>
          <div>
            省/直辖市
            <span>*</span>
          </div>
          <div>
            市
            <span>*</span>
          </div>
          <div>
            区/县
            <span>*</span>
          </div>
        </div>
        <SelectCity ></SelectCity>
        <div className="detail_address">
          <div>
            详细地址
            <span>*</span>
          </div>
          <input type="text" placeholder='详细地址' />
        </div>

        <div className="default">
          <input type="checkbox" id='default' />
          <label htmlFor="default">设置为默认地址</label>
        </div>

        <div className="submit">
          <button onClick={closeMore}>返回</button>
          {
            modifyAddress.length !== 0 ? <button className='changeAddress' onClick={changeAddress}>修改地址</button> : <button className='newAddress' onClick={changeAddress}>新增地址</button>
          }

        </div>
      </div>
    </div>
  );
}
