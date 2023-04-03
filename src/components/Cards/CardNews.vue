<template>
  <div v-for="info in information.getNews"
    :key="info.id">
  <div class="card d-block m-auto mb-3">
    <div class="row d-flex justify-content-center g-0">
      <div class="col-md-4">
        <img
          :src="info.src"
          class="img-fluid rounded-start"
          :alt="info.alt"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ info.title }}</h5>
          <p class="card-text">{{ info.description }}</p>
          <div class="btn-principal">
          <button >
            <router-link class="btn-router" :to="info.enlace">More information</router-link>
          </button>
        </div>
          <p class="card-text px-5">
            <small class="text-muted">{{ info.date }}</small>
          </p>
          
        </div>

      </div>
      </div>
    </div>
    <div class="redes">
      <img class="redes-images" src="@/assets/images/ImagenesRss/whatssap.png" alt="">
      <img class="redes-images" src="@/assets/images/ImagenesRss/facebook.png" alt="">
      <img class="redes-images" src="@/assets/images/ImagenesRss/twitter.png" alt="">
      <img class="redes-images" src="@/assets/images/ImagenesRss/enlaces.png" alt="">
    </div>
  </div>

  
              <!-- iconos -->
    
  <!-- <div class="card" v-for ="blogProduct in blogProducts" :key="blogProduct.id">
      <img src="@/assets/images/imagenes-blog/cafe.jpg" class="card-img-left" :alt="blogProduct.alt" />
      <div class="card-body">
        <h2 class="card-title"></h2>
        <p class="card-text">{{ blogProduct.description}}</p>
        <button><router-link :to = "blogProduct.enlace">More information</router-link></button>
      </div>
    </div> -->
</template>

<script setup>
import {defineProps} from 'vue';

defineProps({
  information: Object
})


</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.card {
  display: flex;
  justify-content: center;
  width: 85%;
  
  img {
    height: 100%;
  }
}
.card-title {
  text-align: center;
  font-weight: bold;
  padding: 1rem;
}
.card-text{
  padding-left:2.5rem;
  padding-right:2.5rem;
}
.btn-principal{
  display: flex;
  justify-content: center;
  padding-top: 0.8rem;
  button {
  @include button($bg-color: $blueDark, $wth: 14rem, $colorletra: $white_color);
  font-size: 0;
 
}
}
.btn-router{
  color: white;
  text-decoration: none;
  padding-bottom: 1rem;
}



.redes{
  display: flex;
  justify-content: start;
  padding-left: 5rem;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.redes-images{
  @include ico ($color:$white_color, $wth:2%, $hgt:2rem);
}
</style>
