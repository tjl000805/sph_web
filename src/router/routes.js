import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";
import Trade from "@/views/Trade";
import Pay from "@/views/Pay";
import PaySuccess from "@/views/PaySuccess";
import Center from "@/views/Center";
//二级
import MyOrder from "@/views/Center/myOrder";
import GroupOrder from "@/views/Center/groupOrder";

export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/center",
    name: "center",
    component: Center,
    meta: { show: true },
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect:'/center/myorder'
      }
    ],
  },
  {
    path: "/paysuccess",
    name: "paysuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    name: "pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path == '/trade'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path == '/shopcart'){
        next()
      }else{
        next(false)
      }
    }
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/addcart",
    name: "addcart",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
    meta: { show: false },
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false },
  },
  {
    path: "/search/:keyword",
    component: Search,
    meta: { show: true },
    name: "search",
  },
];
