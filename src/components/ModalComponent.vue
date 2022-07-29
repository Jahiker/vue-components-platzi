<template>
  <div>
    <button @click="toggle">Modal</button>
    <teleport to="body">
      <div v-show="show" class="modal">
        <h1>Titulo</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quae
          commodi accusantium excepturi sunt esse velit dolore repellat
          perferendis aliquid neque quidem sed, voluptates veritatis harum.
          Tenetur et fugit illo?
        </p>
        <button @click="toggle">Cerrar</button>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>
