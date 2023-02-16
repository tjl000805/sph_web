import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Search from "@/views/Search";
import Detail from "@/views/Detail";
import AddCartSuccess from "@/views/AddCartSuccess";
import ShopCart from "@/views/ShopCart";

export default [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/shopcart",
      name:'shopcart',
      component: ShopCart,
      meta:{show:true}
    },
    {
      path: "/addcart",
      name:'addcart',
      component: AddCartSuccess,
      meta:{show:true}
    },
    {
      path: "/detail/:skuid",
      component: Detail,
      meta:{show:true}
    },
    {
      path: "/home",
      component: Home,
      meta:{show:true}
    }, 
    {
      path: "/login",
      component: Login,
      meta:{show:false}
    },
    {
      path: "/register",
      component: Register,
      meta:{show:false}
    },
    {
      path: "/search/:keyword",
      component: Search,
      meta:{show:true},
      name:'search'
    },
  ]