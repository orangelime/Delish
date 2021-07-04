import Vue from 'vue'
import Vuex from 'vuex'
//import uSignin from './modules/uSignin'
import gSignin from './modules/gSignin'
import userSignin from './modules/userSignin'
import errors from './modules/errors'
import menu from './modules/menu'

Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    //uSignin,
    gSignin,
    userSignin,
    errors,
    menu
  }  
  
})
