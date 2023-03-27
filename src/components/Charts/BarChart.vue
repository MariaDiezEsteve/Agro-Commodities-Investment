<template>
  <div class="d-flex justify-content-center pt-4">
    <div style="width: 60%">
      <div class="d-flex flex-row justify-content-between">
        <DropDate @dateSelected="getDate"/>
        <DropChart @typeSelected="getTypeChar"/>
      </div>
      <CardDate @rangeYears="rangeYears"/>
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
    productChart()    

    //console.log("en el padre",date.value)
  }

  const getTypeChar = (selectedType) => {
    typeChart.value = selectedType
    productChart()

    //console.log("en el padre type",typeChart.value)
  }

  let rangeYear = ref([2000, 2001, 2002, 2003, 2004,2005, 2006])

  let rangeYears = (years) => {
    rangeYear.value = years
    console.log("me corono", rangeYear.value)
    productChart()

  }

  onMounted(()=>{//muy importante el onMounted para coger cosas del template es aqui dentro
       productChart()    
  });

 
  let productChart = () => { //esta funcion se dinamiza con un prop del producto seleccionado

    let myChart;
    const ctx = document.getElementById('myChart')
    const  months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    console.log("precios dataaaa", prop.data.prodts.wheat.data)
      
    const dataChart = {
      labels: date.value === "months" ? months : rangeYear.value,
      datasets: [{
        label: prop.nameProduct +" "+'Price',  // porp del producto seleccionado + Price
        data: date.value === "months" ? pricesPerMonthInAYear(2000) : averagePricesByYearRange (rangeYear.value[0],rangeYear.value[(rangeYear.value).length-1]) , //coger el año de la interfaz
        fill: typeChart.value == "bar" ? true : false, //
        borderColor: 'rgb(75, 192, 192)', //hacer funcion que dado producto devuelve un string con el rgb
        backgroundColor: getColor(prop.nameProduct), //lo mismo llamamos a la misma funcion
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
      type: typeChart.value,
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




  const getColor = (name) => {
    switch(name) {
        case (name == "wheat"):
            "rgba(248, 238, 11, 1)";
            break;
        case (name == "corn"):
            "rgba(252, 90, 90, 1)";
            break;
        case (name == "cotton"):
            "rgba(1, 1, 88, 1)";
            break;
        case (name == "sugar"):
            "rgba(27, 169, 234, 1)";
            break;
        case (name == "coffee"):
            "rgba(61, 213, 152, 1)";
            break;
        default:
            break;
    }

  }
  console.log("***************", getColor(prop.nameProduct))

 
  
</script>
  
<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";

  
</style>