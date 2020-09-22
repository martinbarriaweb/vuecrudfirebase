import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },
  },
  actions: {
    getTasks({ commit }) {
      db.collection("tarea")
        .get()
        .then((res) => {
          const tasks = [];
          res.forEach((doc) => {
            let task = doc.data();
            task.id = doc.id;
            tasks.push(task);
          });
          commit("setTasks", tasks);
        });
    },
  },
  modules: {},
});
