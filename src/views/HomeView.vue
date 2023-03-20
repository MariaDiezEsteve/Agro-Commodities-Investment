

<template>
  <h1>{{titulo}}</h1>

  <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
  <button @click="read">Mostrar Datos</button>
  <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
  <div v-if="!data.isError && !data.isLoading" >
    <!-- <h1>{{titulo}}</h1> -->
    <h2>Loading es: {{isLoading}}</h2>
    <h2>Error es: {{data.isError}}</h2>

    <h2>{{data.prodts}}</h2>
  </div> 

</template>


<script setup>
//import { Suspense } from 'vue';

import info from '@/logic/dataInfo'
import {ref,onMounted} from "vue";

let titulo="prueba" 
let isLoading = ref(true) 

let data = ref(onMounted(async () => {
  data.value = await info.getData()
  if( !data.value.isLoading){
    isLoading.value = false
  }
})) 
  
</script>

<style lang="css" scoped> puse css porque sass esta dando error luego reviso

  h1{
    color:blue;
  }

</style>
