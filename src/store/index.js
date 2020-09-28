import Vue from "vue";
import Vuex from "vuex";

import { auth } from "../main.js";
import { db } from "../main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loaded: false,
    isLoggedIn: false,
    isLoggingIn: true,
    eventYearOrder: 0,
    count: [],
    participants: [],
  },
  mutations: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setIndex(state, index) {
      state.eventYearOrder = index;
    },
    loadCount(state, count) {
      state.count = count;
    },
    loadParticipants(state, payload) {
      state.participants = payload;
    },
    updateCount(state, count) {
      state.count = count;
    },
  },
  actions: {
    async login({ commit }, payload) {
      this.state.isLoggingIn = false;
      try {
        let response = await auth.signInWithEmailAndPassword(
          payload.email,
          payload.password
        );
        commit("login", response.user);
      } catch (err) {
        this.state.isLoggingIn = true;
        throw err;
      }
    },
    async logout(context) {
      await auth.signOut();
      this.state.isLoggingIn = true;
      context.commit("logout");
    },
    async saveParticipantDetails(context, payload) {
      try {
        await db.collection("Participants").add(payload);
        await db
          .collection("Counter")
          .doc(this.getters.getPaticipantsCount[0].id)
          .update({
            ParticipantsCounter:
              this.getters.getPaticipantsCount[0].detail.ParticipantsCounter +
              1,
          });
      } catch (err) {
        console.log(err);
      }
    },
    async loadCount(context) {
      let response = db.collection("Counter").onSnapshot((snapshot) => {
        let items = [];
        snapshot.forEach((doc) => {
          let data = {
            id: doc.id,
            detail: doc.data(),
          };
          items.push(data);
        });
        context.commit("loadCount", items);
      });
      return response;
    },
    async loadParticipants(context) {
      let response = db
        .collection("Participants")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          let items = [];
          snapshot.forEach((doc) => {
            let data = {
              id: doc.id,
              participants: doc.data(),
            };
            items.push(data);
          });
          context.commit("loadParticipants", items);
        });
      return response;
    },
  },
  getters: {
    getIndex: (store) => {
      return store.eventYearOrder;
    },
    getPaticipantsCount: (store) => {
      return store.count;
    },
    getParticipants: (store) => {
      return store.participants;
    },
    getLogStatus: (store) => {
      return store.isLoggedIn;
    },
  },
  modules: {},
});
