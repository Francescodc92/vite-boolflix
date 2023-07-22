<script>
import { store } from '../../store.js'
export default{
  data(){
     return {
       store,
       selectOpen: false,
     }
   },
   methods:{
     getGenresMovies(genresMovie){
      let genreName = ''
      this.store.genresMovieArray.forEach(element => {
        if(element.id == genresMovie){
          genreName =  element.name
        }
      });
      this.store.genresSeriesArray.forEach(element => {
        if(element.id == genresMovie){
          genreName =  element.name
        }
      });
      return genreName
    }
   },
   emits: ['searchMovie', 'selectCategorie']
}
</script>
<template>
  <header>
    <div class="container-fluid">
      <div class="left d-flex ">
        <div class="logo-container">
          <a href="#"><img src="../../assets/img/logo.png" alt="logo"></a>
        </div>
        <div class="input-wrapper d-flex align-items-center">
        <div 
          class="ms-select text-light position-relative" 
          :class="selectOpen && !store.modalIsOpen ? 'open': ''"
          @click="selectOpen = !selectOpen"
        >
          <span v-if="store.currentSelectedGenre == ''">Categorie</span>
          <span v-else>{{ getGenresMovies(store.currentSelectedGenre) }}</span>

          
          <font-awesome-icon icon="fa-solid fa-chevron-down" class="ms-2" />
            <div class="categoris-list d-flex  position-absolute bg-light text-danger">
              <div class="movie">
                <h6 >Movie</h6>
                <p class="genre m-0" v-for="(categorie, index) in store.genresMovieArray" :key="index">
                  <a href="#"
                    @click.prevent="store.currentSelectedGenre = categorie.id, $emit('selectCategorie')"
                   > 
                    {{ categorie.name }} 
                  </a>
                </p>
              </div>
              <div class="series ms-3">
                <h6 >series</h6>
                <p class="genre m-0" v-for="(categorie, index) in store.genresSeriesArray" :key="index">
                  <a  href="#" @click.prevent="store.currentSelectedGenre = categorie.id, $emit('selectCategorie') "> 
                    {{ categorie.name }}
                  </a>
                </p>
              </div>
            </div >
          </div>
        </div>
      </div>
      
  
      <div class="right">
        <input
          :class="store.requestUserInput != '' ? 'on-use': ''" 
          type="text"
          @keyup.enter="$emit('searchMovie')"
          id="search"
          v-model="store.requestUserInput"
          placeholder="Cerca...">
        <label for="search">
          <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
        </label>
      
        <button class="btn btn-light ms-2" @click="$emit('searchMovie')" >
          Cerca
        </button>
      </div>
      
        
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use "../../assets/scss/main.scss" as *;
@use "../../assets/scss/partials/variables.scss" as *;
header{
  height: $header-height;
  background-color: #231E1F;
  .container-fluid{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-container{
      height: $header-height;
      img{
        max-height: 100%;
      }
    }
    .right{
      position:relative;
      display: flex;
      align-items: center;
      .icon{
        color:#8a8787;
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
      }
      label{
        width: calc(100% - 80px);
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    input{
      width: 0px;
      padding-left:23px ;
      background-color: transparent;
      color: #fff;
      border: 2px solid #8a8787;
      &::placeholder{
        color:#8a8787;
      }
      &:focus,&.on-use{
        width: calc(100% - 80px);
      }
    }
  }
  .ms-select{
    min-width: 150px;
    border-radius:0;
    background-color: transparent;
    color:#fff;
    outline: none;
    user-select: none;
    cursor: pointer;
    &.open .categoris-list{
      opacity: 1;
      visibility: visible;
    }
    .categoris-list{
      height:300px ;
      justify-content: space-between;
      left: 0;
      top: calc(100% + 5px);
      padding: 10px;
      opacity: 0;
      visibility: hidden;
      user-select: none;
      overflow-y: auto;
      z-index: 100;
    }
    .genre{
      cursor: pointer;
      a{
        text-decoration: none;
        color:black;
        padding-block: 5px;
        font-size: 14px;
        display: block;
      }
      &:hover a{
        color: #CC0A21;
        text-decoration: underline;
        text-decoration-color: #CC0A21;
      }
    }
  }
  
}
</style>