<template>
  <div>
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
    <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!reviewsData.isError && !isLoading" >
            <form @submit.prevent>
              <div>
              <label for="name">Name: </label>
              <input type="text" id="name" v-model="formData.name"  required/> <!-- @keyup="guanaja" -->
              <!-- <p v-if="isAlert == false" class="alert">You need to fill this input with your name</p> -->
            </div>
            <div>
              <label for="email">Email: </label>
              <input type="text" id="email" v-model="formData.email" required/>
              <!-- <p v-if="isAlert" class="alert">You need to fill this input with your email</p> -->
            </div>
            <div>
              <label for="opinion">Opinion: </label>
              <input type="text" id="opinion" v-model="formData.opinion" required/>
              <!-- <p v-if="isAlert" class="alert">You need to fill this input with your opinion</p> -->
            </div>

            <input type="submit" value="Create Review" @click="emptyLabel"/> 
            <button @click="reviews">eee</button> 
            <!-- Falta poner una función aquí para incluir los datos -->
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

 async function reviews () {
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

  </style>