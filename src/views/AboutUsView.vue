<template>
  
  <SideBar class="col-2"/>
  <div class="allBody col-10" >
    <h1>About Us</h1>
    
  <div class="formDiv">

    <FormContact/>

  </div>

    <CardTeam />

  
  </div>

</template>

<script setup>
import SideBar from '@/components/Commons/SideBar.vue'
import FormContact from '@/components/Forms/FormContact.vue';
import CardTeam from "@/components/Cards/CardTeam.vue"

</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";
  h1 {
    text-align: center;
  }
.allBody {
  margin-top: 2rem;
}
.formDiv {
  width: 40rem;
  margin: 0 auto;
 
}

@include media-breakpoint-down(sm) {
  .formDiv {
  width: 18rem;
  margin: 0 auto;
 
}
}
</style>