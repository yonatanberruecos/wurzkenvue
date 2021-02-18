import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ServerTable, ClientTable, Event} from 'vue-tables-2';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import EventBus from '@/plugins/event-bus.js'


Vue.config.productionTip = false

Vue.use(ClientTable, {}, false, 'bootstrap4')
Vue.use(EventBus)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
