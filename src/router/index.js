import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import TableTest from '@/components/TableTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['@/views/login/login'], resolve);
      }
    }
  ]
})
