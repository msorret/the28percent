import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home";
import PastNewsletters from "../pages/PastNewsletters";
import Events from "../pages/Events";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "/home"
    },

    {
      path: "/home",
      component: Home
    },

    {
      path: "/pastnewsletters",
      component: PastNewsletters
    },

    {
      path: "/events",
      component: Events
    }
  ]
});
