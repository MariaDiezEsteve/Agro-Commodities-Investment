<template>
  <h1 id="h1_home">"esto es h1 Home"</h1>
  <h1>"esto es h1 normal"</h1>
  <nav>holaa</nav>

  <!-- <img v-if="data.isError" src="@/assets/images/error.jpeg" alt="error">
  <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
  <div v-if="!data.isError && !data.isLoading" >
    <h2>Loading es: {{isLoading}}</h2>
    <h2>{{data.prodts}}</h2>
  </div>  -->

  <h2>"Esto es h2"</h2>
  <h3>"esto es h3"</h3>
  <p>"esto es un parrafo"</p>

  <div id="image_person"></div>
  <button>Enter</button>
  <br>
  <select>
    <option value="value1">Value 1</option>
    <option value="value2" selected>Value 2</option>
    <option value="value3">Value 3</option>
  </select>

</template>


<script setup>
  import info from '@/DataInformation/dataInfo'
  import {ref,onMounted} from "vue";

  // let titulo="Wellcome to RawInvesting" 
  let isLoading = ref(true) 

  let data = ref(onMounted(async () => {
    data.value = await info.getData()
    
    if( !data.value.isLoading){
      isLoading.value = false
    }
  })) 
  
</script>

<style lang="scss" scoped> 
  @import "@/assets/Sass/--parcial.scss";
/* si tiene error con sass poner en la consola: npm install sass-loader node-sass –save-dev.
si es mac o linux y si es windows:  npm install sass-loader node-sass*/




  #image_person{
    @include imgPerson ($url: url('../assets/images/profile.jpeg'),$wth:5%,$hght: 5rem,$margin: 2rem);
  }

  button{
    @include button ($bg-color:$blueDark, $wth: 10rem, $colorletra:$white_color);
  }

  select{
    @include drop($wth:6%);
  }

</style>
