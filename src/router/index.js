import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home'
//import Popup from '../views/Popup'
import Index from '../views/index'
import Shoppingcart from '@/views/Shoppingcart'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'

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
    path: '/signup',
    name: 'Signup',
    component: Signup
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


//router guard
router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('token') == 'ImSignin' ;
  if( isLogin ){
    next('/');
  } else {
    if( to.path !== '/signin')
      next()
    else
      next();
  }
});

export default router
