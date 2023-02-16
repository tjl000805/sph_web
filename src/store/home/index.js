import { getCategortList,reqBannerList,reqFloorList } from '@/api'

//首页的数据仓库
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
const actions = {
  async  categoryList({commit}){
        let res = await getCategortList()
        if(res.code == 200){
            commit('CATEGORYLIST',res.data)
        }
    },
    async  getBannerList({commit}){
        let res = await reqBannerList()
        if(res.code == 200){
            commit('BANNERLIST',res.data)
        }
    },
    async getFloorList({commit}){
        let res = await reqFloorList()
        if(res.code == 200){
            commit('FLOORLIST',res.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}