<template>
    <div class="reviews">
      <h1>Reviews</h1>
      <div class="card text-center" v-for="review in reviews.getReviews" :key="review.id" >
        <div class="card-body">
          <h3 class="card-title"> {{ review.name }}</h3>
          <p class="opinion">Review:</p>
          <p class="card-text"> {{ review.opinion }}</p>
          <button @click="getDataForm(review.id)">Edit Review</button>
          <div class="reviews" v-show="hide">
              <img v-if="reviews.isError" src="@/assets/images/error.jpeg" alt="error">
              <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
                  <div v-if="!reviews.isError && !isLoading">
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
                      <input type="submit" value="Create Review" @click="emptyEditLabel"/> 
                      <button @click="eee">eee</button> 
                      <!-- Falta poner una función aquí para incluir los datos -->
                      </form>
                  </div>
            </div>
          <button>Delete Review</button>
        </div>
      </div>   
    </div>
  </template>
    
    <script setup>
    import {defineProps, ref, reactive } from 'vue'
    import axios from 'axios'
  
    
    const prop = defineProps({
      reviews: Object
    });
  
  
    // EDIT REVIEW
    let isError = false
    const hide = ref(false)
  
    // Para mostrar el el formulario y recoger el id
    const getDataForm = (id) => {
      hide.value = true
      if(id == prop.reviews.getReviewsInfo().id){
        
        const editReview = async () => {
          try{
              await axios.push("http://localhost:3000/reviews", {
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
      }
    }
  
    const formData = reactive({
      name: "",
      email: "",
      opinion: ""
    })
  
    const emptyEditLabel = () => {
      if(formData.name != "" && formData.email != "" && formData.opinion != "") { 
        editReview()
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
    </style>