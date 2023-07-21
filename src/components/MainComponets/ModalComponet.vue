<!-- https://api.themoviedb.org/3/movie/{movie_id}/credits -->
<script>
import { store } from '../../store';
export default {
  props:{
    movieObj:{
      type:Object,
      default:{}
    },
    typeElement:{
      type:String,
      default: ""
    },
  },
  data(){
    return{
      store,
    }
  },
    methods:{
    getGenresMovies(){
      let genresMovie = []
      if(this.typeElement == 'movie'){
        this.store.genresMovieArray.forEach(element => {
          if(this.movieObj.genre_ids.includes(element.id)){
            genresMovie.push(element.name)
          }
        });
      }else if(this.typeElement == 'serie'){
        this.store.genresSeriesArray.forEach(element => {
          if(this.movieObj.genre_ids.includes(element.id)){
            genresMovie.push(element.name)
          }
        });
      }
      return genresMovie
    }
  },
  computed:{
    iconClass(){
      let language = this.movieObj.original_language
      if(language == 'en'){
        language = 'us'
      }else if(language == 'ja'){
        language = 'jp'
      }
      const iconClass = 'fi ' + 'fi-' + language

      return iconClass
    },
    formatSrcImage(){
      const imageSrc = "https://image.tmdb.org/t/p/" + "w300" + this.movieObj.poster_path

      return imageSrc
    },
    formatVote(){
      let formattedVote = Math.ceil(this.movieObj.vote_average / 2);

      return formattedVote
    },
    splitOveriew(){
      const overview = this.movieObj.overview
      const formattedOverview = overview.substr(0,150) + "..."
      return formattedOverview
    }
  }
}
</script>
<template>
  <div class="ms-card-more ">
    <img :src="formatSrcImage" v-if=" movieObj.poster_path != null" :alt="movieObj.title || movieObj.name">
    <div class="no-img" v-else>
      nessuna immagine 
    </div>
    <div class=" info-movie">
       <ul class="mt-3 list-unstyled px-3 ">
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">titolo:</p>
          {{ movieObj.title || movieObj.name  }}
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">titolo originale:</p>
          {{ movieObj.original_title || movieObj.original_name}}
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">Lingua originale:</p>
          <span :class="iconClass"></span>
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">Valutazione:</p>
          <font-awesome-icon v-for=" index in 5" :key="index" icon="fa-solid fa-star" :class="index <= formatVote ? 'text-warning' : ''"/>
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">Descrizione:</p>
          {{ splitOveriew }}
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">Genere:</p>
          
          <p class="m-0" v-for="(genre, index) in  getGenresMovies()" :key="index">
            - {{ genre }}
          </p >
        </li>
        <li v-if="store.actorsArray.length > 0">
          <p class="m-0 text-danger fw-bold text-capitalize ">  
            Cast:
          </p>
          <ul class="actors list-unstyled">
            <li class="mb-2 " v-for="(actor, index) in movieObj.actorsArray" :key="index">
              - {{actor.name}}
            </li>        
          </ul>
        </li>
      </ul>
    </div>
    <button class=" ms-close rounded-full btn btn-danger" @click="$emit('close')">
      <font-awesome-icon icon="fa-solid fa-xmark" class="fs-5" />
    </button>
  </div>
</template>
<style lang="scss" scoped>

.ms-card-more{
  z-index:10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0,0,0,0.8);
 
  .ms-close{
    position: absolute;
    top: 30px;
    right: 30px;
  }
  img{
    min-height: 500px;
  }
  .no-img{
    height: 100%;
    max-height: 500px;
    width: 100%;
    max-width: 300px;
    background-color: rgba(0,0,0,0.8);
    border: 1px solid #ccc;
    color:#fff; 
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .info-movie {
    height: 500px;
    max-width: 400px;
    background-color: rgba(255,255,255,0.3);
    overflow-y: auto;
  }
}

  @media screen and (max-width: 600px) {
    .ms-card-more{
      flex-direction: column;
      padding-block: 20px;
      img{
        min-height: initial;
        height: 400px;
        width: 80%;
      }
      .info-movie {
        height: 500px;
        width: 80%;
        max-width: initial;
      }
    }
  }
</style>
