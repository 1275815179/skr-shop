import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PubSub from 'pubsub-js';
import Paging from '../../../../components/Paging';
import { getShopListTypeTwo } from '../../../../api';
import MyNavLink from '../../../Footer/footer'

import './index.scss';

export default function Event() {
  let [shopList, setShopList] = useState([]);
  let [allLength, setAllLength] = useState([]);
  let [tabShop,setTabShop] = useState('')
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
        text = ''
    }
    setTabShop(text)
  }

  useEffect(() => {
    // 初始加载，一次请求，获取第一页数据
    getShopListTypeTwo(tabShop, 1, 10).then((res) => {
      setShopList(res.data);
      setAllLength(res.allLength);
    });

    // 订阅消息，分页切换函数执行
    PubSub.subscribe('pageChange', (_, data) => {
      // 发送请求，重新获取新的page数据
      getShopListTypeTwo(tabShop, data, 10).then((res) => {
        setShopList(res.data);
      });
    });
  }, [tabShop]);
  return (
    <div className='event'>
      <div className='title'>
        <p>EVENT</p>
      </div>
      <div className='carousel'></div>
      <div className='cet-nav'>
        <div className='section'>
          <div className='my_brand_cont'>
            <div className='cont-title'>
              <h3>MY❤BRAND EVENT</h3>
            </div>
            <div className='cont'>
              <p> 로그인 하시면 MY❤에 등록한 BRAND의 최근 EVENT를 확인할 수 있습니다. </p>
              {/* <Link to={'/home'}>로그인</Link> */}
            </div>
          </div>

          <div className='benefit'>
            <div className='benefit-title'>
              <h3>BENEFIT</h3>
            </div>
            <div className='benefit-cont'>
              <ul>
                <li>
                  <img
                    src='https://image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_03_20200713153123.png'
                    alt=''
                  />
                </li>
                <li>
                  <img
                    src='https://image.wconcept.co.kr/images/builder/1/4/132/189/wc_benefit_09_20190905092308.png'
                    alt=''
                  />
                </li>
                <li>
                  <img
                    src='https://image.wconcept.co.kr/images/builder/1/4/132/189/%EB%A9%A4%EB%B2%84%EC%89%BD_20190731154447.jpg'
                    alt=''
                  />
                </li>
                <li>
                  <img
                    src='https://image.wconcept.co.kr/images/builder/1/4/132/189/pc_icon_20210205184922_20210226182134.jpg'
                    alt=''
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='hot-keyword'>
        <div className='hot-keyword-cont'>
          <h3>hot keyword</h3>
          <ul>
            <li>
              <Link to={'/home'}>21SS도 함께할 베스트 아이템! #The Best, Forever</Link>
            </li>
            <li>
              <Link to={'/home'}>매일 입고 싶은 클래식 #프론트로우 데님 컬렉션</Link>
            </li>
            <li>
              <Link to={'/home'}>봄을 담은 #블라우스&셔츠 </Link>
            </li>
            <li>
              <Link to={'/home'}>W컨셉에서만 만나볼 수 있는 #봄기운을 담은 백</Link>
            </li>
            <li>
              <Link to={'/home'}>4월, 새롭게 주목할 #주얼리 브랜드 </Link>
            </li>
            <li>
              <Link to={'/home'}>4월, 새롭게 주목할 #주얼리 브랜드 </Link>
            </li>
            <li>
              <Link to={'/home'}>4월, 새롭게 주목할 #주얼리 브랜드 </Link>
            </li>
            <li>
              <Link to={'/home'}>봄을 담은 #블라우스&셔츠 </Link>
            </li>
          </ul>
          <p className='search'>
            <input type='text' placeholder='제목 또는 내용, 브랜드명 입력' />
            <button>
              <i>
                <svg
                  viewBox='64 64 896 896'
                  width={'1em'}
                  height='1em'
                  fill='currentColor'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z'></path>
                </svg>
              </i>
            </button>
          </p>
        </div>
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
            <li>全部</li>
            <li>收藏</li>
            <li>趋势</li>
            <li>社论</li>
            <li>销售</li>
            <li>事件</li>
          </ul>
        </div>

        <div className='thumbnail'>
          <div className='issue-list'>
            <ul>
              {shopList.map((item) => {
                return (
                  <Link to={`/shopdetail/${item.id}`} key={item.id}>
                    <li>
                      <img src={item.img} alt='' />
                      <p>{item.title}</p>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className='pagination'>
            <Paging allLength={allLength} page={10}></Paging>
          </div>
        </div>
        <MyNavLink/>
      </div>


     
  
    </div>
  );
}
