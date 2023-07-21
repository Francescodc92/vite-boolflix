<script>
  import HeaderComponet from './components/HeaderComponets/HeaderComponet.vue';
  import MainComponet from './components/MainComponets/MainComponet.vue';
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
    },
    methods:{
      getData(){
        //get movies
        this.store.moviesArray = []
        this.store.seriesArray = []
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params:{
            api_key: this.store.requestKey,
            query:this.formatInputUser(this.store.requestUserInput)
          }
        })
        .then(res =>{
          this.store.moviesArray = res.data.results
        });
        
        //get genres movies
        axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
          params:{
            api_key: this.store.requestKey,
          }
        })
        .then(res =>{
          this.store.genresMovieArray = res.data.genres
        });
        
        //get series
        axios.get(`https://api.themoviedb.org/3/search/tv`, {
        params:{
          api_key: this.store.requestKey,
          query:this.formatInputUser(this.store.requestUserInput)
        }
        })
        .then(res =>{
          this.store.seriesArray = res.data.results
        });
        
        //get genres series
        axios.get(`https://api.themoviedb.org/3/genre/tv/list`, {
          params:{
            api_key: this.store.requestKey,
          }
        })
        .then(res =>{
          this.store.genresSeriesArray = res.data.genres
        });
      },
      formatInputUser(userInput){
        const formattedInput =  userInput.replace(/\s/g  , '+')
        return formattedInput
      },
    }
  }

</script>

<template>
  <HeaderComponet  @searchMovie="getData()"/>
  <MainComponet/>
</template>

<style lang="scss">
@use "./assets/scss/main.scss" as *;
@use "./assets/scss/partials/variables.scss" as *;
</style>
