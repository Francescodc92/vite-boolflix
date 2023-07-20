<script>
export default {
  props:{
    movieObj:{
      type:Object,
      default:{}
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
      let formattedVote = Math.floor(Math.round(this.movieObj.vote_average) / 2) >= 0 ? Math.floor(Math.round(this.movieObj.vote_average) / 2) : 0;
      return formattedVote
    }
  }
}
</script>
<template>

  <div class="ms-card position-relative">
    <img :src="formatSrcImage" :alt="movieObj.title || movieObj.name">
    <div class="info position-absolute top-0 start-0">
      <ul class="mt-3 list-unstyled">
        <li>{{ movieObj.title || movieObj.name  }}</li>
        <li>{{ movieObj.original_title || movieObj.original_name}}</li>
        <li>
          <span :class="iconClass"></span>
        </li>
        <li>
          <font-awesome-icon v-for=" index in 5" :key="index" icon="fa-solid fa-star" :class="index <= formatVote ? 'text-warning' : ''"/>
        </li>
      </ul>
    </div>
  </div>
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
