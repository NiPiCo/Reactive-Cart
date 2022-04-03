<template>
  <div>
    <ul>
      <li v-for="(value, index) in getCartValue" :key="index">
        <cart-article  :article="value"/>
      </li>
    </ul>
    <p>Summe:{{getSum}}€</p>
    <button v-if="getCartValue.length > 0">PAY</button>
  </div>
</template>

<script>

import CartArticle from './CartArticle.vue';

export default {
  components: {
  
    CartArticle,
  },
  data() {
    return {
      amount: 0,
      name: "Test",
    };
  },
  computed: {
    getCartValue() {
      return this.$store.state.cartValue;
    },
    getSum(){
        var sum = 0
      for(var i= 0; i< this.getCartValue.length; i++){
        sum += this.getCartValue[i].menge * this.getCartValue[i].preis
      }
      return sum
    }
  },
};
</script>

<style lang="scss" scscoped>
ul {
  list-style-type: none;
 
}
