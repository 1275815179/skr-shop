import logo from '../../image/logo/log.png'
import './layouts.scss'
import React, { useState, useEffect } from 'react'
import { getShopList } from '../../api'
import { NavLink, Outlet, useNavigate ,useLocation} from 'react-router-dom'
import { Breadcrumb, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import Sidebar from '../../components/Sidebar'
//  图标组件
import {
  UserAddOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined
} from '@ant-design/icons';
// 搜索框
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
//  二级
let tabsleft = [
  { title: "鞋类", path: "/shoes" },
  { title: "服饰", path: '/dress' },
  { title: '配件', path: '/parts' },
  { title: '儿童专区', path: '/children' },
]
let tabsright = [
  { title: 'POP', path: '/pop' },
  { title: 'EXCLUSIVE', path: '/exclusive' },
  { title: 'RVENT', path: '/rvent' },
  { title: 'BEST', path: '/best' },
]


const BaseLayout = () => {


  let [useId, setuseId] = useState()
  let [tits, setTits] = useState([])
  useEffect(() => {
    let username = localStorage.getItem('username')
    setuseId(username)
  }, [useId])
  let navigate = useNavigate()
  // 搜索框
  let navigates = useNavigate()
  const onSearch = (value) => {
    navigates(`/search/${value}`)
  }
  // 二级悬浮框
  const enterOpacity = async (title) => {
    let data = await getShopList()
    let tit = []
    for (var i = 0; i < data.data.length; i++) {
      if (data.data[i].parent_name === title) {
        tit.push(data.data[i].name)
      }
    }
    setTits(tit)
    document.querySelector('.skr-navlink-twbu').style.display = 'block'

  }
  const leaveOpacity = () => {
    document.querySelector('.skr-navlink-twbu').style.display = 'none'
  }
  // 点击二级分类跳转详情页
  const shopListDetail = (params) => {
    navigate(`/detali/${params}`)
  }

  let outlogin = () => {
    let flag = window.confirm('是否退出登录')
    if (flag) {
      localStorage.removeItem('username')
      localStorage.removeItem('customer_id')
      localStorage.removeItem('token')
      setuseId(null)
    }
  }
  function panduan(useId){
    if (useId === null) {
      return (
        <Breadcrumb>
          <Breadcrumb.Item >
            <UserAddOutlined />
            <NavLink to={'/resigin'}>{'注册'}</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <UserSwitchOutlined />
            <NavLink to={'/login'}>{'登录'}</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <ShoppingCartOutlined />
            <NavLink to={'/login'} onClick={()=>{alert('请先登录')}}>{'购物车'}</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      )
    } else {
      return (
        <Breadcrumb>
          <Breadcrumb.Item >
            <UserAddOutlined />
            <NavLink to={'/home'} onClick={() => outlogin()}>{'退出登录'}</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <UserSwitchOutlined />
            <NavLink to={'/mone'}>{'个人中心'}</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <ShoppingCartOutlined />
            <NavLink to={'/shopcar'}>{'购物车'}</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      )
        
    }
  }


  return (
    <div className='skr-nav-shoptop'>
      <div className='skr-router'>
        <div className='skr-router-left'>
          <img src={logo} alt="" />
          <NavLink to={'/home'}>{''}</NavLink>
        </div>

        <div className='skr-router-center'>
          <Space direction="vertical">
            <Search
              placeholder="请输入想要的内容"
              style={{ width: 304 }}
              onSearch={onSearch} enterButton
            />
          </Space>
        </div>

        <div className={'skr-router-right'}>
          {panduan(useId)}
        </div>

      </div>
      {/* 二级导航栏 */}
      <div className='skr-router-two'>
        <div className='skr-nav-shoptop-two' onMouseLeave={() => leaveOpacity()}>
          <div className='skr-nav-shoptop-two-left'>
            {
              tabsleft.map(item => {
                return (
                  <NavLink
                    className={'skr-navlink-two'}
                    onMouseOver={() => enterOpacity(item.title)}
                    key={item.title}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                )
              })
            }
          </div>
          <div className='skr-nav-shoptop-two-right' onMouseLeave={() => leaveOpacity()}>
            {
              tabsright.map(item => {
                return (
                  <NavLink
                    className={'skr-navlink-two'}
                    onMouseLeave={() => leaveOpacity()}
                    key={item.title}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                )
              })
            }
          </div>
          {/* 二级分类详情，点击跳转 */}
          <div className='skr-navlink-twbu' onMouseLeave={() => leaveOpacity()}>
            <div className='skr-navlink-twbu-t'>
              <div className='skr-navlink-twbu-ts'>
                <div className='skr-navlink-twbu-ts-left'>
                  {
                    tits.map(item => {
                      return (
                        <div key={item} onClick={() => shopListDetail(item)}>{item}</div>
                      )
                    })
                  }
                </div>
                <div className='skr-navlink-twbu-ts-right'>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Sidebar/>
      </div>

      <Outlet></Outlet>
    </div>
  )
}


export default BaseLayout