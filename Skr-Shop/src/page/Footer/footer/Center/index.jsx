import React from 'react'
import './scss/index.scss';
import download from './img/download.png';
import MyNavLink from '../../footer'
export default function Center() {
  return (
    <div className='center'>
      <div className='center-title'>
        <div >服务条款</div>
      </div>
      <div className="center-login">
        <ul>
          <li>常见问题</li>
          <li>消息</li>
          <li>会员福利</li>
          <li>查询</li>
          <li>客户反馈</li>
        </ul>
      </div>
      <div className="tips">
        <div  className='tips-right'>
        <h3 className='tips1'>
            <span>常见问题</span>
         </h3>
         <h3 className='tips2'> 
          <span>搜索</span>
          <span>검색 후 문의가 해결되지 않으면 1:1 상담을 이용하세요.</span>
         </h3>
         <h3 className='tips3'>
          <span className='tips3color'>最爱的搜索词</span>
          <span>First-level Menu / Second-level Menu / Third-level Menu</span>
         </h3>
        </div>
        <div className='tips-left'>
          <h3>客户中心用户指南</h3>
          <h1>1566-1475</h1>
          <p>营业时间：平日0900~1800午餐时间：1230~1330）</p>
        </div>
      </div>
      <div className="center-money">
        <ul>
          <li>
            <h3>订单/付款/运输</h3>
            <p>订单/付款</p>
            <p>交货</p>
            <p>签发证明文件</p>
          </li>
          <li>
            <h3>订单/付款/运输</h3>
            <p>订单/付款</p>
            <p>交货</p>
            <p>签发证明文件</p>
          </li>
          <li>
            <h3>订单/付款/运输</h3>
            <p>订单/付款</p>
            <p>交货</p>
            <p>签发证明文件</p>
          </li>
          <li>
            <h3>订单/付款/运输</h3>
            <p>订单/付款</p>
            <p>交货</p>
            <p>签发证明文件</p>
          </li>
          <li>
            <h3>订单/付款/运输</h3>
            <p>订单/付款</p>
            <p>交货</p>
            <p>签发证明文件</p>
          </li>
        </ul>
      </div>
      <div className="mian">
        <h3>快速连接</h3>
             <div className='mian-car'>
                 <img src={download} alt="" />
              </div>
      </div>
      <div className="cneter-end">
        <div className='end-left'>
        <h1>十大常见问题 <span>+</span></h1>
       
        <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
        </div>
        <div className='end-right'>
          <h1>活动获奖者公告<span>+</span></h1>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <h1>消息 <span>+</span></h1>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
          <p>
            <span>Q1</span> [开具证明文件]如何申请开具现金收据？
          </p>
        </div>
         
      </div>
      <MyNavLink/>
    </div>
  )
}
