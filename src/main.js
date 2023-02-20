import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/mock/mockServe'
//三级联动注册全局组件
import TypeNav from '@/components/TypeNav'

import Pagination from '@/components/Pagination'
import { Button,MessageBox } from 'element-ui';
Vue.use(Button)
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
import * as API from '@/api'
import VueLazyload from 'vue-lazyload'
import atm from '@/assets/images/1.gif'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: atm,
  loading: atm,
  attempt: 1
})
import router from '@/router'
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$api = API;
  },
  router,
  store,
  scrollBehavior (to, from, savedPosition) {
    return { y : 0 }
  }
}).$mount('#app')
