import Vue from 'vue'
import Vuex from 'vuex'
import uSignin from './modules/uSignin'
import gSignin from './modules/gSignin'


Vue.use(Vuex)


export default new Vuex.Store({
  modules:{
    uSignin,
    gSignin
  }  
  
})
