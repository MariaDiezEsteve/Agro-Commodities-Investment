<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>
  
<script setup>
  import {defineProps,onMounted} from 'vue';
  import Chart from 'chart.js/auto'; //npm install chart.js

  const props = defineProps({
    data: Object
  })

  let myChart;
  onMounted(()=>{ //muy importante el onMounted para coger cosas del template es aqui dentro
    const ctx = document.getElementById("myChart")
    console.log("esto",ctx)
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

    console.log(myChart)

  }) ;
  

  

  //console.log(props.data.prodts)
</script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

  
  </style>