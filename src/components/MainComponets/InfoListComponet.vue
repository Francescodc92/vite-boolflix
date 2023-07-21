<script>
import { store } from '../../store';
import axios from 'axios';
import ModalComponet from './ModalComponet.vue';
export default {
  props:{
    movieObj:{
      type:Object,
      default:{}
    },
    typeElement:{
      type:String,
      default: ""
    }
  },
  components:{
    ModalComponet
  },
  data(){
    return{
      store,
      newMovieObj : {
        ...this.movieObj,
        moreInfo:false,
      }
    }
  },
  methods:{
    getMoreData(){
      axios.get(`https://api.themoviedb.org/3/movie/${this.newMovieObj.id}/credits`, {
        params:{
          api_key: this.store.requestKey,
        }
      })
      .then(res =>{
        this.store.actorsArray = []
        res.data.cast.forEach((element, index) => {
          if(index < 5){
            this.store.actorsArray.push(element)
          }
        });
      });
    },
    openInfoModal(){
      this.newMovieObj.moreInfo = !this.newMovieObj.moreInfo ,
      this.getMoreData()
    },
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
  }
}
</script>
<template>
  <div class="ms-card position-relative">
    <img :src="formatSrcImage" v-if="newMovieObj.poster_path != null" :alt="newMovieObj.title || newMovieObj.name">
    <div class="no-img" v-else>
      nessuna immagine 
    </div>
    <div class="info position-absolute top-0 start-0">
      <ul class="mt-3 list-unstyled">
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">titolo:</p>
          {{ newMovieObj.title || newMovieObj.name  }}
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">Lingua originale:</p>
          <span :class="iconClass"></span>
        </li>
        <li>
          <p class="m-0 text-danger fw-bold text-capitalize ">Valutazione:</p>
          <font-awesome-icon v-for=" index in 5" :key="index" icon="fa-solid fa-star" :class="index <= formatVote ? 'text-warning' : ''"/>
        </li>
      </ul>
      <button class="btn btn-primary" @click="openInfoModal()">
        more info
      </button>
    </div>
  </div>

  <ModalComponet 
  :movieObj="movieObj" 
  :typeElement="typeElement"
  v-if="newMovieObj.moreInfo"
  @close="newMovieObj.moreInfo = false"
  />
</template>
<style lang="scss" scoped>
.ms-card{
  height: 330px;
  width: 100%;
  cursor: pointer;
  img{
    width: 100%;
    height:100% ;
    object-fit: cover;
  }
  .no-img{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.8);
    border: 1px solid #ccc;
    color:#fff; 
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover .info{
    opacity: 1;
    visibility: visible;
  }
  .info{
    height: 100%;
    width: 100%;
    padding-inline: 5px;
    background-color: rgba(0,0,0,0.6);
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: opacity 200ms ease-in-out;
    
    ul{
      li{
        margin-top:10px ;
      }
    }
  }
}
</style>
