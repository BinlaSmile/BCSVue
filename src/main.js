import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'; //引入IVIEW组件
import 'iview/dist/styles/iview.css';
import 'vue-easytable/libs/themes-base/index.css'//引入vue-easytable
import axios from 'axios' //引入axios
import {VTable,VPagination} from 'vue-easytable'

Vue.config.productionTip = false
Vue.use(iView);
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
