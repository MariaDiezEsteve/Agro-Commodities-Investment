<template>
    <div class="img">
      <div class="px-5 pt-4">
        <h1 id="h1_home">{{text[0]}}</h1>
        <p class="pt-3">{{text[1]}}</p>
      </div>
      
    </div>
</template>

<script setup>

const text=["Wellcome to RawInvesting","A platform that helps you make decisions to invest in agricultural commodities"]

</script>

<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";

  .img{
    @extend %imagen;
    background-image:linear-gradient(to left, rgba(15, 51, 135, 0.6), rgb(15, 51, 135,0.3)),
        url("@/assets/images/OIP.jpeg");
    height: 250px;
  }

  p{
    @include texto ($color:$white_color,$font-size: $h3);
    font-weight: 500;
    width: 50%;

  }


</style>