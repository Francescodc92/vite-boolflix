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
  <h2>movies</h2>
 <ul>
  <li v-for="(movie, index) in store.moviesArray" :key="index">
    <InfoListComponet :movieObj="movie" />
  </li>
 </ul>
 <h2>series</h2>
 <ul>
  <li v-for="(serie, index) in store.seriesArray" :key="index">
    <InfoListComponet :movieObj="serie" />
  </li>
 </ul>
</template>
<style scoped>

</style>