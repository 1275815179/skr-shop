import React from 'react'
import download from './img/download.jpg'
import Steps from './Steps/index';
import './scss/index.scss';
import From from './Form';
import From1 from './Form/second';
import From2 from './Form/thrid';
import UpDate from './upDate';
import Message from './Message';
import MyNavLink from '../../footer'
export default function Offers() {
  return (
    <div className='offers'>
      <div className='offers-title'>
        <p >招聘信息</p>
      </div>
      <div className='offers-price'>
        <img src={download} alt="" />
      </div>
      <div className='offers-tip'>
        <h3>招聘程序</h3>
        <p className='offers-tip1'>每次筛选的成功申请者公告均单独进行。</p>
        <p className='offers-tip1'>如果申请表中有任何虚假信息，入场可能会被取消。</p>
      </div>
      <div className='offers-steps'>
        < Steps size="default" />
      </div>
      <div className="offers-off">
        <p></p>
        <p>薪资条件<br />根据公司章程-最终面试后的决定</p>
        <p>工作地点<br />首尔特别市江南市区德国黑蓝路14街16号5楼</p>
      </div>
      <div className='offers-form'>
        <h3>应用</h3>
        <div className="offers-froms">
            <From />
            <From1/>
            <From2/>
            <div className="option"> <UpDate /></div>
           
            <div className='offers-tain'>
            <input type="checkbox" value=""/>
            <span>同意收集和使用个人信息(必填)</span>
            <div className='mask'>
              查看内容
            </div>
            </div>
        <div className='ofers-time'>
          <button className='offers-out'>取消</button>
          <div className='offers-all'>
                 <Message />
          </div>
      </div>
        </div>
      </div>
      <MyNavLink/>
    </div>
  )
}
