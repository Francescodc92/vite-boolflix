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
  <header>
    <div class="container-fluid">
      <input type="text" v-model="store.requestUserInput" placeholder="Cerca...">
      <button class="btn btn-light ms-2" @click="$emit('searchMovie')" >Cerca</button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../../assets/scss/main.scss" as *;
@use "../../assets/scss/partials/variables.scss" as *;
header{
  height: $header-height;
  background-color: #434343;
  display: flex;
  align-items: center;
  input{
    background-color: transparent;
    color: #fff;
    &::placeholder{
      color:#ddd;
    }
  }
  
}
</style>