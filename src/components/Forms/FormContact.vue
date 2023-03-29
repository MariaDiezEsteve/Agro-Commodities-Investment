<template>
 
    <div class="form-card black container  m-4 col-auto m-5 w-50 " >
      <div class="card-body">
        <h5 class="card-title">Contact Form</h5>
        <p class="card-text">
          If you want to contact us you can do it with this contact form
        </p>
      </div>

      <div class="  cuadro row ">
        <div class=" mt-4 mr-1 col-6 px-5">
          <input
            type="text"
            class="form-control p-2"
            placeholder="Enter your name"
          />
        </div>
        <div class="  mr-1 mt-4 col-5">
          <input
            type="text"
            class="form-control p-2"
            placeholder="Enter your email address"
          />
        </div>

        <div class="mb-4 ps-5 col-11">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            placeholder="Type here your message"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <div class="buttones">
          <a href="#" class="btn btn-primary">Send Message</a>
        </div>
      </div>
    </div>
 
  <!-- FORMULARIO -->
</template>

<!-- <script setup>
const formContact = [
  {
    id: 1,
    title: "Contact Form",
    name: "",
    email: "",
    text: "",
    button: "Send Message",
  },
];
</script> -->


  
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

  
   };

.black{

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
</style>

