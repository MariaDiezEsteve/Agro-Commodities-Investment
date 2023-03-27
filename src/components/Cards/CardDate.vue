<template>
    <div>
        <div id="months" class="mb-4 mt-2">
            <label class="mx-1" for="">Entre el año : </label>
            <input type="text" value="" style="width: 5rem; height: 1.5rem;">
        </div>
        <div id="years" class="mb-4 mt-2">
            <label class="mx-1" for="">Entre los años del rango : </label>
            <input class="mx-2" type="text"  placeholder="year1" style="width: 5rem; height: 1.5rem;" v-model="year1">
            <input type="text" placeholder="year2" style="width: 5rem; height: 1.5rem;" v-model="year2">
        </div>
    </div>
</template>

<script setup>

import {reactive, onMounted} from 'vue';

onMounted(()=>{
    averageYear
  });

const years = reactive([]) //está variable está para la función averageYear
console.log("***************", years.value)
let averageYear = (year1, year2) => {
  while(year1 < (year2 + 1)){
    years.value.push(year1)
    year1 ++
  }
  return years
}

averageYear


// hay que validar el año entrado

</script>

<style lang="scss" scoped>

</style>