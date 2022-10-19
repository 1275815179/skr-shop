import React from 'react'
import download from './img/download.jpg';
import './scss/index.scss'
import MyNavLink from '../../footer'
export default function About() {
  return (
    <div className='global'>
      <div className="global-title"></div>
      <div className='center'>
        <img src={download} alt="" />
      </div>
      <div className='global-tips'>
        <div className='global-tip'>
          <h3>404</h3>
          <p>你访问的页面</p>
          <p>已经饿晕在路上</p>
        </div>
      </div>
      <MyNavLink/>
    </div>
  )
}