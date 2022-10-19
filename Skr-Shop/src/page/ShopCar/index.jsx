import React, { useState, useEffect, useRef } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { getUpShopCar,getDownShopCar,getDeleteShopCar,getShopCar,buyOrderCar } from '../../api';
import './index.scss';
// 从本地获取Id

let customer_id = window.localStorage.getItem('customer_id')

export default function ShopCar() {
  // 给当前选中多少件
  let [counts, setCounts] = useState(0);
  // 总价格
  let [allPrice, setAllPrice] = useState(0);
  // 购物车商品列表
  let [shopList,setShopList] = useState([]);
  // 购物车商品数量
  let [shopListnumber,setShopListnumber] = useState(0)
  // 商品id
  let [skuId,setSkuId] = useState([])
  // 选中的商品id
  let [skuarr,setSkuarr] = useState([])
  // 
  let navigate = useNavigate()
  useEffect(()=>{
    let arr = []
    getShopCar(customer_id).then(res=>{
      setShopListnumber(res.data.length)
      setShopList(res.data)
      for(let i = 0;i<res.data.length;i++){
        arr.push(res.data[i].sku_id)
      }
      setSkuId(arr)
    })
  },[shopListnumber])

  let myRef = React.useRef();


  // 点击数量加加
  const argment = (index,id) => {
    let number = document.querySelectorAll('.number');
    number[index].innerHTML++;
    // 调用计算多少件商品函数
    fun();
    // 调用当前总价
    Price();
    // 发送请求，让商品数量 + 1
    getUpShopCar(customer_id,id)
  };
  // 点击数量减减
  const subtract = (index,id) => {
    let number = document.querySelectorAll('.number');
    number[index].innerHTML--;

    if (number[index].innerHTML < 1) {
      number[index].innerHTML = 1;
    }
    // 调用计算多少件商品函数
    fun();
    // 调用当前总价
    Price();
    // 发送请求，让商品数量 - 1
    getDownShopCar(customer_id,id)
  };

  // 点击全选全部选中
  const checkall = () => {
    let inputs = document.querySelectorAll('.dev-shops input');
    let ipt = document.querySelector('.dev-checkall input');
    for (var i = 0; i < inputs.length; i++) {
      if (ipt.checked === true) {
        inputs[i].checked = true;
        fun();
      }
      if (ipt.checked === false) {
        inputs[i].checked = false;
        fun();
      }
    }
    inputChecked();
    Price();
  };

  // 判断复选框是否全选
  function inputChecked() {
    let inputs = document.querySelectorAll('.dev-shops input');
    let ipt = document.querySelector('.dev-checkall input');
    Price();
    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].checked) {
        ipt.checked = false;
        fun();
        return;
      } else {
        ipt.checked = true;
        fun();
      }
    }
    
  }

  // 点击删除商品 
  function del(id) {
    var flag = window.confirm('确定删除吗');
    if (flag === true) {
      // 调用计算总价
      Price();
      // 发送请求，删除商品
      getDeleteShopCar(customer_id,id).then(res=>{
        // 请求完成后 重定向路由
        // ----------
        let a = shopListnumber - 1 
        setShopListnumber(a)
      })
    }
    
  }

  // 计算当前选中多少件商品
  function fun() {
    let number = document.querySelectorAll('.number');
    let inputs = document.querySelectorAll('.dev-shops input');
    let skuarr1 = []
    let allNumber = 0;
    for (let i = 0; i < number.length; i++) {
      if (!inputs[i].checked) {
        continue;
      } else {
        allNumber += parseFloat(number[i].innerHTML);
        skuarr1.push(skuId[i])
      }
    }
    setSkuarr(skuarr1)
    setCounts(allNumber);
  }


  // 计算总价格函数
  function Price() {
    let prices = document.querySelectorAll('.special_price');
    let checkbox = document.querySelectorAll('.dev-checkbox input');
    let nums = document.querySelectorAll('.number');
    let allPrices = 0;
    Array.from(checkbox).forEach((item, index) => {
      // 如果当前为选中状态
      if (item.checked) {
        allPrices += Number(nums[index].innerText * prices[index].innerText);
      }
    });
    setAllPrice(allPrices)
  }

  // 提交订单函数
  function addOrder(){
    if(skuarr.length !== 0){
      buyOrderCar(customer_id,allPrice,JSON.stringify(skuarr)).then(res=>{
        navigate(`/playTotal/${res.order_id}`)
      })
      
      console.log(customer_id,allPrice, JSON.stringify(skuarr));
    }
  }

  return (
    <div className='shopCar'>
      {/* 我的购物车 */}
      <div className='dev-myShopcar'>
        <h1>我的购物车</h1>
        <span ref={myRef}>共{counts}件</span>
      </div>
      {/* 全选按钮 */}
      <div className='dev-checkall' onClick={() => checkall()}>
        <input type='checkbox' />
        <label htmlFor='allqq1q1111'>全选</label>
      </div>
      {/* 中间内容 */}
      <div className='dev-shops'>
        
        { 
        shopList.map((item, index) => {
          // console.log(item.params);
          let color = item.params.slice(1,item.params.length-1).split(',')
          // console.log(color);
          return (
            <div className='dev-bigBox' key={item.sku_id}>
              <div className='dev-checkbox'>
                <input type='checkbox' onClick={inputChecked} />
              </div>
              <div className='dev-shop-middle'>
                <img src={item.img} alt='' />
                <div className='dev-shop-aaa'>
                  <p className='title'>{item.title}</p>
                  <p className='color'>
                    <span>颜色:{color[0]}</span>&nbsp;
                    <span>尺码:{color[1]}</span>
                  </p>
                  <p className='num'>
                    <span className='count'>数量：</span>
                    <button className='subtract' onClick={() => subtract(index,item.sku_id)}>
                      -
                    </button>
                    <button className='number'>{item.num}</button>
                    <button className='argment' onClick={() => argment(index,item.sku_id)}>
                      +
                    </button>
                  </p>
                </div>
              </div>
              <div className='dev-shop-price'>
                <p className='special_price'>{item.special_price}</p>
                <p className='price'>￥{item.price}</p>
                <p
                  className='del'
                  onClick={() => {
                    del(item.sku_id);
                  }}
                >
                  删除
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* 底部结算总价 */}
      <div className='dev-shop-account'>
        <h2 className='sum'>总价:￥{allPrice}</h2>
        <div className='dev-shop-add' onClick={addOrder}>
          <a  className='account'>
            结算
          </a>
        </div>
      </div>
    </div>
  );
}
