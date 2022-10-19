import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appraise from "../../../components/Appraise";
import ShopConsult from "../../../components/ShopConsult";
import "./index.scss";
import { getDetail } from "../../../api";

export default function ShopDetail() {
  let [information, setInformation] = useState([]);
  let params = useParams();

  useEffect(() => {
    (async function () {
      let data = await getDetail(params.params);
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
        allColors.push(obj);
      }
      setInformation(allColors);
    })();
  },[]);

  const showDetail = () => {
    let detail = document.querySelector(".dev-shop-detail-box");
    document.body.scrollTop = document.documentElement.scrollTop =
      detail.offsetTop;
  };
  const showReview = () => {
    let review = document.querySelector(".dev-shop-review-box");
    document.body.scrollTop = document.documentElement.scrollTop =
      review.offsetTop;
  };
  const showQa = () => {
    let qa = document.querySelector(".dev-shop-qa-box");
    document.body.scrollTop = document.documentElement.scrollTop = qa.offsetTop;
  };
  const showReturn = () => {
    let returnn = document.querySelector(".dev-shop-word");
    document.body.scrollTop = document.documentElement.scrollTop =
      returnn.offsetTop;
  };

  return (
    <div className="dev-shop-content">
      {/* DETAIL */}
      <div className="dev-shop-detail-box">
        <ul className="dev-shop-nav-detail">
          <li id="detail" onClick={() => showDetail()}>
            DETAIL
          </li>
          <li id="review" onClick={() => showReview()}>
            REVIEW
          </li>
          <li id="qa" onClick={() => showQa()}>
            Q & A
          </li>
          <li id="return" onClick={() => showReturn()}>
            RETURN & DELIVERYF
          </li>
        </ul>
        <ul className="dev-shop-imgs">
          {information.map((goods, index) => {
            return (
              <li key={goods.color}>
                <img src={goods.img} alt="" />
              </li>
            );
          })}
        </ul>
        ;
      </div>

      {/* REVIEW */}
      <div className="dev-shop-review-box">
        <ul className="dev-shop-nav-review">
          <li id="detail" onClick={() => showDetail()}>
            DETAIL
          </li>
          <li id="review" onClick={() => showReview()}>
            REVIEW
          </li>
          <li id="qa" onClick={() => showQa()}>
            Q & A
          </li>
          <li id="return" onClick={() => showReturn()}>
            RETURN & DELIVERYF
          </li>
        </ul>
        <div className="dev-shop-appraise">
          <h1>产品满意度</h1>
          <p>这是购买者对产品的评价。</p>
          <span>
            <Appraise />
          </span>
          &#x3000;
          <span>2</span>&#x3000;
          <span>/</span>&#x3000;
          <span className="num">5</span>
        </div>
      </div>

      {/*Q&A*/}
      <div className="dev-shop-qa-box">
        <ul className="dev-shop-nav-qa">
          <li id="detail" onClick={() => showDetail()}>
            DETAIL
          </li>
          <li id="review" onClick={() => showReview()}>
            REVIEW
          </li>
          <li id="qa" onClick={() => showQa()}>
            Q & A
          </li>
          <li id="return" onClick={() => showReturn()}>
            RETURN & DELIVERYF
          </li>
        </ul>
        <div className="dev-shop-consult">商品咨询</div>
        <br />
        <br />
        <ShopConsult />
      </div>

      {/* RETURN & DELIVERYF*/}
      <div className="dev-shop-return-box">
        <ul className="dev-shop-nav-return">
          <li id="detail" onClick={() => showDetail()}>
            DETAIL
          </li>
          <li id="review" onClick={() => showReview()}>
            REVIEW
          </li>
          <li id="qa" onClick={() => showQa()}>
            Q & A
          </li>
          <li id="return" onClick={() => showReturn()}>
            RETURN & DELIVERYF
          </li>
        </ul>
        <div className="dev-shop-word">
          <h2>配送/交换/退货/售后服务相关注意事项</h2>
          <p>
            商品的详细说明中包含配送/更换/退货/取消相关的指南时，会优先适用于下列说明事项;
          </p>
        </div>
        <div className="dev-shop-delivery">
          <p>取消/退货/换货指南</p>
          <ul>
            <li>根据商品的特性及配送地不同配送类型及所需时间会有所不同。</li>
            <li>
              部分订购商品或预约商品的情况，除了基本配送日之外，可能会发生追加配送需要日。
            </li>
            <li>
              即使是同一品牌的商品，由于各商品的出库日期不同，也可以分别配送。
            </li>
            <li>图书山区可能会追加运费和退货费。</li>
            <li>
              商品的配送费根据供应企业的政策而不同，公休日和休息日是不能配送的。
            </li>
          </ul>
        </div>
        <div className="dev-shop-cacel">
          <p>配送信息</p>
          <ul>
            <li>
              商品除了瑕疵之外，尺寸，颜色交换等单纯变心的交换/退货的快递费由顾客负担，产生往返快递费。(根据电子商务等有关消费者保护的法律第18条(撤销要约等)第9款，消费者因情况撤回要约时，快递费由消费者承担。)
            </li>
            <li>
              结算结束后立即取消订单，可在“MY
              Page取消/更换/退货申请”中直接办理。
            </li>
            <li>订购完成后因库存不足等可能会进行取消订单处理，请谅解。</li>
            <li>
              订购状态正在准备商品的情况下，可能已经配送或包装完毕，不能直接进行处理，请通过顾客中心咨询。
            </li>
            <li>换货申请第一次仅限于一次，配送完成后不可追加换货申请。</li>
            <li>请在配送完成后的7天内接收未使用的产品。</li>
            <li>
              不可退货，请务必通过客服中心或“MY
              Page取消订单/更换/退货申请”接受申请。
            </li>
            <li>
              商品缺陷，误配送的情况下快递费可以免费更换/退货，但是显示器的颜色差异，穿戴感，尺寸的个人偏好度不是商品的瑕疵事由。
            </li>
            <li>因顾客不注意而导致商品毁损，变更的情况，无法退货/更换。</li>
            <li>
              按电子商务法，当取消/退货货款延迟退款时，按照电子商务法办理延期退款赔偿手续。
            </li>
          </ul>
        </div>
        <div className="dev-shop-barter">
          <p>无法退货/换货时</p>
          <ul>
            <li>
              使用或者损毁产品，遗漏赠品，商品TAG，保证书，商品附件或者丢失的
            </li>
            <li>
              拆开密封包装或者损毁，丢失内部包装材料的(但非拆封确认产品除外)
            </li>
            <li>商品价值的丧失达到难以再销售的程度</li>
            <li>根据您的要求，订制的产品，除了您以外，很难使用</li>
            <li>根据您的要求，订制的产品，除了您以外，很难使用</li>
            <li>
              有其他有关电子商务等消费者保护的法律规定的撤销要约限制情形的
            </li>
          </ul>
        </div>
        <div className="dev-shop-as">
          <p>A/S指南</p>
          <ul>
            <li>
              至于能否以售后服务(AS)为标准，根据品牌和商品不同，所以有关咨询请通过doubicon客服中心咨询。
            </li>
            <li>
              因商品不良而发生的退货、更换、AS、退款、质量保证及损害赔偿等事项，可以根据消费者纠纷解决标准(公平交易委员会告示)接受。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
