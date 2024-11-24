<template>
  <div>
    <h1>CRUD con Vue.js y Firebase</h1>
    <AgregarUsuario />
    <ListaUsuarios />
  </div>
</template>

<script>
import AgregarUsuario from "./components/AgregarUsuario.vue";
import ListaUsuarios from "./components/ListaUsuarios.vue";

export default {
  components: {
    AgregarUsuario,
    ListaUsuarios,
  },
};
</script>

<style>
    button {
        margin: 5px;
        padding: 5px;
        background-color: bisque;
        color: gray;
        font-weight: bold;
        border: 1px solid gray;
        border-radius: 10px;
    }
</style>