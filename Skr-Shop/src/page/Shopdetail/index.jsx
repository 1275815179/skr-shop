import React,{} from 'react'
import ShopNav from './ShopNav';
import ShopContent from './ShopContent';
import ShopDetail from './ShopDetail';
import MyNavLink from '../Footer/footer'
export default function Shopdetail() {
  return (
    <div>
      <div className='dev-big-glass'>
            <ShopNav />
            <ShopContent />
            <ShopDetail />
            <MyNavLink/>
        </div>
    </div>
  )
}
