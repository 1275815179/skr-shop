import React, { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import moment from 'moment'
import './shoplistdetail.scss'
import {getShopListTypeTwo} from '../../api'

export default function Detail() {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let weeks = week[moment().format('d')]
    let params = useParams()
    let [shop,setShop] = useState([])
    // 跳转页面
    let navigate = useNavigate()
    useEffect(()=>{
        (async ()=>{
            let data = await getShopListTypeTwo(params.params)
            // console.log(data.data);
            setShop(data.data)
        })()
    },[params.params])

    let Shopdetails = (params)=>{
        navigate(`/shopdetail/${params}`)
    }

    return (
        <div className='detail' >
            <div className='skr-heard'>
                <div>
                    <p className='skr-heard-p'>{params.params}</p>
                    <div className='skr-heard-two'>
                        <div>Home</div>
                        <div>/</div>
                        <div>{weeks}</div>
                    </div>
                </div>
            </div>
            <div className='skr-main'>
                <p>{params.params}专区</p>
                <div>www.stride.fun</div>
            </div>
            <div className='skr-main-bottom'>
                {'今日推荐'}
            </div>
            <div className='skr-bottom-con'>
                <div className='skr-bottom-content'>
                    {
                        shop.map(item=>{
                            return (
                                <div className='content-one' key={item.id} onClick={()=>Shopdetails(item.id)}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <div>价格:{item.price}</div>
                                </div>
                            )
                        })
                    }
                </div>
                
            </div>
        </div>
    )
}
