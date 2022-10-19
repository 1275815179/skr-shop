import request from "./request.js";

// 注册
export function getRegister(
  username,
  password,
  email,
  VerificationCode = 666666
) {
  return request({
    url: "/Register",
    method: "get",
    params: { username, password, email, VerificationCode },
  });
}

// 登录
export function getLogin(username, password) {
  return request({
    url: "/Login",
    method: "get",
    params: { username, password },
  });
}

// 获取商品列表
export function getShopList() {
  return request({
    url: "/Classify",
    method: "get",
  });
}

// 获取所有商品二级名   parent_name = 鞋类
export function getShopListTypeTwo(parent_name, page) {
  return request({
    url: "/ShopList",
    method: "get",
    params: {
      parent_name,
      page,
    },
  });
}

// 获取到安踏分类的篮球鞋
export function getAntBasketball(word) {
  return request({
    url: "/BrandSearch",
    method: "get",
    params: {
      word,
    },
  });
}

// 获取到销量排行榜
export function getHotSale(parent_name) {
  return request({
    url: "HotSale",
    method: "get",
    params: {
      parent_name,
    },
  });
}

// 获取轮播图图片
export function getSwiper() {
  return request({
    url: "/Swiper",
    method: "get",
  });
}

// 获取到安踏分类的篮球鞋
export function getDetail(id) {
  return request({
    url: "/Details",
    method: "get",
    params: {
      id,
    },
  });
}

// 购物车商品数量+1
export function getUpShopCar(customer_id, sku_id) {
  return request({
    url: "UpShopCar",
    method: "get",
    params: {
      customer_id,
      sku_id,
    },
  });
}

// 购物车商品数量-1
export function getDownShopCar(customer_id, sku_id) {
  return request({
    url: "DownShopCar",
    method: "get",
    params: {
      customer_id,
      sku_id,
    },
  });
}

// 删除购物车商品
export function getDeleteShopCar(customer_id, sku_id) {
  return request({
    url: "DeleteShopCar",
    method: "get",
    params: {
      customer_id,
      sku_id,
    },
  });
}

// 获取购物车商品列表
export function getShopCar(customer_id) {
  return request({
    url: "ShopCar",
    method: "get",
    params: {
      customer_id,
    },
  });
}

// 添加购物车
export function AddShopCar(customer_id, sku_id, num, params) {
  return request({
    url: "/AddShopCar",
    method: "get",
    params: {
      customer_id,
      sku_id,
      num,
      params,
    },
  });
}

// 获取地址列表
// customer_id 用户唯一id
export function getAddress(customer_id) {
  return request({
    url: "/GetAddress",
    method: "get",
    params: {
      customer_id,
    },
  });
}

// 获取默认地址
// customer_id 用户唯一id
export function getDefaultAddress(customer_id) {
  return request({
    url: "/GetDefaultAddress",
    method: "get",
    params: {
      customer_id,
    },
  });
}

// 设置默认地址
// id   地址的唯一id
// customer_id   用户唯一id

export function defaultAddress(id, customer_id) {
  return request({
    url: "/defaultAddress",
    method: "get",
    params: {
      id,
      customer_id,
    },
  });
}

// 添加地址
// customer_id  用户唯一id
// name   收件人名字
// tel   收件人电话
// address  地址
// prime    是否为默认地址，传参为1或0
export function addAddress(customer_id, name, tel, address, prime) {
  return request({
    url: "/AddAddress",
    method: "get",
    params: {
      customer_id,
      name,
      tel,
      address,
      prime,
    },
  });
}

// 删除地址
// id 地址唯一id
export function deleteAddress(id) {
  return request({
    url: "/DeleteAddress",
    method: "get",
    params: {
      id,
    },
  });
}

// 修改地址
// 参数 name 名字
// 参数 tel 电话
// 参数 address 地址
// 参数 id 地址唯一id
export function updateAddress(name, tel, address, id) {
  return request({
    url: "/UpdateAddress",
    method: "get",
    params: {
      name,
      tel,
      address,
      id,
    },
  });
}

// 立即购买
// customer_id,  用户id
// money,        总价钱
// sku_ids,      商品id
// num,          数量
// params        参数数组[颜色,尺码]
export function buyOrder(customer_id, money, sku_ids, num, params) {
  return request({
    url: "/BuyOrder",
    method: "get",
    params: {
      customer_id,
      money,
      sku_ids,
      num,
      params,
    },
  });
}

// 从购物车购买，
// 参数 customer_id - 用户唯一id（登陆成功会返回）
// 参数 money - 总价钱
// 参数 sku_ids - 提交的商品id，由于是多个商品，所以以数组形式[799,688],其中为商品id
export function buyOrderCar(customer_id, money, sku_ids) {
  return request({
    url: "/BuyOrder",
    method: "get",
    params: {
      customer_id,
      money,
      sku_ids,
    },
  });
}

// 获取购买订单列表
// customer_id  用户唯一id
export function getRecentOrder(customer_id) {
  return request({
    url: "/RecentOrder",
    method: "get",
    params: {
      customer_id,
    },
  });
}

// 获取所有订单
// order_id 订单id
export function getBuyOrderList(order_id) {
  return request({
    url: "/BuyOrderList",
    method: "get",
    params: {
      order_id,
    },
  });
}

// 提交订单
// order_id  订单号
// address_id 地址id
export function getPlaceOrder(order_id, address_id) {
  return request({
    url: "/PlaceOrder",
    method: "get",
    params: {
      order_id,
      address_id,
    },
  });
}

// 支付接口
// price    价格
// name     商品名称
// describe 商品描述，颜色尺码
// code     订单编号
export function getPay(price, name, describe, code) {
  return request({
    url: "/Pay",
    method: "get",
    params: {
      price,
      name,
      describe,
      code,
    },
  });
}

// 获取订单详情----order_id购买id
export function getDetailOrder(order_id) {
  return request({
    url: "/DetailsOrder",
    method: "get",
    params: { order_id },
  });
}

// 删除订单
export function getDeleteOrder(order_id) {
  return request({
    url: "/DeleteOrder",
    method: "get",
    params: { order_id },
  });
}
// 确认收货
export function getConfirmReceipt(order_id) {
  return request({
    url: "/ConfirmReceipt",
    method: "get",
    params: { order_id },
  });
}

