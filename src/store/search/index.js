import { reqSearchInfo }from '@/api/index'
//搜索页的数据仓库
const state = {
    searchList:{}
};
const mutations = {
    POSTSEARCHLISTH(state,searchList){
            state.searchList = searchList
    }
};
const actions = {
    async postSearchInfo({commit},params={}){
        let res = await reqSearchInfo(params)
        if(res.code == 200){
            commit('POSTSEARCHLISTH',res.data)
        }
    }
};
const getters = {
    goodsList(state){
        return state.searchList.goodsList
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}