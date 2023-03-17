<template>
  <h1></h1>
</template>

<script setup>
import axios from "axios"
import { ref } from "vue"


    const wheat = ref(null)
  

    const getData = async () => {
        const response = await axios.get("https://www.alphavantage.co/query?function=WHEAT&interval=monthly&apikey=demo")
        wheat.value = await response.data
        console.log(wheat.value)
    }
    getData();

     
</script>

<style lang="sass" scoped>

</style>
