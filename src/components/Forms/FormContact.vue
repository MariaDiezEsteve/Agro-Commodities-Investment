<template>
 <div class="black" @submit.prevent="onSubmit">
    <div class="form-card " >
      <div class="formTitle card-body">
        <h5 class="card-title">Contact Form</h5>
        <p class="card-text">
          If you want to contact us you can do it with this contact form:
        </p>
      </div>

      <div class="cuadro row">
        <div class=" mt-4 mr-1 col-6 px-5">
          <input 
            v-model="name"
            type="text"
            class="form-control p-2"
            placeholder="Enter your name"
          />
        </div>
        <div class="  mr-1 mt-4 col-lg-6 col-md-6 px-3">
          <input
          v-model="email"

            type="text"
            class="form-control p-2"
            placeholder="Enter your email address"
          />
        </div>
      </div>

        <div class="formTextDiv mb-4 ps-5 col-lg-11">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
          v-model="msg"
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

  <pre>
    nombre: {{ name }}
  </pre>
 
  <!-- FORMULARIO -->
</template>

 <script setup>
  import { ref } from "vue";
 const name = ref("")
 const email = ref("")
 const msg = ref("")

//  const onSubmit= ()=> {
//   const form = {
//     name: name.value,
//     message:msg.value,
//     email:email.value
//   }
//  }

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
   
   .card-body >p {
    margin-bottom: 1.2rem;
   }

   .card-title {
    font-weight: bold;
   }

@include media-breakpoint-down(sm) {
  .formDiv {
  width: 18rem;
  //margin: 0 auto; 
}

.inputDiv {
  display: block;
}

.input1 {
  margin-left: -0.8rem;
}
.formTextDiv {
  
  margin-left: -1.7rem;

}
}
@include media-breakpoint-down(lg) {
  .input1 {
  width: 17.5rem;
  margin-left: -0.5rem;
}
.formTextDiv {
  
  margin-left: -1.5rem;

}

}

      </style>

