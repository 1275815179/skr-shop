import React from 'react'

export default function BasketballShoesDetail({shop}) {
    let {id,img,title} = shop;
  return (
    <div className='ant-card'>
        <div className="ant-card-cover">
            <img src={img} alt="" />
        </div>
        <div className="ant-card-body">
            <h2>{title}</h2>
            <h3>www.stride.fun</h3>
        </div>
    </div>
  )
}
