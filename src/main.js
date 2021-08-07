import Vue from 'vue'
import App from './App.vue'
import 'bulma/css/bulma.css'
import DateUtils from './utils/DateUtils.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(DateUtils)