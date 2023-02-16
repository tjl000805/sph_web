import { reqDetailInfo,reqAddShopCar } from "@/api";
import { getUUID } from '@/utils/uuid_token'
const state = {
    detailInfo:{},
    uuid_token:getUUID()
};
const mutations = {
    CATDETAILINFO(state,detailInfo){
        state.detailInfo = detailInfo
    }
};
const actions = {
    async getDetailInfo({commit},skuId){
        let res = await reqDetailInfo(skuId)
        if(res.code == 200){
            commit('CATDETAILINFO',res.data)
        }
    },
    async postAddShopCar({commit},{skuId,skuNum}){
        let res = await reqAddShopCar(skuId,skuNum)
        if(res.code == 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {
    categoryView(state){
        return state.detailInfo.categoryView || {}
    },
    skuInfo(state){
        return state.detailInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.detailInfo.spuSaleAttrList || []
    }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
