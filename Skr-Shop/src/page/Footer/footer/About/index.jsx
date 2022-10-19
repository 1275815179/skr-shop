import React from 'react'
import download from './img/download.gif';
import './scss/index.scss'
import MyNavLink from '../../footer'
export default function About() {
  return (
    <div className='about'>
      <div className='about-title'>
        关于我们
      </div>
      <div className='center'>
        <img src={download} alt="" />
      </div>
      <MyNavLink/>
    </div>
  )
}
