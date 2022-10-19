import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import PubSub from "pubsub-js";
import Searchs from '../../../../components/Search';
import { getShopList, getHotSale, getShopListTypeTwo } from '../../../../api';
import Paging from '../../../../components/Paging';

import './index.scss';

let page = 1;

export default function Children() {
  // 按钮样式（勿动，因为我也看不懂）
  const [size, setSize] = useState('large');

  let typeOne = '儿童专区';
  let [typeTwo, setTypeTwo] = useState([]);
  let [hotSale, setHotSale] = useState([]);
  let [shopList, setShopList] = useState([]);
  let [allLength, setAllLength] = useState([]);

  useEffect(() => {
    // 获取到分类二级标题
    getShopList().then((res) => {
      let arr = [];
      res.data.forEach((item) => {
        if (item.parent_name === typeOne) {
          if (arr.length === 5) {
            return;
          }
          arr.push(item);
        }
      });

      setTypeTwo(arr);
    });
    // 获取热搜榜
    getHotSale(typeOne).then((res) => {
      let arr = [];
      res.data.forEach((item, index) => {
        if (index > 20) {
          return;
        }
        arr.push(item);
      });
      setHotSale(arr);
    });
    // 获取到一级分类的所有商品
    getShopListTypeTwo(typeOne, page).then((res) => {
      setShopList(res.data);
      setAllLength(res.allLength);
    });

    // 订阅消息，用于页码的改变回调
    PubSub.subscribe('pageChange',(_,data)=>{
      getShopListTypeTwo(typeOne, data).then((res) => {
        setShopList(res.data);
      });
    })
  }, [typeOne]);

  return (
    <div className='primary'>
      <p className='title-detail'>{typeOne}</p>
      <div className='tag'>
        <div className='tag-item'>
          <div className='hot-tag'>
            <span>热门标签</span>
          </div>
          <div className='hot-tag-item'>
            {typeTwo.map((item) => {
              return (
                <Link to={`/detali/${item.name}`} key={item.id}>
                  <Button type='primary' shape='round' size={size}>
                    #{item.name}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className='tag-search'>
          <Searchs></Searchs>
        </div>
      </div>
      <div className='breadcrumb'>
        <div className='breadcrumb-link'>
          <span>
            <Link to={'/home'}>Home</Link>
            <span style={{ margin: '0 8px' }}>/</span>
          </span>
          <span>Primary</span>
        </div>
      </div>
      <div className='primary-item'>
        <div className='aside'>
          <div className='mask'>
            <p>{typeOne}</p>
            <span>stride.fun</span>
          </div>
          <div>
            <div className='header'>
              <p>热销</p>
            </div>
            <div className='aside-list'>
              <ul>
                {hotSale.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={`/shopdetail/${item.id}`}>{item.title}</Link>
                      <span>{item.sale}件</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='primary-list'>
          <div className='header'>
            <p>今日推荐</p>
          </div>
          <div className='sort'>
            <span>共计{allLength}件</span>
          </div>
          <div className='list'>
            {shopList.map((item) => {
              return (
                <Link key={item.id} to={`/shopdetail/${item.id}`}>
                  <div className='list-item'>
                    <img src={item.img} alt='' />
                    <div className='list-body'>
                      <h2>{item.title}</h2>
                      <p>COST:￥{item.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className='page'>
            <Paging allLength={allLength} page={30}></Paging>
          </div>
        </div>
      </div>
    </div>
  );
}
