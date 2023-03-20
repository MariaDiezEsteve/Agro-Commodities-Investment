<template>
  <h1>{{titulo}}</h1>
  <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
  <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
  <div v-if="!data.isError && !data.isLoading" >
    <h2>Loading es: {{isLoading}}</h2>    
    <h2>{{data.prodts}}</h2>
  </div> 

</template>


<script setup>
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

<style lang="scss" scoped> 
/* si tiene error con sass poner en la consola: npm install sass-loader node-sass –save-dev.
si es mac o linux y si es windows:  npm install sass-loader node-sass*/
  h1{
    color:blue;
  }

</style>
