<template>
    <div class="katalog">
        <ul >
            <li v-for="(article,index) in getArticles" :key="index"  >
                <katalog-article :name="article.name" :preis="article.preis" :article="article" />
            </li>
            
        </ul>
      
    </div>
</template>

<script>
import KatalogArticle from "./KatalogArticle.vue";
export default {
    computed:{
   getArticles(){
          return  this.$store.state.articles
       }
    },
  components:{
      KatalogArticle
  }
}
</script>

<style scoped>
.katalog{
    display: flex;
    align-items: center;
    justify-content: center;
}
ul li{
    float: left;
    margin: auto;
    margin-left: 1em;
    }

</style>