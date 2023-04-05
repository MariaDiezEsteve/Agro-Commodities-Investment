<template>

    <SideBar class="col-2"/>
    <div class="col-10" >
      <ImgSlider/>
      <div class="boxContainer">
        <h2 class="pt-3 pb-3">Price interaction across all products</h2>
        <img v-if="data.isError" src="@/assets/images/error.gif" alt="error">
        <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!data.isError && !isLoading" >
          <InteractChart :data="data" :vista="vista"/>
        </div>
        <FormCreate />
      </div>
    </div>


</template>


<script setup>
  import info from '@/DataInformation/dataInfo'
  // import reviewsInfo from '@/DataInformation/reviewInfo'
  import {ref, onMounted} from "vue";
  import SideBar from '@/components/Commons/SideBar.vue'
  import ImgSlider from '@/components/Sliders/ImgSlider.vue'
  import InteractChart from '@/components/Charts/InteractChart.vue'
  import FormCreate from '@/components/Forms/FormCreate.vue'


  let isLoading = ref(true) 

  let data = ref(onMounted(async () => {
    data.value = await info.getData()
    
    if( !data.value.isLoading){
      isLoading.value = false
    }
  })) 

  let vista = ref("home")

</script>

<style lang="scss" scoped> 
  @import "@/assets/Sass/--parcial.scss";
/* si tiene error con sass poner en la consola: npm install sass-loader node-sass –save-dev.
si es mac o linux y si es windows:  npm install sass-loader node-sass*/

  .boxContainer{
    padding-left: 8rem;
  }

  #image_person{
    @include imgPerson ($url: url('../assets/images/profile.jpeg'),$wth:5%,$hght: 5rem,$margin: 2rem);
  }

  button{
    @include button ($bg-color:$blueDark, $wth: 10rem, $colorletra:$white_color);
  }

  select{
    @include drop($wth:6%);
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

@include media-breakpoint-down(sm) {

  .boxContainer{
    padding-left: 1rem;
  }
}


</style>
