<template>
  <div class="reviews">
      <img v-if="isError" src="@/assets/images/error.jpeg" alt="error">
        <div v-if="!isError" >
            <form @submit.prevent="createReview">
              <div>
              <label for="name">Name</label>
              <input type="text" id="name" v-model="formData.name" />
              <p>{{ formData.name }} sssssss</p>
            </div>
            <div>
              <label for="email">Email</label>
              <input type="text" id="email" v-model="formData.email" />
            </div>
            <div>
              <label for="opinion">Opinion</label>
              <input type="text" id="opinion" v-model="formData.opinion" />
            </div>
            <button>Create Post</button>
            </form>
        </div>
    </div>
  </template>
  
  <script setup>
  import {defineProps, reactive } from 'vue'
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
 

  const createReview = async () => {
    try{
     await axios.post("http://localhost:3000/reviews", {
      name: formData.name,
      email:formData.email,
      opinion:formData.opinion
     })
        console.log("eee", formData.name)
        
    }catch (error) {
        console.log(error);
        isError = true
    }

    return{
        isError
    }
    
  }

  createReview()

  </script>
  
  <style lang="scss" scoped>
   @import "@/assets/Sass/--parcial.scss";


  </style>