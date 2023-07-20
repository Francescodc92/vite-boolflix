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
      let formattedVote = Math.ceil(Math.floor(this.movieObj.vote_average) / 2) >= 0 ? Math.ceil(Math.floor(this.movieObj.vote_average) / 2) : 0;
      return formattedVote
    }
  }
}
</script>
<template>
  <ul class="mt-3">
    <li>
      <img :src="formatSrcImage" :alt="movieObj.title || movieObj.name">
    </li>
    <li>titolo: {{ movieObj.title || movieObj.name  }}</li>
    <li>titolo originale: {{ movieObj.original_title || movieObj.original_name}}</li>
    <li>
      lingua:
      <span :class="iconClass"></span>
    </li>
    <li>
      voto: <font-awesome-icon v-for=" index in 5" :key="index" icon="fa-solid fa-star" :class="index <= formatVote ? 'text-warning' : ''"/>
    </li>
  </ul>
</template>
<style scoped>
img{
  max-width: 150px;
}
</style>
