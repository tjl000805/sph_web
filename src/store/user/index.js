import { reqCode,userRegister,userLogin,reqGetUserInfo,reqLogout }from '@/api/index'
import {setToken,getToken,delToken} from '@/utils/token'
const state = {
    code:'',
    token:getToken(),
    userInfo:{}
};
const mutations = {
    GETCODE(state,code){
        state.code = code
    },
    USERTOKEN(state,token){
        state.token = token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEARALL(state){
        state.token = ''
        state.userInfo= {}
        delToken()
    }
};
const actions = {
    async getCode({commit},phone){
    let res = await reqCode(phone)
        if(res.code == 200){
            commit('GETCODE',res.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    async toRegister({commit},params){
        let res = await userRegister(params)
            if(res.code == 200){
                return 'ok'
            }else{
                return Promise.reject(new Error('faile'))
            }
        },
        async toLogin({commit},params){
        let res = await userLogin(params)
            if(res.code == 200){
                commit('USERTOKEN',res.data.token)
                setToken(res.data.token)
                return 'ok'
            }else{
                return Promise.reject(new Error('faile'))
            }
        },
        async userInfo({commit}){
            let res = await reqGetUserInfo()
                if(res.code == 200){
                    commit('GETUSERINFO',res.data)
                    return 'ok'
                }else{
                    return Promise.reject(new Error('faile'))
                }
            },
            async getLogout({commit}){
                let res = await reqLogout()
                    if(res.code == 200){
                        commit('CLEARALL',res.data)
                        return 'ok'
                    }else{
                        return Promise.reject(new Error('faile'))
                    }
                }
};
const getters = {
};
export default {
    state,
    mutations,
    actions,
    getters
}