export default {
  data() {
    return {
      algo: "Un texto",
    };
  },
  created() {
    console.log("Hola Mixins " + this.algo);
  },
};
