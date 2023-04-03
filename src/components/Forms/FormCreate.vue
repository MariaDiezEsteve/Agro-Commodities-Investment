<template>
    <div class="allForm">
    <div>
      <h2>Our Reviews</h2>
        <FormReview :reviewsData="reviewsData" :reviews="reviews"
        />
    </div>
    <img v-if="reviewsData.isError" src="@/assets/images/error.jpeg" alt="error">
    <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading">
        <div v-if="!reviewsData.isError && !isLoading" class="fahter-position">
          <h2 class="title">Create a new review</h2>
            <form @submit.prevent>
              <div class=" inputError">
              <input type="text" id="name" v-model="formData.name" placeholder="Name" /> 
               <span v-if="v$.name.$error" >You need to fill with your name</span>
            </div>
            <div class=" inputError">
              <input type="text"  placeholder="Email" id="email" v-model="formData.email"/>
              <span v-if="v$.email.$error" >You need to fill with your email</span>
            </div>
            <div class=" inputError">
              <textarea type="text" placeholder="Please, enter your opinion about the website" id="opinion" v-model="formData.opinion" cols="20" rows="5" ></textarea>
              <span v-if="v$.opinion.$error" >You need to fill with your opinion. It needs to have a minimum of 10 characters</span>
            </div>
            <input class="submit" type="submit" value="Create Review" @click="emptyLabel"/> 
            </form>
        </div>
    </div>

  </template>
  
  <script setup>
  import { reactive, ref, onMounted, computed} from 'vue'
  import axios from 'axios'
  import FormReview from '@/components/Forms/FormReview.vue';
  import reviewsInfo from '@/DataInformation/reviewInfo'
  import { useVuelidate } from '@vuelidate/core'
  import { required, email, minLength } from "@vuelidate/validators"


  let isLoading = ref(true) 
  let  reviewsData = ref(onMounted(()=>{ reviews() }))

 async function reviews() {
    reviewsData.value = await reviewsInfo.getReviewsInfo()
    
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


const rules = computed(() => {
  return {
  name: {required,  minLength:  minLength(2)},
  email: { required, email },
  opinion: {required,   minLength:  minLength(10)}
}
}) 

const v$ = useVuelidate(rules, formData)
 
  // CREATE A REVIEW

  const emptyLabel = async () => {
    const result = await v$.value.$validate()
      if(result){
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

  span {
    color: $red;
    font-size: 0.7rem;
   }

  .inputError{
   display: grid;
  }

  h2{
    margin: 1rem;   
   }

 form{
      width: 75%;
      padding:16px;
      border-radius:10px;
      border: 1px solid $blueDark;
      text-align: center;
      margin-left: 1rem;
      margin-top: 2rem
    }

   .title{
    margin: 1rem;
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

   .allForm{
    display: grid;
    grid-template-columns: 1fr 1fr;
   }

   .fahter-position{
    position: relative;
   }

    // RESPONSIVE TABLET

   @include media-breakpoint-down(lg) {
  
    h2 {
      font-size: 2rem;
    }
    .allForm{
      display: block;
   }
   .fahter-position{
    position: static;
   }
   form{
      width: 100%;
      padding: 3px;
      margin-left: 0rem;
    }
    .submit{
        @include button($bg-color: $blueDark, $wth: 14rem, $colorletra: $white_color);
        font-size: 1.2rem;
   }
  }

    // RESPONSIVE MOBILE

   @include media-breakpoint-down(sm){
    h2 {
      font-size: 1.2rem;
    }
    .allForm{
      display: block;
   }
   .fahter-position{
    position: static;
   }

   form{
      width: 100%;
      padding: 3px;
      margin-left: 0rem;
    }

    input, textarea{
    width:75%;
   }

   input::placeholder, textarea::placeholder{
    font-size: 0.75rem;
   }
   .submit{
        @include button($bg-color: $blueDark, $wth: 10rem, $colorletra: $white_color);
        font-size: 1.2rem;
   }




   }
  
  </style>