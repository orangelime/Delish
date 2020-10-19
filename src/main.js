import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import '@/assets/sass/app.scss';
import '@/assets/css/style.css'
import '@/assets/css/icon-font.css';
import GSignInButton from 'vue-google-signin-button'
import GAuth2 from 'vue-google-oauth2'
import gauth from './auth/gauth'

Vue.use(GSignInButton,GAuth2,gauth);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
