import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/mock/mockServe'
//三级联动注册全局组件
import TypeNav from '@/components/TypeNav'

import Pagination from '@/components/Pagination'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)

import router from '@/router'
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  router,
  store,
  scrollBehavior (to, from, savedPosition) {
    return { y : 0 }
  }
}).$mount('#app')
