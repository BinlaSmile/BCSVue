import Vue from "vue";
import VueRouter from "vue-router";
import back from '@/router/back';
import front from '@/router/front';
import frontIndex from "@/views/front/index";
import backIndex from "@/views/back/index";


Vue.use(VueRouter);

const routes = [
  ...back,
  ...front,

  {
    path: "/",
    name: "backIndex",
    component: backIndex
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
