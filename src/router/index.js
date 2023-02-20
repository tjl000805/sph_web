import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});
router.beforeEach(async (to,from,next)=>{
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if(token){
    if(to.path == '/login'){
      next('/home')
    }else{
      if(name){
        next()
      }else{
       try {
        await store.dispatch('userInfo')
        next()
       } catch (error) {
          await store.dispatch('getLogout')
          next('/login')
       }
      }
  }
  }else{
    let path = to.path
      if(path.indexOf('/trade')!=-1||path.indexOf('/pay')!=-1||path.indexOf('/center')!=-1){
        next('login?redirect='+path)
      }else{
        next()
      }
      
  }
})
export default router;
