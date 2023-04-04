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
      <tr align=center  v-for='(year, index) in rangeYear' :key='index'>
         <th>{{year}}</th>
         <th v-for="price in pricesRangeYear[index]" :key="price">{{ price }}</th>
      </tr>
    </tbody>
    </table>
  </center> 
</template>
   
<script setup>
  import {defineProps, onMounted,ref} from 'vue';
//import { LibraryTemplatePlugin } from 'webpack';
  const prop =  defineProps({
    data: Object,
    rangeYear: Array,
    nameProduct: String
  })
  onMounted(()=>{
    if(prop.nameProduct != null){
      yearAndData(prop.rangeYear[0],prop.rangeYear[(prop.rangeYear).length-1])
    }

  });

let pricesRangeYear = ref([])

const months = ["Prices","Jan","Feb","Mar","Abr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
 
function yearAndData(year1, year2){
  console.log(year1)
  console.log(year2)
  let productData =  searchProduct (prop.nameProduct)

  let productDataYear=[]
  let pricesInAYear=[]
  let pricesRanYear=[]

  while (year1<(year2+1)) {
    
      //we filter the product data in each iteration of the while for each year of the rando
      productDataYear = productData.filter(element => parseInt((element.date).slice(0,4)) == year1)  
      //we do the same thing but we only keep prices
      pricesInAYear = productDataYear.map(element =>  parseFloat((element.value)).toFixed(2))
      pricesRanYear.push(pricesInAYear)
      year1++
  }

  pricesRangeYear.value=pricesRanYear
  console.log("pricesRangeYear.value",pricesRangeYear.value)
}


function searchProduct (nameProduct){    
    let inicial = nameProduct.slice(0,1)
    inicial = inicial.toLowerCase()
    let nameP = inicial + nameProduct.slice(1)

    let dataProduct = 0

    let keys = Object.keys(prop.data.prodts)
    let values = Object.values(prop.data.prodts)
    let found = false
    let i = 0
    while(!found && i < keys.length){

      if(keys[i] == nameP){
        dataProduct = values[i].data
        found = true
      }
      else{
        i++
      }
    }
    return dataProduct
}

 </script>
   
   <style lang="scss" scoped>
     @import "@/assets/Sass/--parcial.scss";
 
     .container{
      height: 100vh;
     }
   
   </style>