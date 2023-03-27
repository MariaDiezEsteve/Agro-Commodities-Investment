<template>
  <div class="d-flex justify-content-center pt-4">
    <div style="width: 60%">
      <div class="d-flex flex-row justify-content-between">
        <DropDate @dateSelected="getDate"/>
        <DropChart @typeSelected="getTypeChar"/>
      </div>
      <CardDate/>
      <canvas id="myChart"></canvas>
    </div>

  </div>
  <!-- {{ nameProduct }} -->
</template>
  
<script setup>

  import {defineProps,onMounted, ref} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js
  import DropDate from '@/components/Buttons/DropDate.vue'
  import DropChart from '@/components/Buttons/DropChart.vue'
  import CardDate from '@/components/Cards/CardDate.vue'

  const prop = defineProps({
    data: Object,
    nameProduct: String
  })

  const date = ref("years")
  const typeChart = ref("bar")

  const getDate = (selectedDate) => {
    date.value = selectedDate
    //console.log("en el padre",date.value)
  }

  const getTypeChar = (selectedType) => {
    typeChart.value = selectedType
    //console.log("en el padre type",typeChart.value)
  }

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
      
    const dataChart = {
      labels: option === "months" ? months : years,
      datasets: [{
        label: prop.nameProduct +" "+'Price',  // porp del producto seleccionado + Price
        data: option === "months" ? pricesPerMonthInAYear(2000) : averagePricesByYearRange (2000,2006) , //coger el año de la interfaz
        fill: true, //
        borderColor: 'rgb(75, 192, 192)', //hacer funcion que dado producto devuelve un string con el rgb
        backgroundColor:'rgba(248, 238, 11,0.7)', //lo mismo llamamos a la misma funcion
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
      data: dataChart,
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

  const rangeYear = ref([])

  const rangeYears = (years) => {
    rangeYear.value = years
  }
  console.log("me corono", rangeYear.value)

</script>
  
<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";
</style>