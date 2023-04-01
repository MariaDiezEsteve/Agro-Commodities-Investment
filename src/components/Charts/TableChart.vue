<template>
  
 <table>
      <thead>
        <tr>
        <th v-for="month in months" :key="month"> {{ month }}</th>
      </tr>
        <tr v-for="year in years" :key="year">
          <th class="pt-5">{{year}}</th>
        </tr>
      </thead>
    </table>
  </template>
  
  <script setup>
   import {defineProps} from 'vue';
    defineProps({
    data: Object
    })


   const months = ["Prices","Jan","Feb","Mar","Abr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const years = [2022, 2021, 2020, 2019, 2018]

</script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

    
  
  </style>