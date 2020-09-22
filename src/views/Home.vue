<template>
  <div>
    <h1>Inicio</h1>
    <ul>
      <li v-for="(item, index) in tasks" :key="index">{{item.nombre}}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  methods: {
    ...mapActions(["getTasks"]),
  },
  created() {
    this.getTasks();
  },
  computed: {
    ...mapState(["tasks"]),
  },
};
</script>

<style>
</style>