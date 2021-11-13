import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Votes from "../views/Votes.vue";
import Trips from "../views/Trips.vue";
import Agencies from "../views/Agencies.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/votes",
    name: "Votes",
    component: Votes,
    meta: {
      title: "Votes",
    },
  },
  {
    path: "/trips",
    name: "Trips",
    component: Trips,
    meta: {
      title: "Trips",
    },
  },
  {
    path: "/agencies",
    name: "Agencies",
    component: Agencies,
    meta: {
      title: "Agencies",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Graduation -> ${to.meta.title}`;
  next();
});

export default router;
