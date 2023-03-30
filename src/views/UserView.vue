<template>
  <SideBar class="col-lg-2  col-md-3  col-sm-3"/>
    <div class="col-lg-10 col-md-9 col-sm-9 px-5" >
      <h1>"esto es h1 en el costumize"</h1>

      <!-- <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
      <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
      <div v-if="!data.isError && !data.isLoading" >
        <h2>Loading es: {{isLoading}}</h2>
        <h2>{{data.prodts}}</h2>
      </div>  -->

      <h2>"Esto es h2"</h2>
      <select>
        <option value="value1">Value 1</option>
        <option value="value2" selected>Value 2</option>
        <option value="value3">Value 3</option>
      </select>

    </div>
</template>

<script setup>
  import SideBar from '@/components/Commons/SideBar.vue'


</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";


</style>