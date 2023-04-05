<template>
  <!-- <BarChart :data = "data" @rangeYears="rangeYears" @nameOfProduct="getNameProduct"/> -->
  <h2>Monthly prices in the years range</h2>
  <div id="cardH">
    <table >
      <thead>
        <tr>
          <td v-for="month in months" :key="month">
            <th>{{ month }}</th>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(year, index) in rangeYear' :key='index'>
          <th>{{year}}</th>
          <td v-for="price in pricesRangeYear[index]" :key="price"> {{ price }}</td>
        </tr>
      </tbody>
    </table>

  </div>
    
</template>
   
<script setup>
  import {defineProps} from 'vue';
  defineProps({
    data: Object,
    nameProduct: String,
    rangeYear: Array,
    pricesRangeYear: Array

  })


const months = ["Prices","Jan","Feb","Mar","Abr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
 
 </script>
   
   <style lang="scss" scoped>
     @import "@/assets/Sass/--parcial.scss";
 
     .container{
      height: 100vh;
     }

    th, td{
    padding-right: 1rem;
    }
    center{
      margin-top: 2rem;
    }

    tbody tr:nth-child(odd) {
       background-color: $greyLight;
    } 

    tbody tr:nth-child(even) {
      background-color: $white_color;
    }

    h2{
      margin-top: 3rem;
      padding-left: 1.9rem;
    }

table{
  width: 65rem !important; 
}

@include media-breakpoint-down(sm) {

  table{
  width: 40rem !important; 
}

#cardH{
  height: 12rem !important;
  overflow: scroll !important;
  width: 17rem !important;
  padding-left: 0rem;
  
}

h2{
  font-size: 1.2rem;
  width: 100%;
  padding-left: 0rem;
  margin-bottom: 1rem;
}
// #cardH ::-webkit-scrollbar {
//   -webkit-appearance: none;
// }
// #cardH ::-webkit-scrollbar:vertical {
//   width: 10px;
// }
// #cardH ::-webkit-scrollbar-button:increment, * .cardH .cardTextCM::-webkit-scrollbar-button {
//   display: none;
// }
// #cardH ::-webkit-scrollbar:horizontal {
//   height: 10px;
// }
// #cardH ::-webkit-scrollbar-thumb {
//   background-color: #797979;
//   border-radius: 20px;
//   border: 2px solid #f1f2f3;
// }
// #cardH ::-webkit-scrollbar-track {
//   border-radius: 10px;
// }

}


   
   </style>