<template>
    <select @change="getTypeChart($event.target.value)">
    <option v-for="element in elements" :key="element.value" :value="element.value"  :selected="true">{{ element.text }}  </option>
  </select>
  </template>
    
  <script setup>

    import {defineEmits} from 'vue';

    const elements = [
    {
        value: 'line',
        text: 'line'
    },
    {
        value: 'bar',
        text: 'bar'
    },
    ]

    const emit = defineEmits(["typeSelected"])

    let getTypeChart = (selectedType) => {
    emit("typeSelected",selectedType)     
    }
  
  </script>
    
<style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";


</style>