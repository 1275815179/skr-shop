import React, { useEffect, useState } from 'react'
import './index.scss';
import { useParams ,useNavigate} from 'react-router-dom';
import { getShopListTypeTwo } from '../../../../api'

export default function Product() {
  // data假数据待删---
  let [shop, setShop] = useState([])
  let params = useParams()
  useEffect(() => {
    (async function () {
      let data = await getShopListTypeTwo(params.params)
      console.log(data);
      setShop(data.data)
    })()
  }, [])
  let navigate = useNavigate()
  const shopdetail = (params)=>{
    navigate(`/shopdetail/${params}`)
  }
  return (
    <div>
      {/* Product List产品列表 */}
      <ul className='ProductList'>
        {
          shop.map((item) => {
            return (
              <li key={item.id} onClick={()=>shopdetail(item.id)}>
                <img src={item.img} alt='' />
                <p className='title'>{item.title}</p>
                <p className='activity'>目前没有活动</p>
                <p className='price'>￥<span>{item.price}</span> <del>￥<span>{item.special_price}</span></del> <span className='discount'>{Math.trunc((item.special_price / item.price) * 100) + '%'}</span></p>
              </li>
            );
          })}
      </ul>
    </div>
  )
}
