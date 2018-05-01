import Vue from 'vue'
import App from './app.vue'
import VueSticky from '../src'

Vue.config.debug = true

Vue.use(VueSticky)

new Vue({
  el: '#app',
  render: h => h(App),
})