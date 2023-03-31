<template>
    <div>
        <div id="years" class="mb-4 mt-2" >
            <label class="mx-1" for="">Enter the range of years : </label>
            <input class="mx-2" type="text"  placeholder="year1" style="width: 5rem; height: 1.5rem;" v-model="year1" @keydown.enter="lookValue()">
            <input class="rangeYearsInput2" type="text" placeholder="year2" style="width: 5rem; height: 1.5rem;" v-model="year2" @keydown.enter="lookValue()">
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

const emit = defineEmits(["rangeYears"])


//rango de años
const getYears = (years) => {
        emit ("rangeYears", years)
        console.log("YEARS",years)
}



</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";


@include media-breakpoint-down(sm) {
    .rangeYearsInput2 {
        margin-left: 0.5rem;
    }
  }
  

</style>