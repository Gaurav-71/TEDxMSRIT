import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store/index.js";

import Landing from "../views/Landing.vue";
import Team from "../views/Team.vue";
import About from "../views/About.vue";
import Speakers from "../views/Speakers.vue";
import ContactUs from "../views/Contacts.vue";
import Events from "../views/Events.vue";
import Register from "../views/Register.vue";
import Login from "../views/Admin/Login.vue";
import Home from "../views/Admin/Home.vue";
import Success from "../views/Success.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/succesful-registration",
    name: "Success",
    component: Success,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: Speakers,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.isLoggedIn;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (!loggedIn && requiresAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
