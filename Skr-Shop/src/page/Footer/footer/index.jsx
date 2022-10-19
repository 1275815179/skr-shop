import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
export default function MyNavLink() {
  return (

    <div>
      <div className='login'>
        <ul>
          <li><NavLink to="/about">关于我们</NavLink></li>
          <li><NavLink to="/advisory">咨询服务</NavLink></li>
          <li><NavLink to="/partner">合租伙伴查询</NavLink></li>
          <li><NavLink to="/terms">服务条款</NavLink></li>
          <li><NavLink to="/privacy">隐私政策</NavLink></li>
          <li><NavLink to="/center">服务中心</NavLink></li>
          <li><NavLink to="/offers">招聘信息</NavLink></li>
          <li> <NavLink to="/global">全球的</NavLink></li>
        </ul>
      </div>
      <div className='footer-title'>
        <div className="footerMsg">
          <div className='footer-left'>
            <p className='skr-p'>网站名称</p>
            <p className='skr-p'>
              © 2009-2021
              Stride.fun 版权所有 ICP主体备案号  : 苏ICP备202<br />1007111号
            </p>
            <p className='skr-p'> <span>网站备案信息</span></p>
            <p className='skr-p'><img src="https://stride.fun/static/img/beian.d0289dc0.png" alt="" /><span>苏公安网安备32011402010859号</span></p>
          </div>
          
          <div className='footer-right'>
            <p className='skr-p'>消费者损害赔偿保险</p>
            <p className='skr-p'>
              客户在以现金支付安全交易时可以使用Wconcept订阅的<span>
                消费者损害赔偿保险服务。
              </span>
            </p>
            <p className='skr-p'>赔偿对象：不送/退货，拒绝退款/商场破产</p>
            <p className='skr-p'>检查服务订阅事实</p>
          </div>
        </div>
      </div>
    </div>
  )
}
