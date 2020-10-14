import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import '@/assets/sass/app.scss';
import '@/assets/css/style.css'
import '@/assets/css/icon-font.css';
import GSignInButton from 'vue-google-signin-button'

Vue.use(GSignInButton);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
