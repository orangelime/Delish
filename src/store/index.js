import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const state = {
  token:window.localStorage.getItem('token'),
}

const getters = {
  isSignIn:state => !!state.token
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
    
  },
  logout:({commit}) => {
    commit('setToken',null)
    window.localStorage.removeItem('token')
    
  }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
