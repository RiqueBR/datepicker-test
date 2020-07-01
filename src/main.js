import Vue from 'vue'
import App from './App.vue'

import { Datepicker, Field } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Datepicker)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
