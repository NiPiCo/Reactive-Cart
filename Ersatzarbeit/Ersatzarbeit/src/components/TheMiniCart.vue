<template>
  <div>
    <ul>
      <li v-for="(value, index) in getCartValue" :key="index">
        <mini-cart-article
          :article="value"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import MiniCartArticle from "./MiniCartArticle.vue";

export default {
  components: {
    MiniCartArticle,
  },
  data() {
    return {
      amount: 0,
      name: "Test",
    };
  },
  computed: {
  //Artikel im Warenkorb laden
    getCartValue() {
      return this.$store.state.cartValue;
    },
  },
  //Artikelmenge im Warenkorb aus dem State laden
  mounted() {
    this.$store.commit("getQuantity");
  },
};
</script>

<style lang="scss" scscoped>
ul {
  list-style-type: none;
}
</style>