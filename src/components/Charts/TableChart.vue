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
                <!-- <th>{{ parseFloat(prodt.data[0].value).toFixed(2) }} </th>
                <th>{{ parseFloat(prodt.data[1].value).toFixed(2) }} </th> -->
                <th>{{  yearAndData(2000, 2004) }} </th>
                <th>"Maria"</th>
           
            </td>
        </tr>
      
       

    </tbody>

     
    </table>
  </center>

 
</template>
   
<script setup>
  import {defineProps, onMounted} from 'vue';
//import { LibraryTemplatePlugin } from 'webpack';
  const prop =  defineProps({
    data: Object,
    rangeYear: Array,
    productDataName: Array,
    nameProduct: String
  })

  onMounted(()=>{
    if(prop.nameProduct != null){
      yearAndData(2000, 2004)
    }

  });
 


 
const months = ["Prices","Jan","Feb","Mar","Abr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
// // const years = [2022, 2021, 2020, 2019, 2018]
 
function yearAndData(year1, year2){
  console.log(year1)
  console.log(year2)
  let productData =  searchProduct (prop.nameProduct)
  console.log("productData en yearAndData",productData)

  let productDataYear=[]
  let pricesInAYear=[]
  let pricesRangeYear=[]

  while (year1<(year2+1)) {
    
      //filtramos la data del producto en cada iteracion del while por cada año del rando
      productDataYear = productData.filter(element => parseInt((element.date).slice(0,4)) == year1)  
      //hacemos lo mismo pero solo nos quedamos con los precios
      pricesInAYear = productDataYear.map(element =>  parseFloat((element.value)).toFixed(2))
      pricesRangeYear.push(pricesInAYear)
      year1++
  }

  console.log("pricesRangeYear",pricesRangeYear)
//   return prices
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