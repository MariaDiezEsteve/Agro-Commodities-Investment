<template>
    <nav class="d-flex flex-column flex-shrink-0 p-3 text-white">
      <img src="@/assets/images/menu.svg" style="width:2rem;height:2rem; margin-left: 13rem;">

        <router-link to="/" class="d-flex flex-column align-items-center text-white text-decoration-none">
            <img id="logo" src="@/assets/images/logoGif.gif" alt="Logo RawInvesting">
            <h2 id="h2_nav" class="mb-3">RawInvesting</h2>
        </router-link>
    
        <hr>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item" v-for='icon in icons' :key='icon.tittle'>
            <router-link :to="icon.rout" class="nav-link d-flex flex-row  align-items-center text-white mx-3 m-3 " >
              <img :src = "icon.src" class="m-2" style="width:2rem;height:2rem" :alt='icon.alt'>
              {{icon.tittle }}
            </router-link> 

          </li>
        </ul>
        <hr>
        <ul class="mt-4">
          <li v-for='policy in policies' :key='policy.tittle' >
            <router-link :to="policy.rout" class="text-white text-decoration-none mx-3 m-1 ">
              <img :src="policy.src" class="m-2" :alt='policy.alt' style="width:1rem;height:1rem">
              {{ policy.tittle }}
            </router-link>

          </li>
        </ul>
        
        <p class="mx-3 mt-4">@RawInvesting.com</p>

  </nav>
</template>
<script setup>

const icons=[
  {
    src: require('@/assets/images/home.svg'),
    tittle: "Home",
    alt:"Photo Home",
    rout:"/"
  },
  {
    src: require('@/assets/images/chart.svg'),
    tittle: "Details",
    alt:"Photo Details",
    rout:"/details"

  },
  {
    src: require('@/assets/images/user.svg'),
    tittle: "Customize",
    alt:"Photo Customize",
    rout:"/user"

  },
  {
    src: require('@/assets/images/blog.svg'),
    tittle: "Blog",
    alt:"Photo Blog",
    rout:"/blog",

    
  },
  {
    src: require('@/assets/images/contact.svg'),
    tittle: "About Us",
    alt:"Photo About Us",
    rout:"/about",

  }
]
const policies=[
  {
    src: require('@/assets/images/cookie.svg'),
    tittle: "Cookies Policy",
    alt:"Cookies Policy",
    rout:"/",
  },
  {
    src: require('@/assets/images/privacy-policy.svg'),
    tittle: "Privacy Policy",
    alt:"Privacy Policy",
    rout:"/",
  },
  {
    src: require('@/assets/images/legal-notice.svg'),
    tittle: "Legal Notice",
    alt:"Legal Notice",
    rout:"/",
  }
]
</script>



<style lang="scss" scoped>
  @import "@/assets/Sass/--parcial.scss";

  .img{
    @extend %imagen;
  }

  p{
    @include texto ($color:$greyLight,$font-size: $p);
  }

  


</style>