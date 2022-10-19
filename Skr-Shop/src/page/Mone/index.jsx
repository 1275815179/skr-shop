import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss';
import SelectCity from '../../components/City'
import download from './img/download.jpg';
import { addAddress, getAddress, deleteAddress , defaultAddress , updateAddress ,getRecentOrder} from '../../api'
import MyNavLink from '../Footer/footer'
export default function MyPage() {
  // 遮罩层显示隐藏
  let [opacity, setOpacity] = useState(true);
  let [show, setShow] = useState(true);
  let [Add, setAddaddress] = useState(false);
  // 初始化 获取地址并渲染
  let [addr, setaddr] = useState([])
  // 地址是否变化，变化重新渲染
  let [leng, setLeng] = useState('')
  let [select,setSelect] = useState(false)
  // 更新地址时，获取地址id
  let [selid,setSelid] = useState(0)
  // 获取订单
  let [list,setList] = useState([])
  // 获取用户唯一id
  let useid = localStorage.getItem('customer_id')
  const ref = useRef(null)
  const ref1 = useRef(null)
  ////正则验证密码
  // console.log(addressData);
  const update = () => {
    let word = ref.current.value;
    let word1 = ref1.current.value;
    let reg = /^[\u4E00-\u9FA5]+$/;
    let reg1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
    
    if (!reg.test(word)) {
      alert("用户名只能是汉字")
    } else if (!reg1.test(word1)) {
      alert("至少8-16个字符,至少1个大写字母，1个小写字母和1个数字，其他可以是任意字符")
    } else {
      // console.log(word, word1);
    }
  }
  //控制遮罩层
  const isChangePsw = () => {
    show ? setShow(false) : setShow(true)
  }
  const AddAdress = () => {
    Add ? setAddaddress(false) : setAddaddress(true)
  }
  const IsOpacity = () => {
    opacity ? setOpacity(false) : setOpacity(true)
  }
  let addressone= () =>{
    setSelect(true)
    AddAdress()
  }
  //删除地址数据
  const deleAdree = (id) => {
    deleteAddress(id)
    setLeng('删除地址')
  }
  // 设置默认地址
  const defaultaddss = (id)=>{
    defaultAddress(id,useid).then(res=>{
      // console.log(res);
    })
    setLeng('设置默认值')
  } 
  // 更新地址
  const updateAdress = (id) =>{
    setSelid(id)
    setSelect(false)
    AddAdress()
    
  }
  
  useEffect(() => {
    getAddress(useid).then(res => {
      if (res.code === 402) {
        setaddr([])
      } else {
        setaddr(res.data)
      }
    })
    getRecentOrder(useid).then(res=>{
      if (res.code === 402) {
        setList([])
      } else {
        setList(res.data)
        // console.log(res.data);
      } 
    })
  }, [leng])
  
  //地址数据
  let AddCityAdress = () => {

    let name = document.querySelector('.skr-ant-inputone').value
    let tel = document.querySelector('.skr-ant-inputtwo').value
    let city = document.querySelectorAll('.ant-select-selection-item')
    let dizi = document.querySelector('.skr-ant-inputthree').value
    let obj = {
      name: name,
      address: city[0].innerHTML + city[1].innerHTML + city[2].innerHTML + dizi,
      open: tel,
      text: 0
    }
    if(select){
      addAddress(useid, obj.name, obj.open, obj.address, obj.text)
      setLeng('添加新的地址')
    }
    if(!select){
      updateAddress(obj.name,obj.open,obj.address,selid)
      setLeng('更新地址')
    }
    AddAdress()
  }
  
  // 时间戳转换为正常格式时间
  function getData(n){
    n=new Date(n)
    return n.toLocaleDateString().replace(/\//g, "-") + " " + n.toTimeString().substr(0, 8)
  }
  return (
    <div className='skr-mypage'>
      {/* 标题 */}
      <div className='skr-mypage-title'>
        <p>个人中心</p>
      </div>
      {/* 小标题--跳转首页 /修改密码*/}
      <div className='skr-mypage-jump'>
        <div className='skr-jump-home'>
          <NavLink to="/home">主页</NavLink>
          <span>&gt;</span>
          <span>个人中心</span>
        </div>
        {/* 遮罩层 */}
        <div className='skr-jump-mask'>
          <div className='changePassword' onClick={() => isChangePsw()}>修改密码</div>
          <div className='forgetPassword' id={show ? '' : 'active'}>
            <div className='modify' >
              <button className='closeModify' onClick={() => isChangePsw()}>X</button>
              <div className='titleWarp'>
                <h1>修改密码</h1>
              </div>
              <div className='modify_ipt'>
                <div className='ipt1'>
                  <div><span>用户名</span><input type="text" placeholder='请输入用户名' ref={ref} /></div>
                  <div><span>新密码</span><input type="password" placeholder='请输入新密码' ref={ref1} /></div>
                  <div className='.sure' onClick={() => update()}><button >确定</button></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* 下拉菜单 */}
      <div className="skr-mypage-list">
        <div className='skr-mypage-listColor'>
          <ul className='skr-list1'>
            <li>我的&#9829;</li>
            <li>订单管理</li>
            <li>我的活动</li>
            <li>购物优惠</li>
            <li>信息管理</li>
            <li>查询内容</li>
            <div className='skr-upshow' onClick={() => IsOpacity()}>&#9660;</div>
          </ul>

        </div>

        <div className='skr-list2Color' id={opacity ? '' : 'active'}>
          <ul className='skr-list2'>
            <li>
              <p>我的&#9829;物品</p>
              <p>我的&#9829;品牌</p>
              <p>我的&#9829;风格</p>
            </li>
            <li>
              <p>订购/配送查询</p>
              <p>取消/交换/退货查询</p>
              <p>收到的礼品盒</p>
              <p>签发凭证</p>
            </li>
            <li>
              <p>进货通知</p>
              <p>活动参加细明</p>
              <p>WDNA参与细明</p>
            </li>
            <li>
              <p>会员等级</p>
              <p>优惠劵</p>
              <p>WPOINT</p>
              <p>预收款</p>
              <p>购物券</p>
            </li>
            <li>
              <p>修改会员信息</p>
              <p>管理地址普</p>
              <p>W.工资管理</p>
              <p>退款账号管理</p>
              <p>会员推出</p>
            </li>
            <li>
              <p>商品Q&A</p>
              <p>商品评价</p>
              <p>1：1查询</p>
            </li>
          </ul>
        </div>

      </div>
      {/* 图片跳转首页 */}
      <div className="skr-mypage-img">
        <NavLink to={'/home'}> <img src={download} alt="" /></NavLink>
      </div>
      {/* 订单列单 */}
      <div className="skr-more-dingdan">
        <div className="skr-more-title">
          <h3>最近订单</h3>
          <p>more+</p>
        </div>
        <div className="skr-more-detail">
          <ul className="skr-more-detail1">
            <li>订单日期</li>
            <li>订单号</li>
            <li>商品信息</li>
            <li>数量</li>
            <li>商品价格</li>
            <li>进度</li>
          </ul>
          <div className='skr-more-what'>
            {
              list.map((item,index) => {
                return (
                  <ul className="skr-more-what1" key={index}>
                    <li>{getData(item.create_time)}</li>
                    <li>{item.code}</li>
                    <li>{item.title}</li>
                    {/* 跳转订单详情页 */}
                    <li><NavLink to={`/orderDetail/${item.id}`}>{item.num}</NavLink></li>
                    <li><NavLink to={`/orderDetail/${item.id}`}>{item.money}</NavLink></li>
                    <li><NavLink to={`/orderDetail/${item.id}`}>{item.status ? '支付成功' : '待支付'}</NavLink></li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* 收货地址 */}
      <div className="skr-address">
        <div className="skr-more-title">
          <h3>我的地址</h3>
          <div className="skr-new-skr">
            <span className='skr-new-skr1' onClick={() =>addressone()}>+</span>
            <span className='skr-new-skr2'>&#x3000;新增地址</span>
            <div className='forgetPassword' id={Add ? 'address' : ''}>
              <div className='modify' >
                <div className="modify-title">
                  <h3 >收货地址</h3>
                  <div className="modify-cancel" onClick={() => AddAdress()}>x</div>
                </div>
                <div className="modify-center">
                  <div className="modify-info">
                    <div> 收货人 <span style={{ color: "red" }}>*</span><br />
                      <input placeholder="姓名" type="text" className="ant-input skr-ant-inputone" />
                    </div>
                    <div > 手机号码 <span style={{ color: "red" }}>*</span><br />
                      <input placeholder="手机号码" type="text" className="ant-input skr-ant-inputtwo" />
                    </div>
                  </div>
                  <div className="address_item">
                    <div> 省/直辖市 <span style={{ color: "red" }}>*</span></div>
                    <div> 市 <span style={{ color: "red" }}>*</span></div>
                    <div > 区/县 <span style={{ color: "red" }}>*</span></div>

                  </div>
                  <div className="address-check">
                    <SelectCity />
                  </div>
                  <div className="address-total">
                    <div> 详细地址 <span style={{ color: "red" }}>*</span></div>
                    <div><input placeholder="详细地址" type="text" className="ant-input skr-ant-inputthree" /></div>
                  </div>

                  <div className="address-end">
                    <div className="modify-cancel-b" onClick={() => AddAdress()}>取消</div>
                    <div className="modify-cancel-yes" onClick={() => AddCityAdress()}>确定</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skr-address-list">
          <ul className="skr-address-list1">
            <li>
              <div>收货人姓名</div>
              <div>收货人地址</div>
            </li>
            <li>
              <div>收货人电话</div>
              <div>操作</div>
            </li>
          </ul>
          <ul>
            {
              addr.map(item => {
                return (
                  <ul className="skr-address-list1" key={item.name}>
                    <li>
                      <div>{item.name}</div>
                      <div>
                        {item.address}
                        <div className="skr-that">
                          <button className={item.prime ? 'skr-that-button' : 'skr-that-but'} onClick={()=>defaultaddss(item.id)}>默认地址</button>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div>{item.tel}</div>
                      <div>
                        <button onClick={() => deleAdree(item.id)}>删除</button>
                        <button onClick={() => updateAdress(item.id)}>编辑</button>
                      </div>
                    </li>
                  </ul>
                )

              })
            }
          </ul>

        </div>
        <div className='null'></div>
      </div>
      {/* 底部导航栏 */}
      <MyNavLink/>
    </div>
  )
}
