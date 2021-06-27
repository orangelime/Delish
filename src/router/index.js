import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "home" */ "../views/index.vue")
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import("../views/Signin.vue")
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import("../views/Signup.vue")
  },
  {
    path: '/shoppingcart',
    name: 'Shoppingcart',
    component: () => import("../views/Shoppingcart.vue")
  },
  {
    path: '/forgot',
    name: 'ForgotPassword',
    component: () => import("../views/ForgotPassword.vue")
  },
  {
    path: '/reset/:token',
    name: 'ResetPassword',
    component:() => import("../views/ResetPassword.vue")
  }
]



const router = new VueRouter({
 // mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//router guard
router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('token');
  if( isLogin ){
    return next();
  } else {
    if( to.path !== '/signin')
      next()
    else
      next();
  }
});



export default router
