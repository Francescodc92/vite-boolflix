<script>
import { store } from '../../store.js'
import InfoListComponet from './InfoListComponet.vue'
export default {
  data(){
    return {
      store
    }
  },
  methods:{
    iconClass(language){
      if(language == 'en'){
        language = 'us'
      }else if(language == 'ja'){
        language = 'jp'
      }
      const iconClass = 'fi ' + 'fi-' + language

      return iconClass
    }
  },
  components:{
    InfoListComponet
  }
}
</script>
<template>
  <main class="pb-3">
    <div class="container-fluid">
      <h2 v-if="store.moviesArray.length > 0" class="text-uppercase py-5">movies</h2>
      <div class="row px-2 row-gap-3">
        <div class="col-12 col-sm-6 col-md-3  col-lg-2" v-for="(movie, index) in store.moviesArray" :key="index">
          <InfoListComponet :movieObj="movie" :typeElement="'movie'" />
        </div>
      </div>
    
     <h2 v-if="store.seriesArray.length > 0" class="text-uppercase py-5">series</h2>
     <div class="row px-2 row-gap-3">
        <div class="col-12 col-sm-6 col-md-3  col-lg-2" v-for="(serie, index) in store.seriesArray" :key="index">
          <InfoListComponet :movieObj="serie" :typeElement="'serie'" />
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
@use "../../assets/scss/main.scss" as *;
@use "../../assets/scss/partials/variables.scss" as *;
main{
  min-height: calc(100vh - $header-height);
  background-color: black;
  background-image: url(../../assets/img/netflix-icon.avif);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;
  color: #fff;
}
</style>