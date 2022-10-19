import React, { useEffect, useState } from 'react';
import { PayCircleOutlined, ShopOutlined, RocketOutlined, SmileOutlined } from '@ant-design/icons';
import { Steps,message } from 'antd';
import './index.scss';
import { getDetailOrder, getDeleteOrder ,getConfirmReceipt,getPay} from '../../api';
import {useParams,useNavigate} from 'react-router-dom'
// 当前订单id为路由传入


export default function DetailOrder() {
  //状态插件的属性
  let params = useParams()
  let navigate = useNavigate()
  let [orderId,setOrderId] = useState()
  const { Step } = Steps;
  let timer = document.querySelector('.timer');
  // 商品数据
  let [data, setData] = useState([]);
  // 付款信息
  let [payInfor, setPayInfor] = useState();
  // 用于判断当前进度
  let [status, setStatus] = useState(0);
  
  //
  useEffect(() => {
  
    setOrderId(params.params)
  
    console.log(params.params);
  
    getDetailOrder(orderId).then((res) => {
      // 设置当前进度
      let da = res.data[0].status
      if (da !== 0) {
        setStatus(res.data[0].status);
      }
      
      setData(res.data);
  
      // 计算付款信息中的总价，数量，优惠
      let obj = {
        nums: 0,
        prices: 0,
        special_prices: 0,
      };
      // let
      res.data.forEach((item) => {
        obj.nums += item.num;
        obj.prices += item.special_price * item.num;
        obj.special_prices += item.price * item.num;
      });
  
      setPayInfor(obj);
  
      // 调用时间戳转换函数，并赋值
      // getData(res.data[0].create_time);
      timer.innerHTML = getData(res.data[0].create_time);
    });
    
  }, []);


  // 通过当前订单状态返回不同按钮
  function orderButton(status) {
    switch (status) {
      case 0:
        return <button onClick={payButton} className="payment">立即付款</button>;
      case 1:
        return <button className='wait'>等待发货</button>;
      case 2:
        return <button onClick={payButton} className="payment">确认收货</button>;
      default:
        return <button  className='wait'>订单完成</button>;
    }
  }
  
  // 点击付款按钮执行事件
  function payButton(e) {
    // 当前显示为确定收货
    if (e.target.innerText === '确认收货') {
      if (window.confirm('确认收货吗？')) {
         // 发送请求，确认收货
        getConfirmReceipt(orderId).then(res=>{
          if (res.code === 200) {
            message.success('确认收获成功');
            // 重定向路由到本页面
          }
        })
      }
    }else{
      // 当前点击立即付款
      
      getPay(data[0].code,payInfor.prices,data[0].title,data[0].params).then(res=>{
        window.location.href = res.url
      })
     
    }
  }
  function getData(n) {
    n = new Date(n);
    return n.toLocaleDateString().replace(/\//g, '-') + ' ' + n.toTimeString().substr(0, 8);
  }
  
  // 取消订单函数
  function cancelOrder() {
    let cancelOrder = window.confirm('确定删除订单吗');
    if (cancelOrder) {
      getDeleteOrder(orderId).then((res) => {
        if (res.code === 200) {
          //******************************************************************************* */
          // 此处路由重定向到上一级最近订单
          message.success('取消订单成功')
          navigate('/mone')
        }
      });
    }
  }
  return (
    <div className='Order'>
      <div className='orderContent'>
        <div className=' orderTitle'>
          <p>
            订单号：<span className='orderNumber'>{data.length === 0 ? '' : data[0].code}</span>
            <span className='timer'></span>
          </p>
        </div>
        <div className=' orderList'>
          <div className='orderListLeft'>
            <Steps current={2}>
              {/*  status指定当前步骤的状态,可选wait, process, finish, error*/}
              <Step status={status === 0 ? 'process' : 'finish'} title='待支付' icon={<PayCircleOutlined />} />
              <Step
                status={status < 1 ? 'wait' : status === 1 ? 'process' : 'finish'}
                title='待发货'
                icon={<ShopOutlined />}
              />
              <Step
                status={status < 2 ? 'wait' : status === 2 ? 'process' : 'finish'}
                title='待收货'
                icon={<RocketOutlined />}
              />
              <Step
                status={status < 3 ? 'wait' : status === 3 ? 'process' : 'finish'}
                title='已完成'
                icon={<SmileOutlined />}
              />
            </Steps>
          </div>
          <div className='orderListRight'>
            {orderButton(status)}
            <p>
              <button className='cancel' onClick={cancelOrder}>
                取消订单
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className='CommodityList'>
        <div className='CommodityListTitle'>
          <p>商品清单</p>
        </div>
        <ul className='CommodityListContent'>
          {data.map((item) => {
            return (
              <li className='commodityOn' key={item.title}>
                <div className='CommodityImg'>
                  <img src={item.img} alt='' />
                </div>
                <div className='commodityNews'>
                  <p className='commodityTitle'>{item.title}</p>
                  <p className='commodityColor'>颜色/尺码：{item.params}</p>
                  <p className='commodityNum'>数量：{item.num}</p>
                </div>
                <div className='priceNews'>
                  <p className='price'>￥{item.special_price}</p>
                  <p className='specialPrice'>
                    <del>￥{item.price}</del>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className='ReceivingInformation'>
        <ul className=''>
          <li className='title'>收货人信息</li>
          <li className='contentInformation'>姓名：{data.length === 0 ? '' : data[0].name}</li>
          <li className='contentInformation'>电话：{data.length === 0 ? '' : data[0].tel}</li>
          <li className='contentInformation'>地址：{data.length === 0 ? '' : data[0].address}</li>
        </ul>
        <ul className=''>
          <li className='title'>配送信息</li>
          <li className='contentInformation'>配送方式</li>
          <li className='contentInformation'>运费：￥0</li>
        </ul>
        <ul className=''>
          <li className='title'>付款信息</li>
          {/* --------------------------------------------------------- */}
          <li className='contentInformation'>商品数量：{typeof payInfor === 'object' ? payInfor.nums : 0}</li>
          <li className='contentInformation'>商品总额：{typeof payInfor === 'object' ? payInfor.prices : 0}</li>
          <li className='contentInformation'>应付金额：{typeof payInfor === 'object' ? payInfor.special_prices : 0}</li>
        </ul>
      </div>
    </div>
  );
}

// 声明时间戳转换为时间格式的函数


