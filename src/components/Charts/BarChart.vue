<template>
  <div class="d-flex justify-content-center pt-4">
    <div style="width: 60%;">
      <canvas id="myChart"></canvas>
    </div>

  </div>
  
</template>
  
<script setup>

  import {defineProps,onMounted} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js

  const prop= defineProps({
    data: Object
  })

  onMounted(()=>{//muy importante el onMounted para coger cosas del template es aqui dentro
    productChart()
  });


  let productChart = () => { //esta funcion se dinamiza con un prop del producto seleccionado
     let option = "years" //esto seria otro prop

     let optChart = "bar" //esto puede ser un drop y el usuario elegir como quiere ver el chart

    let myChart;
    const ctx = document.getElementById('myChart')
    const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const years = [2000, 2001, 2002, 2003, 2004,2005, 2006] // hacer funcion q dado 2 años devuelva un arreglo con el rango de años
    console.log("precios dataaaa", prop.data.prodts.wheat.data)
      
    const data = {
      labels: option === "months" ? months : years,
      datasets: [{
        label: 'Wheat Price',  // porp del producto seleccionado + Price
        data: option === "months" ? pricesPerMonthInAYear(2000) : averagePricesByYearRange (2000,2006) , //coger el año de la interfaz
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgba(248, 238, 11,0.7)',
        tension: 0,
        options: {
          responsive: true,
          maintainAspectRatio: false,
        }
      }
    ]
    }
    const chartWithKey = Chart.getChart('myChart')
    if (chartWithKey != undefined) {
      chartWithKey.destroy()
    }
    myChart = new Chart(ctx, {
      type: optChart,
      data: data,
    })

    return myChart
  }


  let pricesPerMonthInAYear = (year)=>{
    let productData = prop.data.prodts.wheat.data
    productData = productData.filter(element => parseInt((element.date).slice(0,4)) == year)
    productData = productData.map(element =>  parseFloat((element.value)).toFixed(2));
    return productData
  }

  let averagePricesByYearRange = (year1,year2)=>{
    let productData = prop.data.prodts.wheat.data
    let sum=0,productDataYear=[], prices=[], avgs =[]
    while (year1<(year2+1)) {
      productDataYear = productData.filter(element => parseInt((element.date).slice(0,4)) == year1)  
      prices = productDataYear.map(element =>  parseFloat((element.value)).toFixed(2));
      sum = 0
      for( let i=0; i<prices.length ; i++){
        sum = sum + parseFloat(prices[i])
      } 
      avgs.push(sum/prices.length)
      year1++
    }
    return avgs
  }
  
</script>
  
<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";
</style>