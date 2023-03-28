<template>
  
    <div class="form-card m-4">
      <div class="card-body">
        <h5 class="card-title">Contact Form</h5>
        <p class="card-text">
          If you want to contact us you can do it with this contact form
        </p>
      </div>

      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your email address"
          />
        </div>

        <div class="mb-3">
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

<<<<<<< HEAD
  </script>
  
  <style lang="scss" scoped>
<<<<<<< HEAD
    @import "@/assets/Sass/--parcial.scss";

=======
  @import "@/assets/Sass/--parcial.scss";
=======
<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";
>>>>>>> daa27a38b839d754d46af2d2e402f67d732b774b

.buttones {
  a {
    @include button(
      $bg-color: $blueDark,
      $wth: 11rem,
      $colorletra: $white_color,
    );
  }
}



<<<<<<< HEAD
  
>>>>>>> e2bf79586cd4cd231fc07f84f0df2f8e85dc5da7
  
  </style>
=======
</style>
>>>>>>> daa27a38b839d754d46af2d2e402f67d732b774b
