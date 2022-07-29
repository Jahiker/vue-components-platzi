<template>
  <div>{{ text }}</div>
  <div>{{ algo }}</div>
</template>

<script>
import base from "@/mixins/base";

export default {
  name: "App",
  mixins: [base],
  data() {
    return {
      text: "Hola Vue",
    };
  },
  beforeCreate() {
    // No se ha inicializado el acceso a la reactividad de Vue y no hay data
    // No existe el elemento, ni se ha agregado al DOM
    console.log("beforeCreate", this.$data, this.$el);
  },
  created() {
    // Se inicializa el acceso a la reactividad de Vue y ya hay data
    // Ya existe el elemento, mas no se ha agregado al DOM
    console.log("created", this.$data, this.$el);
  },
  mounted() {
    // Ya hay acceso a la reactividad de Vue y ya hay data
    // Ya existe el elemento y se ha agregado al DOM
    console.log("mounted", this.$data, this.$el);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease;
}
</style>
