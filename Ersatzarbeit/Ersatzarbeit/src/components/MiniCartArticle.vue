<template>
  <div class="miniCart">
    <div>
      <div class="row">
        <h5>{{ article.name }}</h5>
        <p>{{ article.preis * article.menge }}€</p>
      </div>
      <div class="row">
        <img src="" alt="BILD" /> <button @click="itemMinus()">-</button>
        <p>{{article.menge }}</p>
        <button @click="itemPlus()">+</button>
      </div>
    </div>
    <button  @click="deleteItem()">Delete</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    article:{
      type:Object,
      required:true
    }
  },
  computed: {},
  methods: {
    deleteItem(){
      console.log("xxxx")
      this.$store.commit('deleteFromCart', this.article)
      this.$store.commit("getQuantity");
    },
    itemMinus() {
      this.$store.commit("minus", this.article.id);
      this.$store.commit("getQuantity");
    },
    itemPlus() {
      this.$store.commit("plus", this.article.id);
      this.$store.commit("getQuantity");
    },
  },
};
</script>

<style lang="scss" scscoped>
#menge {
  width: 2em;
  margin: 2px;
}
.row {
  display: flex;
  margin: auto;
}

.miniCart {
  display: flex;
  height: 12em;

  justify-content: end;
  margin: auto;
  margin-top: 1em;
  background-color: rgb(243, 233, 159);
}
</style>