<template>
  <SideBar class="col-2"/>
    <div class="col-10 px-5" >
      <h1 class="text-center p-5">Blog</h1>
        <img v-if="information.isError" src="@/assets/images/error.jpeg" alt="error">
        <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!information.isError && !isLoading" >
          <CardNews  :information="information"/>
        </div>
        <CardNewsButton />
    </div>

</template>

<script setup>
  import SideBar from '@/components/Commons/SideBar.vue'
  import CardNews from '@/components/Cards/CardNews.vue';
  import  CardNewsButton from "@/components/Buttons/CardNewsButton.vue"
  import usInfo from '@/DataInformation/usInfo';
  import {ref,onMounted} from "vue";

  let isLoading = ref(true) 

  let information = ref(onMounted(async () => {
    information.value = await usInfo.getInfo()
    
    if( ! information.value.isLoading){
      isLoading.value = false
    }
  })) 

</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";



</style>