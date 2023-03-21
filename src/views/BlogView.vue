<template>
  <h1 id="h1_home">Blog</h1>

  <CardNews />
</template>

<script setup>
import CardNews from '@/components/Cards/CardNews.vue';
  


</script>

<style lang="scss" scoped>
 @import "@/assets/Sass/--parcial.scss";


 h1{
            @include h1 ($color:$blueDark,$font-size: $h1);
          }
        
h2{
            @include texto ($color:$blueDark,$font-size: $h2);
            font-weight: 600;

  }
 button{
    @include button ($bg-color:$blueDark, $wth: 10rem, $colorletra:$white_color);
  }


  @mixin h1 ($color:$blueDark,$font-size: $h2){
    color: $color;
    font-size: $font-size;
    font-weight: 600;
    font-family: ubuntu;
    
}








</style>