import React from "react";
import { useRoutes } from "react-router-dom";

import { BaseLayout } from "../layouts";
// 顶部
import Home from "../page/Home";
import Login from "../page/Login";
import Resigin from "../page/Resigin";
import NotFount from "../page/NotFount";
import ShopCar from "../page/ShopCar";
import Detail from "../page/ShopListdetail";
import Shopdetail from "../page/Shopdetail";
import Search from "../page/Search";
import Mone from "../page/Mone"
import Activity from "../page/Search/SearchLink/Activity";
import BuyerShow from "../page/Search/SearchLink/BuyerShow";
import Product from "../page/Search/SearchLink/Product";
import PlayTotal from '../page/PlayTotal'
import OrderDetail from '../page/OrderDetail'
// 二级
import BEST from "../page/Main/PEEB/BEST";
import RVENT from "../page/Main/PEEB/EVENT";
import EXCLUSIVE from "../page/Main/PEEB/EXCLUSIVE";
import POP from "../page/Main/PEEB/POP";
import Children from "../page/Main/ShopList/Children";
import Dress from "../page/Main/ShopList/Dress";
import Parts from "../page/Main/ShopList/Parts";
import Shoes from "../page/Main/ShopList/Shoes";

// 底部服务
import Privacy from "../page/Footer/footer/Privacy";
import About from "../page/Footer/footer/About";
import Partner from "../page/Footer/footer/Partner";
import Global from "../page/Footer/footer/global";
import Sever from "../page/Footer/footer/server";
import Terms from "../page/Footer/footer/Trems";
import Center from "../page/Footer/footer/Center";
import Offers from "../page/Footer/footer/Offers";

function Router() {
  let routes = [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: `/home`,
          element: <Home />,
        },
        {
          path: `/mone`,
          element: <Mone />,
        },
        {
          path: "/resigin",
          element: <Resigin />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/shopcar",
          element: <ShopCar />,
        },
        {
          path: "/shoes",
          element: <Shoes />,
        },
        {
          path: "/dress",
          element: <Dress />,
        },
        {
          path: "/parts",
          element: <Parts />,
        },
        {
          path: "/children",
          element: <Children />,
        },
        {
          path: "/pop",
          element: <POP />,
        },
        {
          path: "/exclusive",
          element: <EXCLUSIVE />,
        },
        {
          path: "/rvent",
          element: <RVENT />,
        },
        {
          path: "/best",
          element: <BEST />,
        },
        {
          path: `/detali/:params`,
          element: <Detail />,
        },
        {
          path: `/shopdetail/:params`,
          element: <Shopdetail />,
        },
        {
          path:'/playTotal/:params',
          element:<PlayTotal />
        }, 
        {
          path:'orderDetail/:params',
          element:<OrderDetail/>
        },
        {
          path: "/search/:params",
          element: <Search />,
          children: [
            {
              path: "/search/:params/activity",
              element: <Activity />,
            },
            {
              path: "/search/:params/buyershow",
              element: <BuyerShow />,
            },
            {
              path: "/search/:params/product",
              element: <Product />,
            },
            {
              path: "/search/:params/",
              element: <Product />,
            },
          ],
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/partner",
          element: <Partner />,
        },
        {
          path: "advisory",
          element: <Sever />,
        },
        {
          path: "global",
          element: <Global />,
        },
        {
          path: "terms",
          element: <Terms />,
        },
        {
          path: "center",
          element: <Center />,
        },
        {
          path: "offers",
          element: <Offers />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFount />,
    },
  ];
  return useRoutes(routes);
}

export default Router;
