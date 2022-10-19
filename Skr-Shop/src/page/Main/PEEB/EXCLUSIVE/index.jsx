import React, { useState, useEffect } from 'react';
import { getAntBasketball } from '../../../../api';
import { useNavigate } from 'react-router-dom'
import { Carousel} from 'antd';
import MyNavLink from '../../../Footer/footer'
import './index.scss';

// antd 数据
const contentStyle = {
  height: '800px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

let background = ['rgba(234, 255, 130, 0.8)', 'rgba(255, 105, 153, 0.8)', 'rgba(83, 173, 116, 0.8)'];
export default function Exclusive() {
  // 短袖史努比，thumbnail轮播图右侧数据
  let [thumbnail, setThumbnail] = useState([]);

  // 安踏连帽卫衣，wanted下方8张小图
  let [wanted, setWanted] = useState([]);

  // 史努比2021新款,edition7张大图;
  let [slick, setSlick] = useState([]);

  //   东奥
  let [winter, setWinter] = useState([]);

  // 页面跳转
  let navigate = useNavigate()
  let shopdetail = (params) => {
    navigate(`/shopdetail/${params}`)
  }


  useEffect(() => {
    // 短袖-史努比
    getAntBasketball('短袖', '史努比').then((res) => {
      let arr = [];
      let arr1 = [];
      res.data.forEach((item, index) => {
        if (index < 6) {
          arr.push(item);
        }
        arr1.push(item);
      });
      setThumbnail(arr);
      setSlick(arr1);
    });

    // 安踏-连帽卫衣
    getAntBasketball('安踏', '连帽卫衣').then((res) => {
      let arr = [];

      res.data.forEach((item, index) => {
        if (index > 7) {
          return;
        }
        arr.push(item);
      });
      setWanted(arr);
    });

    // 东奥
    getAntBasketball('冬奥').then((res) => {
      // console.log(res);
      setWinter(res.data);
    });
  }, []);
  return (
    <div className='exclusive'>
      <div className='title'>
        <p> EXCLUSIVE </p>
      </div>

      <div className='exclusive_content'>
        <div className='exclusive_banner'>
          <div className='slide_wraps' style={{ width: '65%', float: 'left' }}>
          <Carousel autoplay>
              {
                  thumbnail.map(item => {
                      return (
                          <div key={item.title} >
                              <img style={contentStyle} src={item.img} alt="" />
                          </div>
                      )
                  })
              }
          </Carousel>
          </div>
          <div className='thumbnail'>
            <ul>
              {thumbnail.map((item) => {
                return (
                  <li key={item.id} onClick={()=>shopdetail(item.id)}>
                    <div className='ant-card-cover'>
                      <img src={item.img} alt='' />
                    </div>
                    <div className='ant-card-body'>
                      <h2>{item.title}</h2>
                      <p> www.stride.fun </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className='exclusive_wanted'>
          <div className='title'>
            <p> WANT.NEED </p>
          </div>
          <button>
            <span>+ALL(10943)</span>
          </button>
        </div>

        <ul className='thumbnail_list'>
          {wanted.map((item) => {
            return (
              <li key={item.id} onClick={()=>shopdetail(item.id)}>
                <img src={item.img} alt='' />
                <div className='ant-card-body'>
                  <p>{item.title}</p>
                  <p>www.stride.fun</p>
                </div>
                <div className='price'>
                  <div>
                    <span>{item.special_price}</span>
                    <del>{item.price}</del>
                  </div>
                  <span>{(item.special_price / item.price).toFixed(2) * 100}%</span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className='exclusive_edition'>
          <div className='title'>
            <p> EDITION </p>
          </div>
          <div className='slick_slider'>
            {slick.map((item, index) => {
              if (index < 3) {
                return (
                  <div className='slick' key={item.id} onClick={()=>shopdetail(item.id)}>
                    <div className='ant-card-body'>
                      <div className='mask' style={{ backgroundColor: background[index] }}></div>
                      <img src={item.img} alt='' />
                    </div>
                    <div className='ant-card-meta'>
                      <h3>{item.title}</h3>
                      <p>www.stride.fun</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          <div className='content'>
            <div className='inner_left'>
              {slick.map((item, index) => {
                if (index > 2) {
                  return (
                    <div key={item.id} className='inner_le' onClick={()=>shopdetail(item.id)}>
                      <img src={item.img} alt='' />
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className='content_b'>
            <div className='title'>
              <p> TALKING </p>
            </div>
            <ul>
              {winter.map((item, index) => {
                if (index < 3) {
                  return (
                    <li key={item.id} onClick={()=>shopdetail(item.id)}>
                      <img src={item.img} alt='' />
                      <p>{item.title}</p>
                      <span>www.stride.fun</span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          <div className='exclusive_wantNeed'>
            <div className='title'>
              <p> WANT.NEED </p>
            </div>
            <button>
              <span>+ALL(10943)</span>
            </button>
            <div className='thumbnail_list'>
              {winter.map((item, index) => {
                if (index > 5) {
                  return (
                    <li key={item.id} onClick={()=>shopdetail(item.id)}>
                      <img src={item.img} alt='' />
                      <div className='ant-card-body' style={{padding:'0'}}>
                        <p>{item.title}</p>
                        <p>www.stride.fun</p>
                      </div>
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>

      <MyNavLink/>
    </div>
  );
}
