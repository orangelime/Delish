import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const state = {
  token:window.localStorage.getItem('token'),
  isShow:false
}

const getters = {
  isSignIn:state => !!state.token,
  isShow:state => state.isShow
}

const mutations = {
  setToken:(state,token) => {
    state.token = token
  }
}

const actions = {
  login:({commit}) => {
    commit('setToken','ImSignIn')
    window.localStorage.setItem('token', 'ImSignIn')
    router.push("/index");
    console.log('in')
  },
  logout:({commit}) => {
    commit('setToken',null)
    window.localStorage.removeItem('token')
    console.log('out')
  }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
