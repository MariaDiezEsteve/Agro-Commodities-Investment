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
          <button >
            <router-link class="btn-router" :to="info.enlace">More information</router-link>
          </button>
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




// const blogProducts = [
//   {
//     id: 1,
//     title: "Cotton",
//     description:
//       "When it comes to finding the best broker for CFD cotton trading, there are a few things to consider.Firstly, look at the fees and commissions that brokers charge. Different brokers will offer different fees and it is important to compare different brokers in order to find one that suits your budget... ",
//     src: "@/assets/images/imagenes-blog/algodon.jpg",
//     alt: "imagen algodón",
//     enlace: "../views/DetailsView.vue",
//     date: "March 2023",
//   },
 
// ];


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
.card-text{
  padding-left:2.5rem;
  padding-right:2.5rem;
}
.btn-router{
  color: white;
  text-decoration: none;
  padding-bottom: 1rem;
}

button {
  @include button($bg-color: $blueDark, $wth: 14rem, $colorletra: $white_color);
  font-size: 0;
}

.redes{
  display: flex;
  justify-content: start;
  padding-left: 15rem ;
  gap: 0.5rem;
}
.redes-images{
  @include ico ($color:$white_color, $wth:2%, $hgt:2rem);
}
</style>
