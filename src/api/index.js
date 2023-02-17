import requests from "./request";
import mockRequest from "./mockRequest";

export const getCategortList = () =>{
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

export const reqBannerList = () =>{
    return mockRequest({url:'/banner',method:'get'})
}

export const reqFloorList = () =>{
    return mockRequest({url:'/floor',method:'get'})
}

export const reqSearchInfo = (params) =>{
    return requests({url:'/list',method:'post',data:params})
}

export const reqDetailInfo = (skuId) =>{
    return requests({url:`/item/${skuId}`,method:'get'})
}

export const reqAddShopCar = (skuId,skuNum) =>{
    return requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}

export const reqCartList = () =>{
    return requests({url:`/cart/cartList`,method:'get'})
}

export const delCartById = (skuId) =>{
    return requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
}

export const reqUpdateChecked = (skuId,isChecked) =>{
    return requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
}

export const reqCode = (phone) =>{
    return requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
}

export const userRegister = (params) =>{
    return requests({url:`/user/passport/register`,method:'post',data:params})
}

export const userLogin = (params) =>{
    return requests({url:`/user/passport/login`,method:'post',data:params})
}

export const reqGetUserInfo = () =>{
    return requests({url:`/user/passport/auth/getUserInfo`,method:'get'})
}

export const reqLogout = () =>{
    return requests({url:`/user/passport/logout`,method:'get'})
}

export const reqAddressInfo = () =>{
    return requests({url:`/user/userAddress/auth/findUserAddressList`,method:'get'})
}

export const reqOrderInfo = () =>{
    return requests({url:`/order/auth/trade`,method:'get'})
}

export const reqSubmitOrder = (tradeNo,params) =>{
    return requests({url:`/order/auth/submitOrder?${tradeNo}`,method:'post' ,data:params})
}