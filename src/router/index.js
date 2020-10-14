import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home'
//import Popup from '../views/Popup'
import Index from '../views/index'
import Shoppingcart from '@/views/Shoppingcart'
import Signin from '@/views/Signin'

Vue.use(VueRouter)

  const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: Shoppingcart
  }
]



const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由守衛
router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('token') == 'ImSignin' ;
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/signin')
      next('/signin');
    else
      next();
      
  }
});

export default router
