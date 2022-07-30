export default {
  data() {
    return {
      algo: "Jahiker",
    };
  },
  methods: {
    saludo(name) {
      console.log("Hola " + name);
    },
  },
  created() {
    console.log("Hola Mixins " + this.algo);
    this.saludo(this.algo);
  },
};
