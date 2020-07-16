import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Login from '@/views/login/login'
import Layout from '@/views/layout/layout'
import TableTest from '@/components/TableTest'

Vue.use(Router)
export const constantRouterMap = [
  {path:'/login',component:Login,hidden:true},
  {
    path:'/',
    component:Layout,
    redirect:'/home',
    name:'首页',
    hidden:true,
  }
]
export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
export const asyncRouterMap = []
