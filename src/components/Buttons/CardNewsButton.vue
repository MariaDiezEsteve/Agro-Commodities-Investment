<template>
  <div class="buttones">
    <button type="button" class="butn-card bg-white text-black">Back</button>
    <button type="button" class="butn-cards bg-black text-white">Next</button>
  </div>
</template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";

  .buttones{
    display: flex;
    justify-content: center;
    gap:0.3rem;

    .butn-card{
    padding: 0.1rem 3rem;
    border-radius: 0.2rem;
    border: solid rgba($color: #000000, $alpha: 1.0);
  }
  .butn-cards{
    padding: 0.1rem 3rem;
    border-radius: 0.2rem;
    border: none;
  }
  }
  

  
  
  </style>