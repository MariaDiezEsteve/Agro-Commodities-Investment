<template>
  <SideBar class="col-2"/>

    <div class="col-10" >
    
      <div class="img"></div>


      <div class="px-5">
        <h1 style="margin: 2rem;">Invest in your life !</h1>
        <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
        <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!data.isError && !isLoading" >
        <!-- <SelectProdButtonVue /> -->
          <InteractChart :data = "data" />

        </div>

        <!-- <img
          v-if="questions.isError"
          src="@/assets/images/error.jpeg"
          alt="error"
        /> -->
        <!-- <div v-if="!questions.isError && !isLoading"> -->
          <CardPredictionVue class="p-4" />
        <!-- </div> -->
      </div>
  </div>
</template>

<script setup>
import CardPredictionVue from "@/components/Cards/CardPrediction.vue";
// import predictionInfo from "@/DataInformation/predictionInfo";
import SideBar from "@/components/Commons/SideBar.vue";
import info from '@/DataInformation/dataInfo'
// import SelectProdButtonVue from "@/components/Buttons/SelectProdButton.vue";
import InteractChart from "@/components/Charts/InteractChart.vue";

import { ref, onMounted } from "vue";

let isLoading = ref(true);

// let questions = ref(
//   onMounted(async () => {
//     questions.value = await predictionInfo.getAskQuestion();

//     if (!questions.value.isLoading) {
//       isLoading.value = false;
//     }
//   })
// );

let data =  ref(onMounted(async () => {
  data.value = await info.getData()
  if( !data.value.isLoading){
    isLoading.value = false
  }

}))



</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.img {
  @extend %imagen;
  background-image: linear-gradient(
      to left,
      rgba(15, 51, 135, 0.6),
      rgb(15, 51, 135, 0.3)
    ),
    url("@/assets/images/IconosUserView/CAPuserView.png");
  height: 250px;
}
</style>
