import React,{useEffect,useState} from 'react';
import './index.scss';
import { NavLink, Outlet,useParams} from 'react-router-dom';
import {getShopListTypeTwo} from '../../api'

export default function Search() {
  let [shop,setShop] = useState([])
  let params = useParams()
  useEffect(()=>{
    (async function(){
      let data = await getShopListTypeTwo(params.params)
      console.log(data);
      setShop(data.data)
    })()
  },[])
  
  return (
    <div className='Search'>
      <header>
        <p>
          'xxx'有<span>{shop.length}</span>个搜索结果
        </p>
      </header>
      {/* Secondary navigation副导航 */}
      <ul className='SecondaryNavigation'>
        {/* style={({isActive})} */}
        
        <NavLink to={`/search/${params.params}/product`} style={linkActive}>
          <li>产品({shop.length})</li>
        </NavLink>

        <NavLink to={`/search/${params.params}/activity`} style={linkActive}>
          <li id='TransparentFromLeftToRight'>活动(0)</li>
        </NavLink>
        <NavLink to={`/search/${params.params}/buyershow`} style={linkActive}>
          <li>买家秀(120)</li>
        </NavLink>
      </ul>

      <Outlet />
    </div>
  );
}

// 路由高亮样式设置
function linkActive({ isActive }) {
  if (isActive) {
    // 高亮展示的路由
    return {
      padding: '12px 0',
      backgroundColor: 'rgb(51,51,51)',
      color: '#fff',
      fontWeight: 900,
    };
  } else {
    return {
      color: 'black',
      fontWeight: 400,
    };
  }
}
