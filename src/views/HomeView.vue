<template>
  <h1></h1>
</template>


<script setup>

  import axios from "axios"
  import { ref } from "vue"


  const prodts= {
    wheat : ref(null),
    sugar : ref(null),
    cotton : ref(null),
    coffee : ref(null),
    corn : ref(null),

  }

  const url={
    wheat: "https:www.alphavantage.co/query?function=WHEAT&interval=monthly&apikey=demo",
    sugar: "https://www.alphavantage.co/query?function=SUGAR&interval=monthly&apikey=demo",
    corn: "https://www.alphavantage.co/query?function=CORN&interval=monthly&apikey=demo",
    cotton: "https://www.alphavantage.co/query?function=COTTON&interval=monthly&apikey=demo",
    coffee: "https://www.alphavantage.co/query?function=COFFEE&interval=monthly&apikey=demo"
  }
  

  //  const getData = async () => {

  //     let response = await axios.get(url.wheat)
  //     wheat.value = await response.data

  //     console.log("wheat",wheat.value)
  //  }
  //  getData();


    async function getData (url) {

      let response = await axios.get(url)
      .catch(error => console.log("El error es:",error))

      return response.data
  
    }


    let urls = Object.values(url)
    let i=0
  
    for (let clave in prodts){
      console.log(clave,"--",prodts[clave].value=await getData(urls[i]));
      i++
    }
     
</script>

<style lang="sass" scoped>

</style>
