import React, {useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import MyNavLink from '../../../Footer/footer'
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import './index.scss'
import { EffectCube, Pagination } from "swiper";

import { getShopListTypeTwo } from '../../../../api'

const DemoSwiper = () => {
  let [shop, setShop] = useState([]);
  useEffect(() => {
    getShopListTypeTwo(
      '休闲鞋'
    ).then((data)=>{
    // console.log(data);
    let shopObj = data.data
    // console.log(shopObj);
    setShop(shopObj)
   })
  }, [])
  
  // swiper的html结构
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
    >
        {
           shop.slice(9,14).map((item,index) => (
                <SwiperSlide key={item.id} className={`swiper-slide swiper-slide${index+1}`}>      
                  <img src={item.img} alt="错误" />
                  <p>{item.title}</p>
                  <span className='tip'>右划查看下一款</span>
                </SwiperSlide>
            ))
        }
    </Swiper >
    <MyNavLink/>
    </div>
    
)
}

export default DemoSwiper

