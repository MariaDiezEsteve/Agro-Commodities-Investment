<template>
  <Form class="black" @submit.prevent>
     <div class="form-card " >
       <div class="formTitle card-body">
         <h5 class="card-title">Contact Form</h5>
         <p class="card-text">
           If you want to contact us you can do it with this contact form
         </p>
       </div>
 
       <div class="cuadro row">
         <div class=" mt-4 mr-1 col-6 px-5">
           <input 
             v-model="formDataContact.name"
             type="text"
             class="form-control p-2"
             placeholder="Enter your name"
           />
           <span v-if="v$.name.$error" >You need to fill with your name</span>
         </div>
         <div class="  mr-1 mt-4 col-5">
           <input
           v-model="formDataContact.email" 
             type="text"
             class="form-control p-2"
             placeholder="Enter your email address"
           />
           <span v-if="v$.email.$error" >You need to fill with your email</span>
         </div>

         <div class="mb-4 ps-5 col-11">
           <label for="exampleFormControlTextarea1" class="form-label"></label>
           <textarea
           v-model="formDataContact.msg"
             class="form-control"
             placeholder="Type here your message"
             id="exampleFormControlTextarea1"
             rows="3"
           ></textarea>
           <span v-if="v$.msg.$error" >You need to fill with your opinion. It needs to have a minimum of 10 characters</span>
         </div>

         <div class="buttones">
           <a href="#" class="btn btn-primary" @click="onSubmit">Send Message</a>
         </div>
       </div>
     </div>
   </Form>  
   <!-- FORMULARIO -->
 </template>

  <script setup>
   import { reactive, computed } from "vue";
   import { useVuelidate } from '@vuelidate/core'
   import { required, email, minLength } from "@vuelidate/validators"
   const formDataContact = reactive({
    name: "",
    email: "",
    msg: ""
  })
  const rules = computed(() => {
  return {
      name: {required,  minLength:  minLength(2)},
      email: { required, email },
      msg: {required,   minLength:  minLength(10)}
}
}) 
const v$ = useVuelidate(rules, formDataContact)
 
 
   const onSubmit = async ()=> {
    const result = await v$.value.$validate()
    if(result){
      alert("Thanks for yout message. We will contact you soon. ")
    }
   }
 
 </script> 
 
 <style lang="scss" scoped>
 
 @import "@/assets/Sass/--parcial.scss";

.buttones {
display:flex;
justify-content: center;
a {
 @include button(
   $bg-color: $blueDark,
   $wth: 11rem,
   $colorletra: $white_color,
 ); 
}
}

 .cuadro { 
   // border: solid grey  0.2px; 
   box-shadow: 0px 0px 1px 1px black;
   //align-items: center;
   //justify-content: center;
     };
.card-body {
 text-align: center;
 margin-top: 3rem;
}

.form-card {
 justify-self: center;
} 
span {
color: $red;
font-size: 0.7rem;
}
   </style>