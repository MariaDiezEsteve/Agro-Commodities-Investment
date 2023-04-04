<template>
  <SideBar class="col-2"/>
    <div class="col-10" >
      <div class="img"></div>
      <div class="px-5">
        <h1>Invest in your life !</h1>
        <img v-if="data.isError" src="@/assets/images/error.gif" alt="error">
        <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!data.isError && !isLoading" >
          <InteractChart :data = "data" />
        </div>
        <CardPredictionVue class="p-4" />
      </div>
  </div>
</template>

<script setup>
import CardPredictionVue from "@/components/Cards/CardPrediction.vue";
import SideBar from "@/components/Commons/SideBar.vue";
import info from '@/DataInformation/dataInfo'
import InteractChart from "@/components/Charts/InteractChart.vue";

import { ref, onMounted } from "vue";

let isLoading = ref(true);

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

h1{
  margin: 2rem;
}

@include media-breakpoint-down(lg) {
  h1{
    margin: 1rem;
    font-size: 1.4rem;
  }

  .px-5{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
}

</style>
