<template>
    <SideBar class="col-2"/>
    <div class="col-10 px-5">
      <h1>Agro Commodities Details</h1>
      <p>This page shows the information details about the following commodities:</p>
      <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
      <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
      <div class="d-flex flex-row flex-wrap-wrap" v-if="!data.isError && !isLoading" >
        <DetailsProducts 
        :data = "data"
        @nameOfProduct="getDataNameProducto"
        @click="onClick"
        />
        <!-- <BarChart v-if="click==true"
        :data = "data"
        :nameProduct="nameProduct"
        {{ click.value = false }}
       />  -->
       <!-- <PieChart 
        :data = "data"
        /> -->

      </div>

      <div>
          
       
        </div>
     
    </div>
  </template>
  
  <script setup>
  import info from '@/DataInformation/dataInfo'
  import {ref,onMounted} from "vue";
  import DetailsProducts from '@/components/Cards/CardDetailsProduct.vue'
  import SideBar from '@/components/Commons/SideBar.vue'
  // import BarChart from '@/components/Charts/BarChart.vue'
  // import PieChart from '@/components/Charts/PieChart.vue'

  let isLoading = ref(true) 
  let data =  ref(onMounted(async () => {
    data.value = await info.getData()
    if( !data.value.isLoading){
      isLoading.value = false
    }

  }))


  let nameProduct = ref("")


  const getDataNameProducto = (name) => {
    nameProduct.value = name
  }
  let click = ref(false)
  let onClick=()=>{
    click.value = true
  }



  
  </script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

    #app{
      width: 100%;
    }

    h1{
      margin: 1.5rem;
      text-align: center;
    }

    p{
      margin-bottom: 1rem;
      text-align: center;
    }

  
  </style>