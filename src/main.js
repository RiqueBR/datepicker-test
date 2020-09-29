import Vue from 'vue'
import App from './App.vue'


// Import Duet Date Picker
import { defineCustomElements } from "@duetds/date-picker/dist/loader";

// ...
// configure Vue.js to ignore Duet Date Picker
Vue.config.ignoredElements = [/duet-\w*/];

// Register Duet Date Picker
defineCustomElements(window);

new Vue({
  render: h => h(App)
}).$mount("#app");
