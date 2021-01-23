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
    component: () => import("../views/Genomes.vue")
    // component: resolve => require(["../views/Genomes.vue"], resolve)
    // component: Genomes
  },
  {
    path: "/help/:type",
    name: "Help",
    component: () => import("../views/Help.vue")
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
