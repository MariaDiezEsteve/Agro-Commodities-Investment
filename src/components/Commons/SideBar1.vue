<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
        <router-link to="/" class="d-flex flex-column align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <img src="@/assets/images/logoGif.gif" style="width:50px;height:50px" alt="">
            <h2 id="h2_nav">RawInvesting</h2>
        </router-link>
    
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
            <img src="@/assets/images/home.svg" style="width:2rem;height:2rem" alt="Photo Home">
            Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
            <img src="@/assets/images/chart.svg" style="width:2rem;height:2rem" alt="Photo Chart">
            Product Details
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
            <img src="@/assets/images/user_costumizer.svg" style="width:2rem;height:2rem" alt="Photo User Costumizer">
          User Customize
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
            <img src="@/assets/images/blog.svg" style="width:2rem;height:2rem" alt="Photo Blog">
          Blog
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
            <img src="@/assets/images/contact.svg" style="width:2rem;height:2rem" alt="Photo Contact Us">
          Contact Us
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup>

</script>



<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";

  


</style>