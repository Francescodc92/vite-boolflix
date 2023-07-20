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
      <div class="logo-container">
        <a href="#"><img src="../../assets/img/logo.png" alt="logo"></a>
      </div>
      
  
      <div class="right">
        <input :class="store.requestUserInput != '' ? 'on-use': ''" type="text" id="search" v-model="store.requestUserInput" placeholder="Cerca...">
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
        color:#ccc;
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
      border: 2px solid #ccc;
      &::placeholder{
        color:#ddd;
      }
      &:focus,&.on-use{
        width: calc(100% - 80px);
      }
    }
  }

  
}
</style>