import { reqAddressInfo,reqOrderInfo } from "@/api";
const state = {
    addressList:[],
    orderInfo:{}
};
const mutations = {
    ADDRESSLIST(state,addressList){
        state.addressList = addressList
    },
    ORDERINFO(state,orderInfo){
        state.orderInfo = orderInfo
    }
};
const actions = {
  async getUserAddress({ commit }) {
    let res = await reqAddressInfo();
    if (res.code == 200) {
        commit('ADDRESSLIST',res.data)
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  async getOrderInfo({ commit }) {
    let res = await reqOrderInfo();
    if (res.code == 200) {
        commit('ORDERINFO',res.data)
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
