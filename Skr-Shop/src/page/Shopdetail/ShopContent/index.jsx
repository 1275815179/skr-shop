import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PhotoLoupe from "../../../components/BigImg";
import { getDetail, AddShopCar, buyOrder } from "../../../api";
import { message } from "antd";
import "./index.scss";

export default function ShopContent() {
  let [information, setInformation] = useState([]);
  let [imgsrc, setImgSrc] = useState();
  let [color, setColor] = useState("");
  let params = useParams();
  let navigate = useNavigate();
  let [shopid,setShopid] = useState()
  let [money,setMoney] = useState()
  // antdesign 添加成功
  const success = () => {
    message.success("添加成功");
  };

  // antdesign 请先登录
  const error = () => {
    message.error("未登录，请先登录");
  };

  // 加入购物车
  function isLogin() {
    let shopSize = document.querySelector(".dev-shop-size select");
    let shopnum = document.querySelector(".dev-shop-num input");

    if (window.localStorage["token"]) {
      if (color === undefined) {
        alert("请选择商品颜色！！!");
        return;
      } else {
        // console.log(shopnum.value, shopSize.value);
        // console.log(localStorage.getItem("customer_id"));
        // console.log(color);
        AddShopCar(
          localStorage.getItem("customer_id"),
          shopid,
          shopnum.value,
          [color, shopSize.value]
        );
        success();
        

      }
    } else {
      error();
    }
  }

  // 立即购买
  function isBuy() {
    let devshopmask = document.querySelector(".dev-shop-mask");
    let shopSize = document.querySelector(".dev-shop-size select");
    let shopnum = document.querySelector(".dev-shop-num input");
    if (color === undefined) {
      alert("请选择商品颜色！！!");
      return;
    } else if (window.localStorage["token"]) {
      // console.log(localStorage.getItem("customer_id"),money,shopid,shopnum.value,[color, shopSize.value]);
      // 测试
      let num = parseInt(shopnum.value)
      
      buyOrder(
        localStorage.getItem("customer_id"),
        money,
        shopid,
        num,
        JSON.stringify([color, shopSize.value]) 
      ).then(res=>{
        // console.log(res.order_id);
        navigate(`/playTotal/${res.order_id}`)
      })
      

    } else {
      devshopmask.style.display = "block";
    }
  }

  // 关闭遮罩层
  function devClose() {
    let devshopmask = document.querySelector(".dev-shop-mask");
    devshopmask.style.display = "none";
  }

  // 点击确定跳转登录页面
  function devSure() {
    navigate("/login");
  }

  // 点击小图片大图片变化
  function showImg(goods, index) {
    let liOne = document.querySelectorAll(".dev-shop-one li");
    let liTwo = document.querySelectorAll(".dev-shop-four li");

    Array.from(liOne).forEach((item, index) => {
      item.classList.remove("current");
      liTwo[index].classList.remove("current");
    });

    liOne[index].classList.add("current");
    liTwo[index].classList.add("current");
    // console.log(liOne, liTwo);
    setColor(goods.color);
    setImgSrc(goods.img);
  }

  // 渲染商品
  let [shop, setShop] = useState([]);
  useEffect(() => {
    (async function () {
      let data = await getDetail(params.params);
      setShop(data.msg);
      setShopid(data.msg[0].id)
      setColor(data.msg[0].color); // 设置初始化颜色
      setImgSrc(data.msg[0].img); //设置初始大照片
      //  截取图片
      let imgs = data.msg[0].imgs.split(",");
      let colors = data.msg[0].param.split(",");
      let smallImg = [];
      for (let k in imgs) {
        if (k % 2 === 0) {
          let img = imgs[k].split('":')[1];
          smallImg.push(img.slice(1, img.length - 1));
        }
      }

      let allColors = [];
      for (let k in colors) {
        let obj = {
          color: colors[k].split('"')[1],
          img: smallImg[k],
        };
        // console.log(colors[k].split('"')[1]);
        allColors.push(obj);
      }
      setMoney(data.msg[0].price)
      setInformation(allColors);
    })();
  },[]);

  return (
    <div className="dev-shop-detail">
      {shop.map((item, index) => {
        return (
          // 商品盒子
          <div className="dev-shop-box" key={item.id}>
            {/* 左侧小盒子图片 */}
            <ul className="dev-shop-one">
              {information.map((goods, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      showImg(goods, index);
                    }}
                  >
                    <img src={goods.img} alt="" />
                  </li>
                );
              })}
            </ul>
            {/* 中间大盒子图片 */}
            <main className="dev-shop-two">
              <PhotoLoupe imgUrl={imgsrc} />
            </main>
            {/* 遮罩层 */}
            <div className="dev-shop-mask">
              <div className="dev-shop-login">
                <p>未登录，是否需要登录！</p>
                <nav>
                  <p onClick={devClose}>X</p>
                </nav>
              </div>
              <div className="dev-shop-chioce">
                <nav className="dev-shop-sure" onClick={devSure}>
                  确定
                </nav>
                <nav className="dev-shop-cancel" onClick={devClose}>
                  取消
                </nav>
              </div>
            </div>
            {/* 右侧商品描述 */}
            <div className="dev-shop-three">
              <h1>{item.title}</h1>
              <span>￥{item.price}</span>&#x3000;
              <span>￥{item.special_price}</span>
              <nav>
                <p>促销</p>&#x3000;
                <p>官方商城全场包邮</p>
              </nav>
              {/* 右侧小图片 */}
              <ul className="dev-shop-four">
                {information.map((goods, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => {
                        showImg(goods, index);
                      }}
                    >
                      <img src={goods.img} alt="" />
                    </li>
                  );
                })}
              </ul>
              {/* 尺码和数量描述 */}
              <div className="dev-shop-five">
                <div className="dev-shop-size">
                  <label>尺码</label>&#x3000;
                  <select>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>2XL</option>
                    <option>3XL</option>
                  </select>
                </div>
                <div className="dev-shop-num">
                  <label>数量</label>&#x3000;
                  <input type="number" max="10" min="1" defaultValue={1} />
                </div>
              </div>
              <div className="dev-shop-six">
                <div
                  className="dev-shop-add"
                  onClick={() => {
                    isLogin();
                  }}
                >
                  <p>加入购物车</p>
                </div>
                <div className="dev-shop-buy" onClick={isBuy}>
                  <p>立即购买</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
