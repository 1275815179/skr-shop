import React from 'react'
import { shiftRight } from '../method';
import { Link } from 'react-router-dom'
import './index.scss'
export default function SideShopCar(props) {
  let use_id = localStorage.getItem('username')
  let commodity = props.commodity
  if(props.commodity === undefined){
    commodity = []
  }
  
  if (use_id === null) {
    return (
      <div className='sideShopCar'>
        <h4>
          购物车<button className='skr-buttn' onClick={shiftRight}>X</button>
        </h4>
        <div className='skr-notlogin'>
          请先登录
        </div>
      </div>
    )
  } else {
    return (
      <div className='sideShopCar'>
        <h4>
          购物车<button className='skr-buttn' onClick={shiftRight}>X</button>
        </h4>
        <p>
          <span>共{commodity.length}件宝贝</span>
          <Link to={'/shopcar'}>
            <button className='skr-buttn'>管理</button>
          </Link>

        </p>
        <ul className='shopCarContent'>
          {commodity.map((item) => {
            return (
              <li key={item.id}>
                <div className='shopCarImg'>
                  <img src={item.img} alt='' />
                </div>
                <div className='information'>
                  <p>{item.title}</p>
                  <p>数量：{item.num}</p>
                  <p>￥ {item.price} <del>￥{item.special_price}</del></p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

}
