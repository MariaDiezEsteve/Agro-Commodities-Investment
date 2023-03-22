<template>
    <h1></h1>
  </template>
  
  <script setup>
  import info from '@/DataInformation/dataInfo'
  import {ref, onMounted} from "vue";
 
  let isLoading = ref(true) 

  let data = ref(onMounted(async () => {
    data.value = await info.getData()
    
    if( !data.value.isLoading){
      isLoading.value = false
    }
  })) 
  

  </script>
  
  <style lang="scss" scoped>
  
  </style>