<template>
  <!-- <h1>{{ data.prodts}}</h1>  -->
    
  <div class="card" style="width: 18rem;">
    <!-- <div v-for="prodt in data.prodts" :key="prodt.name" class="card-body">
      <h5 class="card-title">{{ (prodt.name).slice(15)}}</h5>
      <div class="card-details">
        <p class="card-text">{{ parseFloat(prodt.data[0].value).toFixed(2) }}</p>
        <p class="card-text">{{ parseFloat(((prodt.data[0].value)-(prodt.data[1].value)) / (prodt.data[1].value)).toFixed(3) }} %</p>
      </div>
    </div> -->
  </div>

  </template>
  
  <script setup>
  /* eslint-disable */
    import { defineProps,ref,onMounted } from 'vue';

   
    const props = defineProps({
    data: Object
    })




    let dat = ref(onMounted(async () => {
    dat.value = await props.data
    
    console.log("el prop pesao",dat.value)
    })) 

    
    
    
    

  </script>

  <style scoped>

  .card-details {
    display: flex;
    justify-content: space-around;
  }
  
  </style>