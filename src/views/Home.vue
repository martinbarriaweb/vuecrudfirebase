<template>
  <div>
    <h1>Inicio</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getTasks"]),
  },
  created() {
    this.getTasks();
  },
};
</script>

<style>
</style>