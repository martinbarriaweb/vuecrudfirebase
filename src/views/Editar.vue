<template>
  <div>
    <h1>{{task.id}} - {{task.nombre}}</h1>
    <form @submit.prevent="editTask(task)">
      <input v-model="task.nombre" type="text" />
      <button type="submit">Editar</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getTask(this.id);
  },
  methods: {
    ...mapActions(["getTask", "editTask"]),
  },
  computed: {
    ...mapState(["task"]),
  },
};
</script>

<style>
</style>