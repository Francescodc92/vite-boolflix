<script>
import { store } from '../../store.js'
export default {
  data(){
    return {
      store
    }
  }
}
</script>
<template>
 <input type="text" v-model="store.requestUserInput">
 <button @click="$emit('searchMovie')" >cerca</button>
 <ul>
  <li v-for="(movie, index) in store.moviesArray" :key="index">
    <ul class="mt-3">
      <li>titolo: {{ movie.title }}</li>
      <li>titolo originale: {{ movie.original_title }}</li>
      <li>lingua: {{ movie.original_language }}</li>
      <li>voto: {{ movie.vote_average }}</li>
    </ul>
  </li>
 </ul>
</template>
<style scoped>

</style>