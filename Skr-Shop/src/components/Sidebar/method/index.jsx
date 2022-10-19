// 侧边栏左移
export let shiftLift = () => {
  let Sidebar = document.querySelector('.Sidebar');
  Sidebar.style.right = '0px';
};
// 侧边栏右移
export let shiftRight = () => {
  let Sidebar = document.querySelector('.Sidebar');
  Sidebar.style.right = '-300px';
};
// 侧边栏的购物车显示
let flag = false
export let shopCarDisplay = () => {
  flag = !flag
  if(flag){
    shiftLift();
  }
  if(!flag){
    shiftRight()
  }
  let sideShopCar = document.querySelector('.sideShopCar');
  let SideSkrOnLine = document.querySelector('.SideSkrOnLine');
  sideShopCar.style.display = 'block';
  SideSkrOnLine.style.display = 'none';
};
// 侧边栏的客服显示
export let SideSkrOnLineDisplay = () => {
  shiftLift();
  let sideShopCar = document.querySelector('.sideShopCar');
  let SideSkrOnLine = document.querySelector('.SideSkrOnLine');
  sideShopCar.style.display = 'none';
  SideSkrOnLine.style.display = 'block';
};

