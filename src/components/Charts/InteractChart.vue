<template>
    <SelectProdButton />

    <div style="width: 80%">
      <div class="d-flex flex-row justify-content-left">
        <DropDate class="mx-4" @dateSelected="getDate"/>
        <DropChart @typeSelected="getTypeChar"/>
      </div>
      <div v-if="date=='years'">
        <CardDate class="mx-3" @rangeYears="rangeYears"/>
      </div>
      <div v-else>
        <CardYearOfMonths @yearOfMonths="getYear" />
      </div>
      <canvas id="myChart"></canvas>
    </div>
</template>
  
<script setup>
 /* eslint-disable */
  import {defineProps,onMounted, ref} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js
  import DropDate from '@/components/Buttons/DropDate.vue'
  import DropChart from '@/components/Buttons/DropChart.vue'
  import CardDate from '@/components/Cards/CardDate.vue'
  import CardYearOfMonths from '@/components/Cards/CardYearOfMonths.vue'
  import SelectProdButton from "@/components/Buttons/SelectProdButton.vue";


  const prop= defineProps({
    data: Object
  })

  let nameProduct = ref("sugar")

  const date = ref("years")
  const getDate = (selectedDate) => {
    date.value = selectedDate
    interactChart()    
  }

 

  const typeChart = ref("bar")
  const getTypeChar = (selectedType) => {
    typeChart.value = selectedType
    interactChart()
  }

  const yearOfMonths = ref(2006)
  const getYear = (year) => {
    yearOfMonths.value = year
    console.log("year en el padre", yearOfMonths.value)
    interactChart()    
  }

  let rangeYear = ref([2000, 2001, 2002, 2003, 2004,2005, 2006])
  let rangeYears = (years) => {
    rangeYear.value = years
    interactChart()

  }

  onMounted(()=>{//muy importante el onMounted para coger cosas del template es aqui dentro
  });


  let interactChart = () => { 

      let myChart;
      const ctx = document.getElementById('myChart')
      const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        
      const data = {
        labels: date.value === "months" ? months : rangeYear.value,
        datasets: crateDataChart()
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

  function crateDataChart(nameProduct){

    let dataChart =  [{
          label: nameProduct +" "+'Price',
          data: date.value === "months" ? pricesPerMonthInAYear(yearOfMonths.value) : averagePricesByYearRange (rangeYear.value[0],rangeYear.value[(rangeYear.value).length-1]),
          fill: typeChart.value == "bar" ? true : false, 
          borderColor: getColor(nameProduct), 
          backgroundColor: getColor(nameProduct),
          tension: 0,
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
    }]

    return dataChart


  }


  let pricesPerMonthInAYear = (year)=>{
    let productData = searchProduct (nameProduct)
    productData = productData.filter(element => parseInt((element.date).slice(0,4)) == year)
    productData = productData.map(element =>  parseFloat((element.value)).toFixed(2))
    return productData
  }
  


  let averagePricesByYearRange = (year1,year2)=>{
    
    let productData =  searchProduct (nameProduct)
  
    let sum=0,productDataYear=[], prices=[], avgs =[]
    while (year1<(year2+1)) {
      productDataYear = productData.filter(element => parseInt((element.date).slice(0,4)) == year1)  
      prices = productDataYear.map(element =>  parseFloat((element.value)).toFixed(2))
      sum = 0
      for( let i=0; i<prices.length ; i++){
        sum = sum + parseFloat(prices[i])
      } 
      avgs.push(sum/prices.length)
      year1++
    }
    return avgs
  }

  const getColor = (name) => {
    let color = "rgba(0,0,0,1)"
    switch(name) {
        case ("Wheat"):
            color = "rgba(248, 238, 11, 1)";
            break;
        case ("Corn"):
            color = "rgba(252, 90, 90, 1)";
            break;
        case ("Cotton"):
            color = "rgba(1, 1, 88, 1)";
            break;
        case ("Sugar"):
            color = "rgba(27, 169, 234, 1)";
            break;
        case ("Coffee"):
            color = "rgba(61, 213, 152, 1)";
            break;
        default:
            break;
    }

    return color

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


</style>
