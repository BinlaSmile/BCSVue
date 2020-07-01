import Vue from 'vue'
import Router from 'vue-router'
import TableTest from '@/components/TableTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: TableTest
    }
  ]
})
