export const setToken=(token)=>{
    return localStorage.setItem('TOKEN',token)
}
export const getToken=()=>{
    return localStorage.getItem('TOKEN')
}
export const delToken=()=>{
    return localStorage.removeItem('TOKEN')
}