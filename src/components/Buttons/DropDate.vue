<template>
  <select @change="getSelectedDate($event.target.value)">
    <option v-for="element in elements" :key="element.value" :value="element.value"  :selected="true">{{ element.text }}  </option>
  </select>
</template>
  
<script setup>
  import {defineEmits} from 'vue';

  const elements = [
    {
      value: 'months',
      text: 'Months'
    },
    {
      value: 'years',
      text: 'Years'
    },
  ]

  const emit = defineEmits(["dateSelected"])

  let getSelectedDate = (selectedDate) => {
    emit("dateSelected",selectedDate)     
  }

</script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

  
  </style>