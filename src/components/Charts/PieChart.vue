<template>
  <div style="width: 40%;">
    <canvas id="myPieChart"></canvas>  
  </div>
 </template>
  


  <script setup>

  import {onMounted,defineProps} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js

  defineProps({
      data: Object
  })


  onMounted(()=>{//muy importante el onMounted para coger cosas del template es aqui dentro
    //myChart
    pieChart()
  });



  let pieChart = () => { 
   
    let myChart;
    const ctx = document.getElementById('myPieChart')
    const commodities = ["Wheat", "Sugar", "Cotton", "Coffee","Corn"]
      
    const dataChart = {
      labels:commodities,
      datasets: [{
        label:'%',  
        data: [10, 20, 25, 5, 40],
        fill: true, //
        borderColor: ["rgba(248, 238, 11, 1)","rgba(27, 169, 234, 1)","rgba(1, 1, 88, 1)","rgba(61, 213, 152, 1)","rgba(252, 90, 90, 1)"], 
        backgroundColor: ["rgba(248, 238, 11, 1)","rgba(27, 169, 234, 1)","rgba(1, 1, 88, 1)","rgba(61, 213, 152, 1)","rgba(252, 90, 90, 1)"], 
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
      type: "doughnut",
      data: dataChart,

    })

    return myChart
  }


</script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

  
  </style>