import React from 'react'
import './scsss/index.scss'
import From from './From';
import From1 from './From/second';
import From2 from './From/thrid';
import  Message from '../Offers/Message';
import '../Offers/scss/index.scss';
import MyNavLink from '../../footer'
export default function Sever() {
  return (
    <div className='server'>
      <div className='server-title'><p>咨询服务</p> </div>
      <ul>
        <li>
          <p className='server-tip1'>步骤01</p>
          <p className='server-tip4'>图片</p>
          <p className='server-tip2'>填写合作伙伴/进入申请</p>
          <p className='server-tip3'>请申请隶属关系/进入</p>
        </li>
        <li>
          <p className='server-tip1'>步骤02</p>
          <p className='server-tip4'>图片</p>
          <p className='server-tip2'>填写合作伙伴/进入申请</p>
          <p className='server-tip3'>请申请隶属关系/进入</p>
        </li>
        <li>
          <p className='server-tip1'>步骤03</p>
          <p className='server-tip4'>图片</p>
          <p className='server-tip2'>查看并于负责人关系</p>
          <p className='server-tip3'>在每个领域的负责人审核之后，如果商店合适，我们将通过电话或电子邮件与您联系</p>
        </li>
      </ul>
      <div className='server-main'>
        <h3 >※申请店铺咨询时的注意事项</h3>
        <p > 1.如果您申请商店咨询，我们将在内部审查后通知您进入商店的可能性和合同程序。 </p>
        <p > 2.办理入住手续可能需要一段时间，因此请避免注册重复，并避免与MD联络以及通过客户中心查询可用性。 </p>
        <p > 3. W. Concept基于真正的处理方式，只有设计和生产自己的品牌公司才可以进入商店。（不允许进入商店买卖品牌或处理假货） </p>
        <p > 4.必须指定负责人以促进产品管理（MD）和订单管理（交货/ CS处理），如果不能这样做，则可能会拒绝接纳。 </p>


      </div>
      <div className='sever-input'>
        < From />
        < From1 />
        < From2 />
      </div>
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
      <MyNavLink/>
    </div>
  )
}
