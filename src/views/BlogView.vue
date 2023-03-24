<template>
  <SideBar class="col-2"/>
    <div class="col-10 px-5" >
      <h1 class="text-center p-5">"Blog"</h1>
      <CardNews />
    </div>

</template>

<script setup>
  import SideBar from '@/components/Commons/SideBar.vue'
  import CardNews from '@/components/Cards/CardNews.vue';

</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";



</style>