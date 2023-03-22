<template>
  <div class="card mb-3" v-for ="blogProduct in blogProducts" :key="blogProduct.id">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="@/assets/images/imagenes-blog/cafe.jpg" class="img-fluid rounded-start" alt="blogProduct.alt">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ blogProduct.title }}</h5>
        <p class="card-text">{{ blogProduct.description }}</p>
        <button><router-link :to = "blogProduct.enlace">More information</router-link></button>
        <p class="card-text"><small class="text-muted">{{ blogProduct.date }}</small></p>
      </div>
    </div>
  </div>
  </div>

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
  
  const blogProducts  = [
  { 

    id: 1,
    title:"Cotton",
    description:"When it comes to finding the best broker for CFD cotton trading, there are a few things to consider.Firstly, look at the fees and commissions that brokers charge. Different brokers will offer different fees and it is important to compare different brokers in order to find one that suits your budget. Secondly, check the trading platform offered. It is important to make sure that the platform works well and has all the features you need.",
    src: "@/assets/images/imagenes-blog/algodon.jpg",
    alt: "imagen algodón",
    enlace: '../views/DetailsView.vue',
    date:"March 2023",
  }
  ]
  


 </script>
  
  
  <style lang="scss" scoped>
 @import "@/assets/Sass/--parcial.scss";


 .card{
  display: flex;
  justify-content: center;
  width: 65%;
      img{

    height: 100%;
    }
 }

 


  button{
    @include button ($bg-color:$blueDark, $wth: 14rem, $colorletra:$white_color);
  }
 
  </style>