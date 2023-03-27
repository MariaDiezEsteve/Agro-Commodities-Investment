<template>
   <div v-for="FormContact in formContact"
   :key="FormContact.id">
 
 <!-- FORMULARIO -->

 <div>
  <div class="card-body">
    <h5 class="card-title">Contact Form</h5>
    <p class="card-text">If you want to contact us you can do it with this contact form</p>
  </div>

    <div class="row">
  <div class="col">
    <input type="text" class="form-control" placeholder="Enter your name" aria-label="Enter your name">
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Enter your email address" aria-label="Enter your email address">
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1"    class="form-label"></label>
    <textarea class="form-control" placeholder="Type here your message" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>


    <a href="#" class="btn btn-primary">Send Message</a>

  </div>
  </div>
</div>

  </template>
  


<script setup>
const formContact = [
  {
    id: 1,
    title:"Contact Form",
    name:"",
    email:"",
    text:"",
    button: "Send Message",
  },
 
];

  </script>
  
  <style lang="scss" scoped>
<<<<<<< HEAD
    @import "@/assets/Sass/--parcial.scss";

=======
  @import "@/assets/Sass/--parcial.scss";

  


 

  
>>>>>>> e2bf79586cd4cd231fc07f84f0df2f8e85dc5da7
  
  </style>