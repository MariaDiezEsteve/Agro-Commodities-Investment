<template>

  <center>
    <table border="1">
    <thead>
      <tr>
        <td v-for="month in months" :key="month">
          <th>{{ month }}</th>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr align=center  v-for="year in rangeYear" :key="year">
         <th>{{year}}</th>
         <td >
                <th>{{ parseFloat(prodt.data[0].value).toFixed(2) }} </th>
                <th>{{ parseFloat(prodt.data[1].value).toFixed(2) }} </th>
           
            </td>
        </tr>
      
       

    </tbody>

     
    </table>
  </center>

 
</template>
   
   <script setup>
    import {defineProps} from 'vue';
import { LibraryTemplatePlugin } from 'webpack';
   const prop =  defineProps({
     data: Object,
     rangeYear: Array,
     productDataName: Array,
     nameProduct: String
     })
 


 
  const months = ["Prices","Jan","Feb","Mar","Abr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  // const years = [2022, 2021, 2020, 2019, 2018]
 
function yearAndData(year1, year2){
  const yearsData = [""]
  const yearData = [""]

  let productDataYear=[]
  let prices=[]

  while (year1<(year2+1)) {
    
      productDataYear = productData.filter(element => parseInt((element.date).slice(0,4)) == year1)  
      prices = productDataYear.map(element =>  parseFloat((element.value)).toFixed(2))
    
      year1++
    }

}

 </script>
   
   <style lang="scss" scoped>
     @import "@/assets/Sass/--parcial.scss";
 
     .container{
      height: 100vh;
     }
   
   </style>