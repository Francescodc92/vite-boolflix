<script>
  import HeaderComponet from './components/HeaderComponets/HeaderComponet.vue';
  import MainComponet from './components/MainComponets/MainComponet.vue';
  import { store } from './store.js'
  import axios from 'axios';
import { resolveDirective } from 'vue';
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
        this.store.currentSelectedGenre = ''
        this.store.responseNumberMovie = 0
        this.store.responseNumberSeries = 0
        axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params:{
            api_key: this.store.requestKey,
            query:this.formatInputUser(this.store.requestUserInput)
          }
        })
        .then(res =>{
          this.store.moviesArray = res.data.results
          this.store.responseNumberMovie = res.data.results.length
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
          this.store.responseNumberSeries = res.data.results.length
        });
        

      },
      formatInputUser(userInput){
        const formattedInput =  userInput.replace(/\s/g  , '+')
        return formattedInput
      },
      getDataSelect(){
        //get movies
        this.store.moviesArray = []
        this.store.seriesArray = []
        this.store.requestUserInput = ""
        this.store.responseNumberMovie = 0
        this.store.responseNumberSeries = 0
        axios.get(`https://api.themoviedb.org/3/discover/movie`, {
        params:{
          api_key: this.store.requestKey,
          with_genres:this.store.currentSelectedGenre
        }
        })
        .then(res =>{
          this.store.moviesArray = res.data.results
          this.store.responseNumberMovie = res.data.results.length
        });

        axios.get(`https://api.themoviedb.org/3/discover/tv`, {
        params:{
          api_key: this.store.requestKey,
          with_genres:this.store.currentSelectedGenre
        }
        })
        .then(res =>{
          this.store.seriesArray = res.data.results
          this.store.responseNumberSeries = res.data.results.length
        });
         
      }
    },
    mounted(){
        this.store.responseNumberMovie = 0
        this.store.responseNumberSeries = 0
        //get genres movies
        axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
          params:{
            api_key: this.store.requestKey,
          }
        })
        .then(res =>{
          this.store.genresMovieArray = res.data.genres
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
       
        //get racomanded movie
        axios.get(`https://api.themoviedb.org/3/movie/now_playing`, {
          params:{
            api_key: this.store.requestKey,
          }
        })
        .then(res =>{
          this.store.moviesArray = res.data.results
          this.store.responseNumberMovie = res.data.results.length
        });

        //get racomanded series
        axios.get(`https://api.themoviedb.org/3/tv/on_the_air`, {
          params:{
            api_key: this.store.requestKey,
          }
        })
        .then(res =>{
          this.store.seriesArray = res.data.results
          this.store.responseNumberSeries = res.data.results.length
        });     
      }
  }

</script>

<template >
  <HeaderComponet  @searchMovie="getData()" @selectCategorie="getDataSelect()"/>
  <MainComponet/>
</template>

<style lang="scss">
@use "./assets/scss/main.scss" as *;
@use "./assets/scss/partials/variables.scss" as *;
  
</style>
