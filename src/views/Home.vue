<template>
  <div>
    <h1>Inicio</h1>
    <router-link :to="'Agregar'">
      <button>Agregar tarea</button>
    </router-link>
    <ul>
      <li v-for="(item, index) in tasks" :key="index">
        {{item.nombre}} - {{item.id}}
        <router-link :to="{name: 'Editar', params: {id: item.id}}">
          <button>Editar</button>
        </router-link>
      </li>
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