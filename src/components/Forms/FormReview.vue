<template>
  <div class="reviews">
    <h1>Reviews</h1>
    <div class="card text-center" v-for="review in reviews.getReviews" :key="review.id" >
      <div class="card-body">
        <h3 class="card-title"> {{ review.name }}</h3>
        <p class="opinion">Review:</p>
        <p class="card-text"> {{ review.opinion }}</p>
        <button>Edit Review</button>
        <button>Delete Review</button>
      </div>
    </div>   
  </div>
</template>
  
  <script setup>
  import {defineProps } from 'vue'

  
  defineProps({
    reviews: Object
  });



  // EDIT REVIEW




  </script>
  
  <style lang="scss" scoped>
   @import "@/assets/Sass/--parcial.scss";

  .reviews{
    margin: 0rem 8rem;
  }
  .card{
    width: 75%;
    margin: 2.5rem 0rem;
  }
  
  .card-title{
    font-size: 1.5rem;
    padding: 1rem;
  }

  .opinion{
    font-weight: 700;
  }
  </style>