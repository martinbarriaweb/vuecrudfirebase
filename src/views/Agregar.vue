<template>
  <div>
    <h1>Add task</h1>
    <form @submit.prevent="addTask(name)">
      <input v-model="name" type="text" />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Agregar",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(["addTask"]),
  },
};
</script>

<style>
</style>