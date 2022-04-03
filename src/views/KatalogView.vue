<template>
<div>

  <div>
    
    <p>Test</p><the-katalog/>
  </div>
  <div class="home">
    <p>Article: {{cartValue}}</p>
    
    <the-mini-cart />
  </div>
  </div>
</template>

<script>
import TheMiniCart from "@/components/TheMiniCart.vue";
import TheKatalog from '@/components/TheKatalog.vue';

// @ is an alias to /src

export default {
  name: "HomeView",
  computed:{
    cartValue(){
      return this.$store.state.quantity
    }
  },
  components: {
    TheMiniCart,
    TheKatalog,
  },
  
};
</script>

<style scoped>
.home {
 position: absolute;
  top: 10px;
  right: 10px;
  width: 15em;
  
  
}
</style>
