<template>
  <div class="reviews">
    <h1>Reviews</h1>
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
        <div v-if="!reviewsData.isError" >
          <div class="card text-center" v-for="review in reviewsData.getReviews" :key="review.id" >
            <div class="card-body">
              <h3 class="card-title"> {{ review.name }}</h3>
              <p class="opinion">Review:</p>
              <input type="text" :value="review.opinion" class=" inputReview card-text" disabled> 
              <button @click="deleteDisable">Edit Review</button>
              <button @click="deleteReview(review.id)">Delete Review</button>
            </div>
          </div>
        </div>   
  </div>
</template>
  
  <script setup>
  import {defineProps } from 'vue'
  import axios from 'axios'
  
 const prop = defineProps({
    reviewsData: Object,
    reviews: Function
  });



  // DELETE REVIEW
  let isError = false
  const deleteReview = (idReview) => {
        try{
            axios.delete(`http://localhost:3000/reviews/${idReview}`)  
            // console.log("id será", idReview)
             prop.reviews()
          }catch (error) {
              console.log(error);
              isError = true
          }
    return{
        isError
    } 
  }

  let deleteDisable = () => {
    let inputReview = document.getElementsByClassName("inputReview")
    console.log("inputReview", inputReview)
   // inputReview.setAttribute.disabled=false
   inputReview.forEach(element => {
    element.enabled =true
  })
  //  inputReview.disabled=false
  //  inputReview.enabled=true
    console.log("holaaa", inputReview.disabled)

  }

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