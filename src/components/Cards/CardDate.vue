<template>
    <div>
        <div id="months" class="mb-4 mt-2">
            <label class="mx-1" for="">Enter the year : </label>
            <input type="text" value="" style="width: 5rem; height: 1.5rem;" @keydown.enter="getYear($event.target.value)">
        </div>
        <div id="years" class="mb-4 mt-2" >
            <label class="mx-1" for="">Enter the range of years : </label>
            <input class="mx-2" type="text"  placeholder="year1" style="width: 5rem; height: 1.5rem;" v-model="year1" @keydown.enter="lookValue()">
            <input type="text" placeholder="year2" style="width: 5rem; height: 1.5rem;" v-model="year2" @keydown.enter="lookValue()">
        </div>
    </div>
</template>

<script setup>

import {onMounted, ref, defineEmits} from 'vue';

onMounted(()=>{
    lookValue(year1, year2)
   
  });

const year1 = ref(null)
const year2 = ref(null)
//está variable está para la función averageYear
let years = ref([])

let year = ref([])

function lookValue(){
    // console.log("year1",year1.value)
    // console.log("year2",year2.value)
   if(year1.value != null && year2.value != null){
        years = averageYear(year1.value, year2.value)
        getYears(years)
    } 

}


let averageYear = (year1, year2) => {
    const rangeYears =[] 
    while(year1 < (year2)){
        rangeYears.push(year1)
    year1 ++
  }

  rangeYears.push(year2)
  return rangeYears
}

const emit = defineEmits(["rangeYears", "year"])


//rango de años
const getYears = (years) => {
        emit ("rangeYears", years)
        console.log("YEARS",years)
}


//año de los meses
const getYear = () => {
    emit ("year", year)
    console.log("YEAR en el hijo",year)
}

</script>

<style lang="scss" scoped>

</style>