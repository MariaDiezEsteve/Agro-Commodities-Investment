<template>
  <div style="width: 20%;">
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

  // var ctx= document.getElementById("myChart");
  //       var myChart= new Chart(ctx,{
  //           type:"pie",
  //           data:{
  //               labels:['col1','col2','col3'],
  //               datasets:[{
  //                       label:'Num datos',
  //                       data:[10,9,15],
  //                       backgroundColor:[
  //                           'rgb(66, 134, 244,0.5)',
  //                           'rgb(74, 135, 72,0.5)',
  //                           'rgb(229, 89, 50,0.5)'
  //                       ]
  //               }]
  //           },
  //           options:{
  //               scales:{
  //                   yAxes:[{
  //                           ticks:{
  //                               beginAtZero:true
  //                           }
  //                   }]
  //               }
  //           }
  //       });


  let pieChart = () => { 
   
    let myChart;
    const ctx = document.getElementById('myPieChart')
    const years = ["Corn", "Wheat", "Sugar", "Cotton", "Coffee"]
      
    const dataChart = {
      labels:years,
      datasets: [{
        label:'Price',  
        data: [10, 20, 25, 5, 40],
        fill: true, //
        borderColor: 'rgb(75, 192, 192)', //hacer funcion que dado producto devuelve un string con el rgb
        backgroundColor: 'rgb(75, 192, 192)', //lo mismo llamamos a la misma funcion
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