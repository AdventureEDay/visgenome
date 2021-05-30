import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Genomes from "../views/Genomes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/genomes/:type",
    name: "Genomes",
    component: () => import("../views/Tracks.vue")
    // component: resolve => require(["../views/Genomes.vue"], resolve)
    // component: Genomes
  },
  {
    path: "/download",
    name: "Download",
    component: () => import("../views/Download.vue")
  },
  {
    path: "/help/:type",
    name: "Help",
    component: () => import("../views/Help.vue")
  },
  {
    // 刷新404?,这是因为和后端的url撞了,加载后端circos图片使用了/circos路径, 所以修改了这里的path
    path: "/vis_circos/:type",
    name: "Circos",
    component: () => import("../views/Circos.vue")
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("../views/Example.vue")
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
