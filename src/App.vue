<script>
  import HeaderComponet from './components/HeaderComponets/HeaderComponet.vue';
  import MainComponet from './components/MainComponets/MainComponet.vue';
  import FooterComponet from './components/FooterComponets/FooterComponet.vue';
  import { store } from './store.js'
  import axios from 'axios';
  export default{
    data(){
      return {
        store
      }
    },
    components:{
      HeaderComponet,
      MainComponet,
      FooterComponet
    },
    methods:{
      getData(){
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params:{
            api_key: this.store.requestKey,
            query:this.formatInputUser(this.store.requestUserInput)

          }
        })
        .then(res =>{
          console.log(res.data.results)
          this.store.moviesArray = res.data.results
        })
      },
      formatInputUser(userInput){
        const formattedInput =  userInput.replace(/\s/g  , '+')
        return formattedInput
      }
    }
  }

</script>

<template>
  <HeaderComponet/>
  <MainComponet @searchMovie="getData()"/>
  <FooterComponet/>
</template>

<style lang="scss">
@use "./assets/scss/main.scss" as *;
@use "./assets/scss/partials/variables.scss" as *;
</style>
