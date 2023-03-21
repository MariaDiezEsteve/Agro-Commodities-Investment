<template>
  <!-- <h1>{{props.data.prodts}}</h1>  -->
    
  <div class="card" style="width: 18rem;">
    <div v-for="prodt in data.prodts" :key="prodt.name" class="card-body">
      {{ calcularPorcentaje(prodt) }}
      <h5 class="card-title">{{ (prodt.name).slice(15)}}</h5>
      <div class="card-details">
        <p class="card-text">{{ parseFloat(prodt.data[0].value).toFixed(2) }}</p>
        <p :class='classPorcentaje'>{{ porcentaje }} %</p>
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

    const porcentaje = ref (0) 

    function calcularPorcentaje(prodt){
      porcentaje.value = parseFloat(((prodt.data[0].value)-(prodt.data[1].value)) / (prodt.data[1].value)).toFixed(3)
    }

    
    const classPorcentaje = computed(() => {
      let result = '';
      if (porcentaje.value === 0) {
          result = 'zero';
      } else if (porcentaje.value > 0) {
          result = 'positive';
      } else {
          result = 'negative';
      }
      return result;
    });


  </script>

  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";


  .card-details {
    display: flex;
    justify-content: space-around;
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
  
  </style>