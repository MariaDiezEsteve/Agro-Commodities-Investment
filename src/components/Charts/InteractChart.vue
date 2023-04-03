<template>
  <div class="d-flex flex-row justify-content-left">
    <SelectProdButton style="width:30%" @buttonSelected="getButtonSelected"/>
    <div style="width: 60%">
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
  </div>
    
</template>
  
<script setup>
  import {defineProps,onMounted, ref} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js
  import DropDate from '@/components/Buttons/DropDate.vue'
  import DropChart from '@/components/Buttons/DropChart.vue'
  import CardDate from '@/components/Cards/CardDate.vue'
  import CardYearOfMonths from '@/components/Cards/CardYearOfMonths.vue'
  import SelectProdButton from "@/components/Buttons/SelectProdButton.vue";

  let buts = {
    wheat: ref(true),
    sugar: ref(true),
    corn: ref(true),
    cotton: ref(true),
    coffee: ref(true),
  };
  

  const prop= defineProps({
    data: Object
  })


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
    interactChart()    
  }

  let rangeYear = ref([2000, 2001, 2002, 2003, 2004,2005, 2006])
  let rangeYears = (years) => {
    rangeYear.value = years
    interactChart()
  }
 
  let prod = ref("wheat");
  const getButtonSelected = (index) =>{
    prod.value = Object.keys(buts)[index];
    if (buts[prod.value].value == false) {
      buts[prod.value].value = true;
    } else {
      buts[prod.value].value = false;
    }
    interactChart()
  }





  onMounted(()=>{
    interactChart()
  });


  let interactChart = () => { 

      let myChart;
      const ctx = document.getElementById('myChart')
      const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      createDataChart()
      const data = {
        labels: date.value === "months" ? months : rangeYear.value,
        datasets:dataChart
      }
    const chartWithKey = Chart.getChart('myChart')
    if (chartWithKey != undefined) {
      chartWithKey.destroy()
    }
    myChart = new Chart(ctx, {
      type:typeChart.value,
      data: data,
    })

    return myChart
  }
  let dataChart = ref([])
  function createDataChart(){
    dataChart = []
    for ( let key in buts) {
      if(buts[key].value == true){
        let prodData = crateSpecificData(key)
        // eslint-disable-next-line
        dataChart.push(prodData)
      }
    }
  }
  function crateSpecificData(key){
    const productData = {
          label: key +" "+'Price',
          data: date.value === "months" ? pricesPerMonthInAYear(yearOfMonths.value,key) : averagePricesByYearRange (rangeYear.value[0],rangeYear.value[(rangeYear.value).length-1], key),
          fill: typeChart.value == "bar" ? true : false, 
          borderColor: getColor(key), 
          backgroundColor: getColor(key),
          tension: 0,
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
    }

    return productData

  }


  let pricesPerMonthInAYear = (year,key)=>{
    
    let productData = prop.data.prodts[key].data 
    productData = productData.filter(element => parseInt((element.date).slice(0,4)) == year)
    productData = productData.map(element =>  parseFloat((element.value)).toFixed(2))
    return productData
  }
  
  let averagePricesByYearRange = (year1,year2, key)=>{
    
    let productData = prop.data.prodts[key].data 
  
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
        case ("wheat"):
            color = "rgba(248, 238, 11, 1)";
            break;
        case ("corn"):
            color = "rgba(252, 90, 90, 1)";
            break;
        case ("cotton"):
            color = "rgba(1, 1, 88, 1)";
            break;
        case ("sugar"):
            color = "rgba(27, 169, 234, 1)";
            break;
        case ("coffee"):
            color = "rgba(61, 213, 152, 1)";
            break;
        default:
            break;
    }

    return color

  }
  
</script>
  
<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";


</style>
