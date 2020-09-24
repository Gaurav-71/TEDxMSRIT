import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Team from "../views/Team.vue";
import About from "../views/About.vue";
import Speakers from "../views/Speakers.vue";
import ContactUs from "../views/Contacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
