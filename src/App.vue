<script>
  import HeaderComponet from './components/HeaderComponets/HeaderComponet.vue';
  import MainComponet from './components/MainComponets/MainComponet.vue';
  import FooterComponet from './components/FooterComponets/FooterComponet.vue';
  export default{
    components:{
      HeaderComponet,
      MainComponet,
      FooterComponet
    }
  }
</script>

<template>
  <HeaderComponet/>
  <MainComponet/>
  <FooterComponet/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
