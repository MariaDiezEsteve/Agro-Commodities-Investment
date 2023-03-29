<template>
  
  <SideBar class=" col-lg-2  col-md-3"/>
  <div class="col-lg-10 col-md-9" >
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