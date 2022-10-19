import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import BasketballShoesDetail from './BasketballShoesDetail';
import { getAntBasketball, getSwiper, getShopListTypeTwo } from '../../api'
import MyNavLink from '../Footer/footer'
import './index.scss'
// antd插件
import { Carousel, Tabs } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
// react-slickl轮播图插件
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// antd 数据
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
// react-slickl插件
const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 4,
    speed: 500,
};
const setting = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
};

export default function BasketballShoes() {
    let arr = [1, 2, 3]
    let color = ['rgba(217, 151, 65, 0.568)', 'rgba(65, 98, 217, 0.568)', 'rgba(217, 65, 78, 0.568)',
        'rgba(65, 159, 217, 0.568)', 'rgba(184, 65, 217, 0.568)', 'rgba(217, 151, 65, 0.568)', 'rgba(65, 98, 217, 0.568)', 'rgba(217, 65, 78, 0.568)',
        'rgba(65, 159, 217, 0.568)', 'rgba(184, 65, 217, 0.568)', 'rgba(217, 151, 65, 0.568)', 'rgba(65, 98, 217, 0.568)', 'rgba(217, 65, 78, 0.568)',
        'rgba(65, 159, 217, 0.568)', 'rgba(184, 65, 217, 0.568)']
    let [shop, setShop] = useState([]);
    let [shopbao, setShopbao] = useState([]);
    let [swiper, setSwiper] = useState([])
    let [swiperone, setSwiperone] = useState([])
    let [swipertwo, setSwipertwo] = useState([])
    let [swiperthree, setSwiperthree] = useState([])
    let [swiperfour, setSwiperfour] = useState([])
    let [swiperfive, setSwiperfive] = useState([])
    let [detail, setDetail] = useState([])
    let [detailshoes, setDetailShoes] = useState([])
    let [detailpart, setDetailpart] = useState([])
    let [detailchild, setDetailchild] = useState([])
    let [detailone, setDetailone] = useState([])
    let [detailtwo, setDetailtwo] = useState([])
    let [detailthree, setDetailthree] = useState([])
    let [detailfour, setDetailfour] = useState([])
    let [detailfive, setDetailfive] = useState([])

    // 跳转页面
    let navigate = useNavigate()
    let shopdetail = (params)=>{
        navigate(`/shopdetail/${params}`)
    }

    useEffect(() => {
        getAntBasketball('篮球鞋').then(res => {
            let arr = [];
            res.data.forEach((item, index) => {
                if (index <= 3) {
                    arr.push(item)
                    return
                }
            })
            setShop(arr)
        });
        getAntBasketball('双肩背包').then(res => {
            let arr = [];
            // console.log(res);
            res.data.forEach((item, index) => {
                if (index <= 3) {
                    arr.push(item)
                    return
                }
            })
            setShopbao(arr)
        });
        (async function () {
            let details = []
            let detailstwo = []
            let detailsthree = []
            let detailschild = []
            // 开头的四张图片轮播图
            let data = await getSwiper()
            let detail = await getShopListTypeTwo('服饰')
            let detailshoes = await getShopListTypeTwo('鞋类')
            let detailpart = await getShopListTypeTwo('配件')
            let detailchild = await getShopListTypeTwo('儿童专区')
            for (let index = 0; index < 7; index++) {
                details.push(detail.data[index])
                detailstwo.push(detailshoes.data[index])
                detailsthree.push(detailpart.data[index])
                detailschild.push(detailchild.data[index])
            }
            setSwiper(data.msg)
            setDetail(details)
            setDetailShoes(detailstwo)
            setDetailpart(detailsthree)
            setDetailchild(detailschild)
        })();
        (async function () {
            let arran = []
            let arrans = []
            let arranthree = []
            let arranfour = []
            let arranfive = []
            let dataone = await getAntBasketball('板鞋')
            let datatwo = await getAntBasketball('跑鞋')
            let datathree = await getAntBasketball('休闲鞋')
            let datafour = await getAntBasketball('休闲鞋')
            let datafive = await getAntBasketball('篮球鞋')
            for (let index = 8; index < 16; index++) {
                // 安踏女鞋
                arran.push(dataone.data[index])
                // 安踏运动鞋
                arrans.push(datatwo.data[index])
                arranfour.push(datafour.data[index])
                arranfive.push(datafive.data[index])
            }

            for (let index = 0; index < 5; index++) {
                // 休闲鞋
                arranthree.push(datathree.data[index])
            }

            setSwiperone(arran)
            setSwipertwo(arrans)
            setSwiperthree(arranthree)
            setSwiperfour(arranfour)
            setSwiperfive(arranfive)
        })();
        (async function () {
            let details = []
            let detailstwo = []
            let detailsthree = []
            let detailschild = []
            let detailschilds = []
            // 开头的四张图片轮播图
            let data = await getSwiper()
            let detail = await getShopListTypeTwo('连帽卫衣')
            let detailshoes = await getShopListTypeTwo('单茄克')
            let detailpart = await getShopListTypeTwo('单风衣')
            let detailchild = await getShopListTypeTwo('针织短裤')
            let detailchilds = await getShopListTypeTwo('运动背心')

            for (let index = 0; index < 6; index++) {
                details.push(detail.data[index])
                detailstwo.push(detailshoes.data[index])
                detailsthree.push(detailpart.data[index])

            }
            for (let i = 0; i < 4; i++) {
                detailschild.push(detailchild.data[i])
                detailschilds.push(detailchilds.data[i])
            }
            setDetailone(details)
            setDetailtwo(detailstwo)
            setDetailthree(detailsthree)
            setDetailfour(detailschild)
            setDetailfive(detailschilds)
        })();
    }, [])

    return (
        <div className='BasketballShoes'>
            {/* 轮播 */}
            <div className=''>
                <Carousel autoplay>
                    {
                        swiper.map(item => {
                            return (
                                <div key={item}>
                                    <img src={item.swiperImg} style={contentStyle} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            {/* 安踏篮球鞋 */}
            <p className='title-detail'>Basketball shoes</p>
            <div className="AnCard">
                {
                    shop.map(item => (<BasketballShoesDetail key={item.title} shop={item}/>))
                }
            </div>
            {/* 安踏女鞋 */}
            <p className='title-detail'>SKATE SHOSE</p>
            <div className='swiperone'>
                <Slider {...{
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }}>
                    {
                        swiperone.map(item => {
                            return (
                                <div key={item.title}>
                                    <div className={'swiperone-div'}>
                                        <img src={item.img} alt="" style={{ width: '100%' }} />
                                        <p>{item.title}</p>
                                        <div>www.stride.fun</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>

            </div>
            {/* 安踏跑鞋 */}
            <p className='title-detail'>RUNNING SHOSE</p>
            <div className='swiperone'>
                <Slider {...settings} slidesToShow={3}>
                    {
                        swipertwo.map(item => {
                            return (
                                <div key={item.title}>
                                    <div className={'swiperone-div'}>
                                        <img src={item.img} alt="" style={{ width: '100%' }} />
                                        <p>{item.title}</p>
                                        <div>www.stride.fun</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            {/* 安踏休闲鞋 */}
            <p className='title-detail'>CASUAL SHOSE</p>
            <div className='swipertwo'>
                <Slider {...setting}>
                    {
                        swiperthree.map((item, index) => {
                            return (
                                <div key={item.title}>
                                    <div className={'swiperone-div'}>
                                        <img src={item.img} alt="" style={{ width: '90%' }} />
                                        <div className='swiperone-zhe' style={{ backgroundColor: `${color[index]}` }}>{item.title}</div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className='swiperfour'>
                {
                    swiperfour.map(item => {
                        return (
                            <div key={item.title} className='swiperfour-crossing' onClick={()=>shopdetail(item.id)}>
                                <img src={item.img} alt="" />
                                <p>{item.title}</p>
                                <div>www.stride.fun</div>
                            </div>
                        )
                    })
                }
            </div>
            {/* 左轮播，右静态 安踏球鞋 */}
            <p className='title-detail'>RECOMMEND+</p>
            <div className='swiperfive'>
                <div className='swiperfive-left'>
                    <Carousel autoplay>
                        {
                            swiperfive.map(item => {
                                return (
                                    <div key={item.title} >
                                        <img style={contentStyle} src={item.img} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className='swiperfive-right'>
                    {
                        swiperfive.map(item => {
                            return (
                                <div key={item.title} className='swiperfour-crossing'>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <div>www.stride.fun</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 轮播 */}
            <div>
                <Carousel autoplay>
                    {
                        swiper.map(item => {
                            return (
                                <div key={item}>
                                    <img src={item.swiperImg} style={contentStyle} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            {/* 服饰商品详情 */}
            <div className='skr-detail'>
                <div className='skr-detail-left'>
                    <p className='skr-detail-left-first'>服饰</p>
                    <p className='skr-detail-left-second'>MORE<CaretRightOutlined /></p>
                </div>
                <div className='skr-detail-right swiperfour'>
                    {
                        detail.map(item => {
                            return (
                                <div key={item.id} className='swiperfour-crossing' onClick={()=>shopdetail(item.id)}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <div>www.stride.fun</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 鞋类商品详情 */}
            <div className='skr-detail'>
                <div className='skr-detail-left'>
                    <p className='skr-detail-left-first'>鞋类</p>
                    <p className='skr-detail-left-second'>MORE<CaretRightOutlined /></p>
                </div>
                <div className='skr-detail-right swiperfour'>
                    {
                        detailshoes.map(item => {
                            return (
                                <div key={item.id} className='swiperfour-crossing' onClick={()=>shopdetail(item.id)}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <div>www.stride.fun</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 配件商品详情 */}
            <div className='skr-detail'>
                <div className='skr-detail-left'>
                    <p className='skr-detail-left-first'>配件</p>
                    <p className='skr-detail-left-second'>MORE<CaretRightOutlined /></p>
                </div>
                <div className='skr-detail-right swiperfour'>
                    {
                        detailpart.map(item => {
                            return (
                                <div key={item.id} className='swiperfour-crossing' onClick={()=>shopdetail(item.id)}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <div>www.stride.fun</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 儿童商品详情 */}
            <div className='skr-detail'>
                <div className='skr-detail-left'>
                    <p className='skr-detail-left-first'>儿童</p>
                    <p className='skr-detail-left-second'>MORE<CaretRightOutlined /></p>
                </div>
                <div className='skr-detail-right swiperfour'>
                    {
                        detailchild.map(item => {
                            return (
                                <div key={item.id} className='swiperfour-crossing' onClick={()=>shopdetail(item.id)}>
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <div>www.stride.fun</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* 背包 */}
            <p className='title-detail'>KNAPSACK</p>
            <div className='swiperone'>
                <Slider
                    {...{
                        dots: true,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000
                    }}

                >
                    {
                        shopbao.map(item => {
                            return (
                                <div key={item.title} >
                                    <div className={'swiperone-div'} style={{ border: '0px' }}>
                                        <img src={item.img} alt="" style={{ width: '100%' }} />
                                    </div>
                                </div>
                            )

                        })
                    }
                </Slider>
            </div>
            {/* Tab切换栏 */}
            <p className='title-detail'>WDNA STYLE</p>
            <div>
                <Tabs defaultActiveKey="1" centered>
                    <Tabs.TabPane tab="连帽卫衣" key="1">
                        <div className='skr-detail'>
                            <div className='skr-detail-right swiperfour'>
                                {
                                    detailone.map(item => {
                                        return (
                                            <div key={item.id} className='swiperfour-crossing' style={{ width: '180px' }} onClick={()=>shopdetail(item.id)}>
                                                <img src={item.img} alt="" />
                                                <p>{item.title}</p>
                                                <div>www.stride.fun</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="单茄克" key="2">
                        <div className='skr-detail'>
                            <div className='skr-detail-right swiperfour'>
                                {
                                    detailtwo.map(item => {
                                        return (
                                            <div key={item.id} className='swiperfour-crossing' onClick={()=>shopdetail(item.id)}>
                                                <img src={item.img} alt="" />
                                                <p>{item.title}</p>
                                                <div>www.stride.fun</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="单风衣" key="3">
                        <div className='skr-detail'>
                            <div className='skr-detail-right swiperfour'>
                                {
                                    detailthree.map(item => {
                                        return (
                                            <div key={item.id} className='swiperfour-crossing' style={{ width: '180px' }} onClick={()=>shopdetail(item.id)}>
                                                <img src={item.img} alt="" />
                                                <p>{item.title}</p>
                                                <div>www.stride.fun</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="针织短裤" key="4">
                        <div className='skr-detail'>
                            <div className='skr-detail-right swiperfour'>
                                {
                                    detailfour.map(item => {
                                        return (
                                            <div key={item.id} className='swiperfour-crossing' style={{ width: '180px' }} onClick={()=>shopdetail(item.id)}>
                                                <img src={item.img} alt="" />
                                                <p>{item.title}</p>
                                                <div>www.stride.fun</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="运动背心" key="5">
                        <div className='skr-detail'>
                            <div className='skr-detail-right swiperfour'>
                                {
                                    detailfive.map(item => {
                                        return (
                                            <div key={item.id} className='swiperfour-crossing' style={{ width: '180px' }} onClick={()=>shopdetail(item.id)}>
                                                <img src={item.img} alt="" />
                                                <p>{item.title}</p>
                                                <div>www.stride.fun</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <MyNavLink/>
        </div>
        
    )
}
