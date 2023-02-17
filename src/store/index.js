import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
//引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";
import cart from "./cart";
import user from "./user";
import trade from "./trade";

export default new Vuex.Store({
    //实现vuex仓库模块化开发存储数据
    modules:{
        home,search,detail,cart,user,trade
    }
})