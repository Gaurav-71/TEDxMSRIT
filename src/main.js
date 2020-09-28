import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyA0QATjvVykxHpWrdxR9L1uBNWip0uHPdY",
  authDomain: "tedxmsrit2020.firebaseapp.com",
  databaseURL: "https://tedxmsrit2020.firebaseio.com",
  projectId: "tedxmsrit2020",
  storageBucket: "tedxmsrit2020.appspot.com",
  messagingSenderId: "428070315261",
  appId: "1:428070315261:web:2ef5d18aee3b7ec41fca94",
  measurementId: "G-XJ272QHSC5",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
