<template>
  <button @click="show = !show">Menu</button>
  <transition name="fade">
    <MenuMain v-show="show" />
  </transition>
</template>

<script>
import MenuMain from "./components/MenuMain.vue";

export default {
  name: "App",
  components: {
    MenuMain,
  },
  data() {
    return {
      show: false,
    };
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
