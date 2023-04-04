<template>
  <div class="d-flex flex-column">
    <div class="pieChartDiv">
      <canvas id="myPieChart"></canvas>  
    </div>
    <p class="mt-3 text-center">Percentage of investments by product</p>
  </div>
 
 </template>
  


  <script setup>

  import {onMounted,defineProps} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js

  defineProps({
      data: Object
  })

  onMounted(()=>{
    
   const myChart = new Chart (
      document.getElementById('myPieChart'),
      config

    );
    console.log(myChart);
  });


 


   
    const labels = ["Wheat", "Sugar", "Cotton", "Coffee","Corn"]
     
    const data = {
      labels: labels,
      datasets: [{
        label:'%',  
        data: [10, 20, 25, 5, 40],
        fill: true, 
        borderColor: ["rgba(248, 238, 11, 1)","rgba(27, 169, 234, 1)","rgba(1, 1, 88, 1)","rgba(61, 213, 152, 1)","rgba(252, 90, 90, 1)"],
        backgroundColor: ["rgba(248, 238, 11, 1)","rgba(27, 169, 234, 1)","rgba(1, 1, 88, 1)","rgba(61, 213, 152, 1)","rgba(252, 90, 90, 1)"],
        }]
   };






      const config = {
        type: "doughnut",
        data: data,
         options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              enabled: true,
              boxPadding: 3,
              callbacks: {
                label: (context) => {
                  return `${context.parsed}%`
                }
              }
            },
            legend: {
              labels: {
                boxWidth: 5,
                usePointStyle: true,
                boxHeight: 5.5,
                font: {
                  size: 12,
                }
              }     
            }
          }

          }
      }



</script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

    .pieChartDiv {
      width: 100%;
    }

    @include media-breakpoint-down(sm) {

    .pieChartDiv {
      width: 85%;
    }
}
    @include media-breakpoint-down(lg) {
        .pieChartDiv {
          width: 110%;
          margin-bottom: 2rem;
        }

    }

  </style>