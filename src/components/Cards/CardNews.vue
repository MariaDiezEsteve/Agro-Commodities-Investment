<template>

  <div class="card" v-for ="blogProduct in blogProducts" :key="blogProduct.id">
      <img :src="blogProduct.src" class="card-img-top" :alt="blogProduct.alt" />
      <div class="card-body">
        <h5 class="card-title">{{ blogProduct.title }}</h5>
        <p class="card-text">{{ blogProduct.description}}</p>
        <router-link :to = "blogProduct.enlace">More information</router-link>
      </div>
    </div>

</template>
  
  <script setup>
  
  const blogProducts  = [
  { 

    id: 1,
    title:"Cotton",
    description:"When it comes to finding the best broker for CFD cotton trading, there are a few things to consider.Firstly, look at the fees and commissions that brokers charge. Different brokers will offer different fees and it is important to compare different brokers in order to find one that suits your budget. Secondly, check the trading platform offered. It is important to make sure that the platform works well and has all the features you need. Finally, look at the customer service. A good broker should be able to provide fast and helpful customer service in case you have any questions or need help with your order",
    src: "@/assets/images/imagenes-blog/algodon.jpg",
    alt: "imagen algodón",
    enlace: '../views/DetailsView.vue',
  }
  ]
  


 </script>
  
  
  <style lang="scss" scoped>

  
  </style>