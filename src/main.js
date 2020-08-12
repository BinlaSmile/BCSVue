import Vue from "vue";
import ElementUI from 'element-ui';
import echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/iconfont.css'
import './assets/css/base.less'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './http'
import apis from './apis'
import './config/vee-validate.js'

Vue.config.productionTip = false;
Vue.prototype.$http = axios
Vue.prototype.$apis = apis
Vue.prototype.$echarts = echarts
Vue.prototype.$border = true // 表格是否显示
Vue.use(ElementUI);
Object.defineProperties(Vue.prototype, {
  echarts: {
    get: () => echarts
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");