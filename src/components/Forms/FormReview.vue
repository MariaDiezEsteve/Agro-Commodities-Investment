<template>
  <div class="reviews">
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
        <div v-if="!reviewsData.isError" >
            <div class="row" >
                <div class="col-8" v-for="review in reviewsData.getReviews" :key="review.id" >
                  <div class="card text-center">
                    <div class="card-body">
                      <h3 class="card-title"> {{ review.name }}</h3>
                      <p class="opinion">Review:</p>
                      <!-- <input type="text" :value="review.opinion" class="inputReview card-text" disabled>  -->
                      <p class="card-text"> {{ review.opinion }}</p>
                        <button class="btn btn1" @click="editReviews(review.email, review.id, review.name)">Edit Review</button>
                        <button class="btn" @click="deleteReview(review.email, review.id)">Delete Review</button>
                      </div>
                    </div>
                  </div>
            </div>

            <div class="child-position">
            <div v-show="hidenEmailDelete">
              <h2>Delete your Review</h2>
              <h4>Please, confirm your email address to delete your review</h4>
              <input type="text" placeholder="Enter your email" v-model="emailReviewInput" >
              <button class="btn2" @click="checkedDataDelete">Enter</button>              
            </div>
            <div v-show="hidenEmailOpinion">
              <h2>Edit your Review</h2>
              <h4>Please, confirm your email address to edit your review</h4>
              <input type="text" placeholder="Enter your email" v-model="emailReviewInput" >
              <button class="btn2" @click="checkedDataEdit">Enter</button>
            </div>
            <div v-show="hidenOpinion">
              <h2>Edit your Review</h2>
              <h4>Please, edit your new review</h4>
              <textarea type="text" placeholder="Enter your new opinion" v-model="formOpinion" cols="20" rows="5"> </textarea>
              <div>
                <button class="btn3" @click="editReview">Enter</button>
              </div>
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
             location.reload()
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
        location.reload()
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
    margin: 0rem 0rem;
  }

  .card{    
    margin: 1rem 0rem;
    background-color: $greyLight;
    width: 120%;
  }

  .card-title{
    font-size: 1.5rem;
    padding: 1rem;
  }

  .opinion{
    font-weight: 700;
  }
  .card-text{
    font-size: 1rem;
    padding: 0.9rem;
  }

  .btn{
    @include button($bg-color: $blueDark, $wth: 6rem, $colorletra: $white_color);
        font-size: 0.78rem;
  }

  .btn1{
    margin-right: 0.5rem;
  }

  .btn2{
    @include button($bg-color: $blueDark, $wth: 6rem, $colorletra: $white_color);
        font-size: 1rem;
        margin-left: 2rem;
  }
  .btn3{
    @include button($bg-color: $blueDark, $wth: 11rem, $colorletra: $white_color);
        font-size: 1rem;
        margin-left: 2rem;
  }
  input{
    border-radius: 0.5rem;
    padding: 0.25rem ;
    
   }

   textarea{
    border-radius: 0.5rem;
    padding: 0.5rem ;
    
   }
   input::placeholder, textarea::placeholder{
    color: $blueDark;
    text-align: center;
   }

   h4{
    margin: 1rem 0rem;
    font-weight: bolder;
   }

  .child-position{
    position: absolute;
    right: 0rem;
    left: 60%;
    top: 84rem;
    z-index:10;
   }


   @include media-breakpoint-down(lg) {
    input{
    width: 20px;
    
   }

   

  }
  </style>