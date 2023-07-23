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
  <main class="pb-3" :class="store.modalIsOpen ? 'modal-active' : ''">
    <div class="ms-loader" 
      v-if="store.moviesArray.length < store.responseNumberMovie  || store.seriesArray.length < store.responseNumberSeries "
    >
    <div class="spinner-border ms-spinner fs-2" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </div>
    <div v-else class="container-fluid">
      <h2 v-if="store.moviesArray.length > 0" class="text-uppercase fs-4 text-secondary py-5">movies</h2>
      <div class="row px-2 row-gap-3">
        <div class="col-12 col-sm-6 col-md-3  col-lg-2" v-for="(movie, index) in store.moviesArray" :key="index">
          <InfoListComponet :movieObj="movie" :typeElement="'movie'" />
        </div>
      </div>
    
     <h2 v-if="store.seriesArray.length > 0" class="text-uppercase fs-4 text-secondary py-5">series</h2>
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
  background-position: center;
  color: #fff;
  &.modal-active{
    height:calc(100vh - $header-height);
    overflow: hidden;
  }

  .ms-loader{
    height: calc(100vh - $header-height);
    display: flex;
    justify-content: center;
    .ms-spinner{
      width: 80px;
      height: 80px;
      margin-top: 20px;
    }
  }

}
</style>