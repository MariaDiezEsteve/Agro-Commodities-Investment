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
      <tr align=center  v-for="prodt in data.prodts" :key="prodt.name">
         <th>{{prodt.data[0].date}}</th>
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
    defineProps({
     data: Object
     })
 

 
  const months = ["Prices","Jan","Feb","Mar","Abr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  // const years = [2022, 2021, 2020, 2019, 2018]
 


 </script>
   
   <style lang="scss" scoped>
     @import "@/assets/Sass/--parcial.scss";
 
     .container{
      height: 100vh;
     }
   
   </style>