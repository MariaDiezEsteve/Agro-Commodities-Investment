<template>
  <div>
    <h1 class="title-h1">Reviews</h1>
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
    <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!reviewsData.isError && !isLoading" >
          <h3 class="title">Create a new review</h3>
            <form @submit.prevent>
              <div>
              <input type="text" id="name" v-model="formData.name" placeholder="Name" required/> <!-- @keyup="guanaja" -->
              <!-- <p v-if="isAlert == false" class="alert">You need to fill this input with your name</p> -->
            </div>
            <div>
              <input type="text"  placeholder="Email" id="email" v-model="formData.email" required/>
              <!-- <p v-if="isAlert" class="alert">You need to fill this input with your email</p> -->
            </div>
            <div>
              <textarea type="text" placeholder="Please, enter your opinion about the website" id="opinion" v-model="formData.opinion" cols="20" rows="5" required ></textarea>
              <!-- <p v-if="isAlert" class="alert">You need to fill this input with your opinion</p> -->
            </div>
            <input class="submit" type="submit" value="Create Review" @click="emptyLabel"/> 
        
            </form>
        </div>
    </div>
    <div>
        <FormReview :reviewsData="reviewsData" :reviews="reviews"
        />
    </div>


  </template>
  
  <script setup>
  import { reactive, ref, onMounted } from 'vue'
  import axios from 'axios'
  import FormReview from '@/components/Forms/FormReview.vue';
  import reviewsInfo from '@/DataInformation/reviewInfo'


  let isLoading = ref(true) 
  let  reviewsData = ref(onMounted(()=>{ reviews() }))



 async function reviews() {
    reviewsData.value = await reviewsInfo.getReviewsInfo()

    // console.log("data", reviewsData.value)
    
    if( !reviewsData.value.isLoading){
      isLoading.value = false
    }
    return reviewsData.value
  }

 
  const formData = reactive({
    name: "",
    email: "",
    opinion: ""
  })

  let isError = false

 
  // let isAlert = ref(false)

  // CREATE A REVIEW

  const emptyLabel = () => {
    if(formData.name != "" && formData.email != "" && formData.opinion != "") { 
      createReview() 
    }
    
}

  const createReview = () => {
        try{
            axios.post("http://localhost:3000/reviews", {
              name: formData.name,
              email:formData.email,
              opinion:formData.opinion 
            }) 
            reviews()
 
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

   .alert {
    color: $red;
    font-size: 0.7rem;
    padding-left: 4rem;
   }
   .title-h1{
      margin: 1rem;   
   }
    form{
      width:300px;
      padding:16px;
      border-radius:10px;
      margin:auto;
      background-color: $greyLight;
      text-align: center;
    }

   .title{
    margin: 1.5rem;
    text-align: center;
   }

   input, textarea{
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    
   }

   input::placeholder, textarea::placeholder{
    color: $blueDark;
    text-align: center;
   }

  .submit{
    
        @include button($bg-color: $blueDark, $wth: 14rem, $colorletra: $white_color);
        font-size: 1.2rem;

   }

  </style>