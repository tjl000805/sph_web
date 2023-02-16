import { reqCartList, delCartById, reqUpdateChecked } from "@/api";
import { Promise } from "core-js";
const state = {
  cartList: [],
};
const mutations = {
  CARLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const actions = {
  async getCarList({ commit }) {
    let res = await reqCartList();
    if (res.code == 200) {
      commit("CARLIST", res.data);
    }
  },
  async delCartItem({ commit },skuId) {
    let res = await delCartById(skuId);
    if (res.code == 200) {
      return 'ok'
    }else{
      return Promise.reject(new Error('faile'))
    }
  },
  async updateChecked({commit},{skuId,isChecked}){
   let res = await reqUpdateChecked(skuId,isChecked)
   if (res.code == 200) {
    return 'ok'
  }else{
    return Promise.reject(new Error('faile'))
  }
  },
  delAllChecked({dispatch,getters}){
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('delCartItem',item.skuId):''
      PromiseAll.push(promise)
    });
    return Promise.all(PromiseAll)
  }
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
};
