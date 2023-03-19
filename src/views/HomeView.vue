

<template>
  <h1>{{titulo}}</h1>
  <h2>{{data}}</h2> <!-- se muestra el arreglo de objetos que contiene el objeto prodts y el objeto url -->
  <h2>{{data.prodts}}</h2> <!-- se muestra solo el objeto de prodts-->

</template>


<script setup>
// al poner import algo se crea un objeto con ese nombre que contiene
// todo lo que este en el export defaul del js 
  import data from '@/logic/dataInfo' 

  let titulo="prueba"

  for (let clave in data.prodts){

    console.log("aa",clave,data.prodts[clave])
  }



</script>

<style lang="css" scoped> puse css porque sass esta dando error luego reviso

  h1{
    color:blue;
  }

</style>
