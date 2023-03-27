<template>
    <div>
        <div id="months" class="mb-4 mt-2">
            <label class="mx-1" for="">Entre el año : </label>
            <input type="text" value="" style="width: 5rem; height: 1.5rem;">
        </div>
        <div id="years" class="mb-4 mt-2" >
            <label class="mx-1" for="">Entre los años del rango : </label>
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

function lookValue(){
    

    console.log("year1",year1.value)
    console.log("year2",year2.value)

   if(year1.value != null && year2.value != null){
        years = averageYear(year1.value, year2.value)
        //getYears (aYears)

        console.log("m", years)
        getYears(years)
        console.log("eiiiiiii", years)
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

const emit = defineEmits(["rangeYears"])

const getYears = (years) => {

    if(years != null){
        emit ("rangeYears", years)
        console.log("YEARS",years)
    }
   
}

// getYears(aYears)
// console.log("eiiiiiii", aYears)



</script>

<style lang="scss" scoped>

</style>