<template>
  <div class="reviews">
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
        <div v-if="!reviewsData.isError" >
            <div class="row" >
                <div class="col-8" v-for="review in reviewsData.getReviews" :key="review.id" >
                  <div class="card text-center">
                    <div class="card-body">
                      <div class="title-svg"> 
                        <h3 class="card-title"> {{ review.name }}</h3> 
                        <div>
                            <svg @click="editReviews(review.email, review.id, review.name)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            <svg @click="deleteReview(review.email, review.id)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                        </div>
                      </div>
                      <p class="card-text"> {{ review.opinion }}</p>
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
    width: 120%;
    border-radius:10px;
    border: 1px solid $blueDark;
  }

  .card-title{
    font-size: 1.5rem;
    padding: 1rem;
  }

  .title-svg{
   display: grid;
   grid-template-columns: 3fr 1fr;
  }
  .opinion{
    font-weight: 700;
  }
  .card-text{
    font-size: 1rem;
    padding: 0rem 0.7rem 1rem 0.7rem;
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

   svg{
    width: 13%;
    margin-top: 1rem;
    margin-right: 0.7rem;

   }

   @include media-breakpoint-down(lg) {
    input{
    width: 20px;
    
   }
  }
  </style>