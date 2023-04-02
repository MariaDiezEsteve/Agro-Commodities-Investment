<template>
  <div class="reviews">
    <h2 class="title-h2">Our reviews</h2>
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
        <div v-if="!reviewsData.isError" >
            <div v-show="hidenEmailDelete">
              <h4>Please, confirm your email address to delete your review</h4>
              <input type="text" placeholder="Enter your email" class="card-text" v-model="emailReviewInput" >
              <button @click="checkedDataDelete">Enter</button>              
            </div>
            <div v-show="hidenEmailOpinion">
              <h4>Please, confirm your email address to edit your review</h4>
              <input type="text" placeholder="Enter your email" class="card-text" v-model="emailReviewInput" >
              <button @click="checkedDataEdit">Enter</button>
            </div>
            <div v-show="hidenOpinion">
              <h4>Please, edit your review</h4>
              <input type="text" placeholder="Enter your new opinion" class="card-text" v-model="formOpinion"> 
              <button @click="editReview">Enter</button>
            </div> 
          

          <div class="card text-center" v-for="review in reviewsData.getReviews" :key="review.id" >
            <div class="card-body">
              <h3 class="card-title"> {{ review.name }}</h3>
              <p class="opinion">Review:</p>
              <!-- <input type="text" :value="review.opinion" class="inputReview card-text" disabled>  -->
              <p class="card-text"> {{ review.opinion }}</p>
              <button @click="editReviews(review.email, review.id, review.name)">Edit Review</button>
              <button @click="deleteReview(review.email, review.id)">Delete Review</button>
            </div>
          </div>

        </div>   
  </div>
</template>
  
  <script setup>
  import {defineProps, ref } from 'vue'
  import axios from 'axios'

  
  
 const prop = defineProps({
    reviewsData: Object,
    reviews: Function
  });

  const hidenEmailDelete = ref("")
  const emailReviewInput = ref("")
  let idReviewPost = ref("")


  // DELETE REVIEW
  let isError = false

  let deleteReview = (email, id) => {
    hidenEmailDelete.value = true
    emailReview.value = email
    idReviewPost.value = id
  }

  let checkedDataDelete = () => {
    if(emailReview.value === emailReviewInput.value){
      try{
            axios.delete(`http://localhost:3000/reviews/${idReviewPost.value}`)  
            // console.log("id será", idReview)
             prop.reviews()
             hidenEmailDelete.value = false
          }catch (error) {
              console.log(error);
              isError = true
          }
          return{
              isError
          } 
    }

  }

  //EDIT REVIEW
  
  const hidenOpinion = ref(false)
  let emailReview = ref("")
  let nameReview = ref("")
  let formOpinion = ref(null)
  const hidenEmailOpinion = ref(false)



  let editReviews = (email, id, name) => {
    hidenEmailOpinion.value = true
    emailReview.value = email
    idReviewPost.value = id
    nameReview.value = name
  }

  let checkedDataEdit = () => {
    if(emailReview.value === emailReviewInput.value){
      // let inputReview = document.querySelectorAll(".inputReview")
      //     inputReview.forEach((element) => {
      //         element.disabled=false
      //     })   
      hidenOpinion.value = true
      hidenEmailOpinion.value = false
    }
   }
  

    const editReview = () => {
      try {
        axios.put(`http://localhost:3000/reviews/${idReviewPost.value}`, {
          name: nameReview.value,
          email: emailReview.value,
          opinion: formOpinion.value
        })
        prop.reviews()
        hidenOpinion.value = false
          }catch (error) {
              console.log(error);
              isError = true
          }
        return{
         isError
    } 
    
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

  .title-h2{
    margin: 2rem 0rem;  
  }
  </style>