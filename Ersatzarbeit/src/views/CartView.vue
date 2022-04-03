<template>
<div>
  <div class="miniCart-Cart">
    <p>Article: {{cartValue}}</p>
    <the-mini-cart/>
  </div>
  <the-cart/>
  </div>
</template>
<script>
import TheMiniCart from '@/components/TheMiniCart.vue'
import TheCart from '@/components/TheCart.vue';
export default {
  components: { TheMiniCart, TheCart },
  data(){
    return{
    }
  },
 computed:{
    cartValue(){
      return this.$store.state.quantity;
    }
  },
}
</script>

<style scoped>
.miniCart-Cart {
 position: absolute;
  top: 10px;
  right: 10px;
  width: 15em;
  
  
}
</style>
