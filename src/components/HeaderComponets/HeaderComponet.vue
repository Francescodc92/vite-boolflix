<script>
import { store } from '../../store.js'
export default{
  data(){
     return {
       store
     }
   },
   emits: ['searchMovie']
}
</script>
<template>
  <input type="text" v-model="store.requestUserInput">
  <button @click="$emit('searchMovie')" >cerca</button>
</template>
<style scoped>

</style>