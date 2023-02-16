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