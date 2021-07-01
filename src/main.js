import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/style.css'
import '@/assets/css/icon-font.css';
import GSignInButton from 'vue-google-signin-button'
import axios from './axios'


Vue.use(GSignInButton);

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
