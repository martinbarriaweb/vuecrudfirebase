import Vue from "vue";
import Vuex from "vuex";
import { db } from "../firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {
      name: "",
      id: "",
    },
  },
  mutations: {
    setTasks(state, payload) {
      state.tasks = payload;
    },
    setTask(state, payload) {
      state.task = payload;
    },
    setDeleteTask(state, payload) {
      console.log(payload);
      state.tasks = state.tasks.filter((task) => task.id !== payload);
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
    getTask({ commit }, idTask) {
      db.collection("tarea")
        .doc(idTask)
        .get()
        .then((doc) => {
          let tarea = doc.data();
          tarea.id = doc.id;
          commit("setTask", tarea);
          console.log(tarea);
        });
    },
    editTask({ commit }, task) {
      db.collection("tarea")
        .doc(task.id)
        .update({
          nombre: task.nombre,
        })
        .then(() => {
          router.push("/");
        });
    },
    addTask({ commit }, taskName) {
      db.collection("tarea")
        .add({
          nombre: taskName,
        })
        .then(() => {
          router.push("/");
        });
    },
    deleteTask({ commit }, idTask) {
      db.collection("tarea")
        .doc(idTask)
        .delete()
        .then(() => {
          commit("setDeleteTask", idTask);
        });
    },
  },
  modules: {},
});
