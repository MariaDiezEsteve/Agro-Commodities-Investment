<template>
  <SideBar class="col-2"/>
    <div class="col-10 px-5" >
     

      <img v-if="questions.isError" src="@/assets/images/error.jpeg" alt="error">
      <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
      <div v-if="!questions.isError && !isLoading" >
       <CardPredictionVue :questions="questions"/> 
      </div> 

    </div>
</template>

<script setup>
  import CardPredictionVue from '@/components/Cards/CardPrediction.vue'
  import predictionInfo from '@/DataInformation/predictionInfo'
  import SideBar from '@/components/Commons/SideBar.vue'
  
  import {ref,onMounted} from "vue";

  let isLoading = ref(true) 

  let questions = ref(onMounted(async () => {
    questions.value = await predictionInfo.getAskQuestion()
    
    if(!questions.value.isLoading){
      isLoading.value = false
    }
  })) 

</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";


</style>