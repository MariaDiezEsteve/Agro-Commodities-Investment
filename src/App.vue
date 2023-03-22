<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/blog">Blog</router-link>
  </nav>
  <router-view/>

</template>

<style lang="scss">
@import '~@fortawesome/fontawesome-free/css/all.css';
@import '~@fortawesome/fontawesome-free/css/brands.css';
@import '~@fortawesome/fontawesome-free/css/solid.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
