<template>
  
  <SideBar class=" col-2"/>
  <div class="col-10" >
    <h1>About Us</h1>
    <FormContact/>

  </div>

</template>

<script setup>
import SideBar from '@/components/Commons/SideBar.vue'
import FormContact from '@/components/Forms/FormContact.vue';

</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";


</style>