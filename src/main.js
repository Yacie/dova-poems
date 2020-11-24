import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import VueSwal from 'vue-swal';

Vue.use(VueSwal);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
