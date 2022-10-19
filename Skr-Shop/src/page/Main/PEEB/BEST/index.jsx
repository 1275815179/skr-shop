import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import Paging from '../../../../components/Paging';
import PubSub from 'pubsub-js';
import { getShopListTypeTwo } from '../../../../api';
import MyNavLink from '../../../Footer/footer'

import './index.scss';
export default function Bast() {
  // 商品列表
  let [shopList, setShopList] = useState([]);
  //   数据总数，用于确定当前分页数
  let [allLength, setAllLength] = useState();
  // tab栏的切换
  let [tabShop, setTabShop] = useState('');
  // 页面跳转
  let navigate = useNavigate()
  let shopdetail = (params) => {
    navigate(`/shopdetail/${params}`)
  }
  // tab栏的点击切换事件
  function changeTab(e) {
    // 获取点击元素本身
    let btn = e.target;
    // 获取点击元素的父元素li
    let li = btn.parentElement;
    // 获取所有的li元素
    let lis = li.parentElement.children;

    // 遍历所有的li清除btn-current类名
    Array.from(lis).forEach((item) => {
      item.classList.remove('btn-current');
    });

    // 给当前点击的li添加btn-current类名
    li.classList.add('btn-current');

    // 将tabShop的值进行更换
    let text = btn.innerText;
    if (text === 'ALL') {
      text = '';
    }
    setTabShop(text);
  }
  //   二级tab栏点击切换事件
  function changeSubTab(e) {}

  useEffect(() => {
    // 初始化获取40条数据
    getShopListTypeTwo(tabShop, 1, 37).then((res) => {
      setShopList(res.data);
      setAllLength(res.allLength);
    });

     // 订阅消息，分页切换函数执行
     PubSub.subscribe('pageChange', (_, data) => {
        // 发送请求，重新获取新的page数据
        getShopListTypeTwo(tabShop, data, 37).then((res) => {
          setShopList(res.data);
        });
      });
  }, [tabShop]);
  return (
    <div className='container'>
      <div className='title'>
        <p className='container-title'>最好的</p>
      </div>

      <div className='tab-btn'>
        <ul onClick={changeTab}>
          <li className='btn-current'>
            <button>ALL</button>
          </li>
          <li>
            <button>鞋类</button>
          </li>
          <li>
            <button>服饰</button>
          </li>
          <li>
            <button>配件</button>
          </li>
          <li>
            <button>儿童专区</button>
          </li>
        </ul>
        <div className='sort'>
          <ul>
            <li>
              <span>全&#x3000;部</span>
            </li>
            <li>
              <span>收&#x3000;藏</span>
            </li>
            <li>
              <span>趋&#x3000;势</span>
            </li>
            <li>
              <span>社&#x3000;论</span>
            </li>
            <li>
              <span>销&#x3000;售</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='topSeller'>
        <div className='topSeller_list'>
          <div className='lst_top'>
            <ul>
              {shopList.map((item, index) => {
                if (index < 3) {
                  return (
                    <li key={item.id} onClick={()=>shopdetail(item.id)}>
                      <span className='icon_best'>
                        <strong>{index + 1}</strong>
                        <p>BEST</p>
                      </span>
                      <img src={item.img} alt='' />
                      <div className='textMax'>
                        <div className='text_wrap'>
                          <div className='brand'>LOEUVRE</div>
                          <div className='front'>
                            {' '}
                            [펜트하우스 이지아,강민경,효민,류이서,보라끌레르 착용] | [04/16 예약배송]{' '}
                          </div>
                          <div className='product'> Sac de Trompette Small FA0SB013-10 </div>
                        </div>
                        <div className='price'>
                          <div className='discount_price'>37,800</div>
                          <div className='base_price'>42,000</div>
                          <div className='discount_rate'>10%</div>
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className='topSeller_list'>
          <div className='lst_middle'>
            <ul>
              {shopList.map((item, index) => {
                if (index >= 3 && index <= 6) {
                  return (
                    <li key={item.id} onClick={()=>shopdetail(item.id)}>
                      <span>
                        <strong>{index + 1}</strong>
                      </span>
                      <img src={item.img} alt='' />
                      <div className='textMax'>
                        <div className='text_wrap'>
                          <div className='brand'>LOEUVRE</div>
                          <div className='front'>
                            {' '}
                            [펜트하우스 이지아,강민경,효민,류이서,보라끌레르 착용] | [04/16 예약배송]{' '}
                          </div>
                          <div className='product'> Sac de Trompette Small FA0SB013-10 </div>
                        </div>
                        <div className='price'>
                          <div className='discount_price'>37,800</div>
                          <div className='base_price'>42,000</div>
                          <div className='discount_rate'>10%</div>
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className='topSeller_list' style={{backgroundColor:'#fff',border:'1px solid #e8e8e8',paddingRight:'20px'}}>
          <div className='lst_bottom'>
            <ul>
              {shopList.map((item, index) => {
                if (index >= 7) {
                  return (
                    <li key={item.id} onClick={()=>shopdetail(item.id)}>
                      <span>
                        <strong>{index + 1}</strong>
                      </span>
                      <img src={item.img} alt='' />
                      <div className='textMax'>
                        <div className='text_wrap'>
                          <div className='brand'>Dunst for WOMEN</div>
                          <div className='front'>
                          [04/23 예약배송]
                          </div>
                          <div className='product'>  HALF-SLEEVES BELTED SUMMER-WOOL  </div>
                        </div>
                        <div className='price'>
                          <div className='discount_price'>37,800</div>
                          <div className='base_price'>42,000</div>
                          <div className='discount_rate'>10%</div>
                        </div>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="footer">
        <Paging allLength={allLength} page={37}></Paging>
      </div>
        </div>
      </div>

      <MyNavLink/>
    </div>
  );
}
