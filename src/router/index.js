import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import VueRouter from "vue-router";
import Dashboard from "../views/dashboardholder";

Vue.use(VueRouter);
Vue.component("apexchart", VueApexCharts);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "search",
        name: "search",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/search")
      },
      {
        path: "myaccount",
        name: "myaccount",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/mystocks")
      },
      {
        path: "view/:sym",
        props: true,
        name: "stock",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/stock")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
