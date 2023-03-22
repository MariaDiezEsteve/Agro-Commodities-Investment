<template>
  <!-- <h1>{{props.data.prodts}}</h1>  -->
  
<div class="container">
  <div v-for="prodt in data.prodts" :key="prodt.name" class="card">
    <div class="card-body">
      {{ calculateRate(prodt) }}  <!-- Llamada a la función: Esto hace referencia a la función del cálculo rate para poder obtener los datos y mostrarlos en la línea 10-->
      {{ nameProduct(prodt) }}
      <h4 :class="classColorProduct">{{ nameColorProduct}}</h4>
      <div class="card-details">
        <p class="card-text">{{ parseFloat(prodt.data[0].value).toFixed(2) }}</p>
        <p :class='classRate'> {{ rate }} %</p>
      </div>
    </div>
  </div>
</div>

  </template>
  
  <script setup>
    import {defineProps,ref} from 'vue';
    import { computed } from "@vue/reactivity"

    defineProps({
      data: Object
    })

    const rate = ref (0) 

    function calculateRate(prodt){
      rate.value = parseFloat(((prodt.data[0].value)-(prodt.data[1].value)) / (prodt.data[1].value)).toFixed(3)
    }

    
    const classRate = computed(() => {
      let result = '';
      if (rate.value === 0) {
          result = 'zero';
      } else if (rate.value > 0) {
          result = 'positive';
      } else {
          result = 'negative';
      }
      return result;
    });

    const nameColorProduct = ref("");
    function nameProduct(prodt) {
      nameColorProduct.value = (prodt.name).slice(16);
    }

    const classColorProduct = computed(() => {
      let colorProduct = '';
      if (nameColorProduct.value == "Wheat") {
          colorProduct = 'yellow card-title';
      } else if (nameColorProduct.value == "Sugar") {
          colorProduct = 'lightblue card-title';
      } else if (nameColorProduct.value == "Cotton") {
          colorProduct = 'darkblue card-title';
      }else if (nameColorProduct.value == "Coffee") {
          colorProduct = 'lightgreen card-title';
      }else if(nameColorProduct.value == "Corn") {
          colorProduct = 'coral card-title';
      } else {
        colorProduct = 'black card-title'
      }
      return colorProduct;
    });
  

  </script>

  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";


  .card-details {
    display: flex;
    justify-content: space-around;
  }

  .card {
    width:15rem;
    padding: 1.2rem;
  }

  .card-title {
    padding-bottom: 1rem;
  }
  .positive {
    color: $green;
    }

  .negative {
  color:$red;
  }

  .zero {
  color: $blueDark;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
  }

  //Color Name Products

  .yellow {
    color: $wheat;
  }

  .lightblue {
    color: $sugar;
  }

  .darkblue {
    color: $cotton;
  }

  .lightgreen {
    color: $coffee;
  }

  .coral {
    color: $corn;
  }
  
  </style>