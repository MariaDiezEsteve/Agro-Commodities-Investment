<template>

  <h1>Invest in your life</h1>

  <button>
    <img
      src="@/assets/images/IconosUserView/trigoBlanco-removebg-preview.png"
    />
    Wheat
  </button>

  <button>
    <img
      src="@/assets/images/IconosUserView/azucarBlanco-removebg-preview.png"
    />
    Sugar
  </button>

  <button>
    <img
      src="@/assets/images/IconosUserView/algodonCapBlanco-removebg-preview.png"
    />
    Cotton
  </button>

  <button>
    <img src="@/assets/images/IconosUserView/cafeBlanco-removebg-preview.png" />
    Coffe
  </button>

  <button>
    <img src="@/assets/images/IconosUserView/maizBlanco-removebg-preview.png" />
    Corn
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

button {
  @include button($bg-color: $blueDark, $wth: 14rem, $colorletra: $white_color);
  display: flex;
  margin-left: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

h1 {
  margin-left: 3rem;
}

img {
  height: 2rem;
  align-self: start;
  display: flex;
  flex-direction: row;
  padding-right: 2rem;
  padding-left: 2rem;
}
</style>
