<script>
import { store } from '../../store.js'
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
  }
}
</script>
<template>
 <ul>
  <li v-for="(movie, index) in store.moviesArray" :key="index">
    <ul class="mt-3">
      <li>titolo: {{ movie.title }}</li>
      <li>titolo originale: {{ movie.original_title }}</li>
      <li>
        lingua:
         <span :class="iconClass(movie.original_language)"></span>
      </li>
      <li>voto: {{ movie.vote_average }}</li>
    </ul>
  </li>
 </ul>
</template>
<style scoped>

</style>