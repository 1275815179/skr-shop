import React from 'react'
import download from './img/download.jpg'
import './scss/index.scss';
import MyNavLink from '../../footer'
export default function Partner() {
  return (
    <div className='partner'>
        <div className='partner-title'><p>营销联盟</p> </div>
        <div className='partner-context'>
          <img src={download} alt="" />
        </div>
        <MyNavLink/>
    </div>
  )
}
