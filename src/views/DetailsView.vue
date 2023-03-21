<template>
    <h1>Agro Commodities Details</h1>
    <p>This page shows the information details about the following commodities:</p>
    
    <DetailsProducts :data="data"/>

  </template>
  
  <script setup>
  import info from '@/logic/dataInfo'
  import {ref,onMounted} from "vue";
  import DetailsProducts from '@/components/Cards/CardDetailsProduct.vue'

  let isLoading = ref(true) 

  let data = ref(onMounted(async () => {
    data.value = await info.getData()
    
    if( !data.value.isLoading){
      isLoading.value = false
    }
  })) 
   console.log(data.value)
  </script>
  
  <style scoped>
  
  </style>