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
    meta: {
      title: "TEDxMSRIT",
    },
  },
  {
    path: "/succesful-registration",
    name: "Success",
    component: Success,
    meta: {
      title: "TEDxMSRIT",
    },
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
    meta: {
      title: "TEDxMSRIT | Team",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "TEDxMSRIT | About",
    },
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: Speakers,
    meta: {
      title: "TEDxMSRIT | Speakers",
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
    meta: {
      title: "TEDxMSRIT | Contact Us",
    },
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    meta: {
      title: "TEDxMSRIT | Events",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "TEDxMSRIT | Register",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "TEDxMSRIT | Login",
    },
  },
  {
    path: "/admin/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
      title: "Admin",
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
  document.title = to.meta.title;
  if (!loggedIn && requiresAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
