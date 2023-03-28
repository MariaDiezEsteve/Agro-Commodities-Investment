<template>
  
    <div class="form-card m-4">
      <div class="card-body">
        <h5 class="card-title">Contact Form</h5>
        <p class="card-text">
          If you want to contact us you can do it with this contact form
        </p>
      </div>

      <div class="row">
        <div class="col-4 px-5">
          <input
            type="text"
            class="form-control p-2"
            placeholder="Enter your name"
          />
        </div>
        <div class="col-6">
          <input
            type="text"
            class="form-control p-2"
            placeholder="Enter your email address"
          />
        </div>

        <div class="mb-3 ps-5 col-10">
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
  a {
    @include button(
      $bg-color: $blueDark,
      $wth: 11rem,
      $colorletra: $white_color,
    );
  }
}
</style>

