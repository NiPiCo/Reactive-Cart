<template>
  <div class="Article">
    <h3>{{ name }}</h3>
    <img src="" alt="BILD" />
    <p>{{ preis }} €</p>
    <button @click="addToCart(article)">In den Warenkorb</button>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    preis: {
      type: Number,
      required: true,
    },
  },
  methods: {
    addToCart(article) {
      this.$store.commit("addToCart", article);
      this.$store.commit("getQuantity");
    
    },
  },
};
</script>

<style  scoped>
button {
  margin: 1em;
}
ul {
  float: left;
}
li {
  margin: 2em;
}
.Article {
  height: 30em;
  display: flex;
  flex-direction: column;
  width: 20em;
  justify-content: center;
  margin: auto;
  margin-top: 1em;
  background-color: rgb(142, 227, 51);
}
</style>