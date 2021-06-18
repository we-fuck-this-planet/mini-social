import Vue from 'vue'
import VueCookie from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
