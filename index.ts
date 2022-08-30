import Vue from "vue";
import routes from "vue-auto-routing";
import Router from "vue-router";
// import { createRouter, createWebHistory } from "vue-router";
import { createRouterLayout } from "vue-router-layout";
Vue.config.productionTip = false;
Vue.use(Router);
const RouterLayout = createRouterLayout((layout) => {
  return import("@/layouts/" + layout + ".vue");
});
console.log(routes);
// const router = new Router({
//   routes,
// });
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
const router = new Router({
  routes: [
    {
      path: "/",
      component: RouterLayout,
      children: routes,
    },
  ],
});
new Vue({
  router,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  render: (h) => h("div", { id: "app", class: "h-100"}, [h("router-view")]),
}).$mount("#app");
