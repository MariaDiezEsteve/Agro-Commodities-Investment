<template>
  <div class="reviews">
      <img v-if="isError" src="@/assets/images/error.jpeg" alt="error">
        <div v-if="!isError" >
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
            </form>
        </div>
    </div>
  </template>
  
  <script setup>
  import {defineProps, reactive  } from 'vue'
  import axios from 'axios'
  defineProps({
    reviews: Object
  });

  const formData = reactive({
    name: "",
    email: "",
    opinion: ""
  })

  let isError = false
 
  // let isAlert = ref(false)

  const emptyLabel = () => {
    if(formData.name != "" && formData.email != "" && formData.opinion != "") { 
      createReview()
    }
}
  
  const createReview = async () => {
        try{
            await axios.post("http://localhost:3000/reviews", {
              name: formData.name,
              email:formData.email,
              opinion:formData.opinion 
            })  
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