import React, { useEffect, useState } from 'react';
import './index.scss';
import { ArrowDownOutlined, ArrowUpOutlined, BarsOutlined, HistoryOutlined } from '@ant-design/icons';
import ShopCar from './shopcar';
import SkrOnLine from './skrOnLine';
import { getShopCar } from '../../api';
import {  shopCarDisplay, SideSkrOnLineDisplay } from './method';
export default function Sidebar() {
  // 获取本地储存的用户id
  let customer_id = localStorage.getItem('customer_id');
// 动态更新购物车数据
  let [commodity, setCommodity] = useState([]);
  //  请求购物车里的数据；
  useEffect(() => {
    if(customer_id !== ''){
      getShopCar(customer_id).then((res) => {
        // console.log(res);
        setCommodity(res.data);
      });
    } else {
      setCommodity(0);
    }
    let toTop = document.querySelector('.toTop');
    toTop.style.display = 'none';
  }, []);

  // 监视滚动条滚动高度，判断是否隐藏图标
  window.onscroll = function () {
    let toTop = document.querySelector('.toTop');
    let toFoot = document.querySelector('.toFoot');

    let high = document.documentElement.scrollTop || document.body.scrollTop;

    // 获取浏览器卷去的高度
    if (high >= 40) {
      //当高度大于等于75rem后盒子出现，注意不要带单位
      toTop.style.display = 'block';
    } else {
      toTop.style.display = 'none';
    }
  };
  // 返回顶部
  let backTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  // 跳转到底部
  let backFoot = () => {
    document.documentElement.scrollTop = document.body.scrollHeight;
    document.body.scrollTop = document.body.scrollHeight;
  };

  return (
    <div className='Sidebar'>
      <div className='sidebar'>
        <button onClick={shopCarDisplay}>
          <BarsOutlined />
        </button>
        <button onClick={SideSkrOnLineDisplay}>
          <HistoryOutlined />
        </button>
        <button className='toTop' onClick={backTop}>
          <ArrowUpOutlined />
        </button>
        <button className='toFoot' onClick={backFoot}>
          <ArrowDownOutlined />
        </button>
      </div>
      <div className='rightContent'>
        <ShopCar commodity={commodity} />
        <SkrOnLine />
      </div>
    </div>
  );
}
