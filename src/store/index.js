import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getTasks({ commit }) {
      db.collection("tarea")
        .get()
        .then((res) => {
          res.forEach((doc) => {
            console.log(doc.id);
            console.log(doc.data());
          });
        });
    },
  },
  modules: {},
});
