<template>
  <div>
    <canvas id="myChart" width="400px" height="400px"></canvas>
  </div>
</template>
  
  <script setup>
   import {defineProps} from 'vue';
   import Chart from 'chart.js/auto';

    const props = defineProps({
      data: Object
    })

    let myChart;
    myChart

    const ctx = document.getElementById("myChart")
    console.log(ctx)

    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const dataProdt = {
      labels: labels,
      datasets: [{
        label: "Monthly Price",
        data: [props.data.prodts.wheat.data.value],
        backgroundColor: ['rgb(248, 239, 11)'],
      }],
    }

    myChart = new Chart(ctx, {
      type: "line",
      data: dataProdt
    })

    console.log(props.data.prodts)
  </script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

  
  </style>