import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Storage from '@/utils/storage.js'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/css/common/index.less'
import 'vue2-animate/dist/vue2-animate.min.css'

import './vant'

window.Storage = Storage

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
