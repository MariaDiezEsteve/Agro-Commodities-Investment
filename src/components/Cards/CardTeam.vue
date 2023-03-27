<template>
  <div v-for="team in teams" :key="team" class="p-5" :id="team.id">
    <div class="card-teams">
      <div class="imagtexto">
        <div class="imagen-general">
          <img class="card-img" :src="team.src" :alt="team.alt" />
        </div>
        <div class="card-general">
          <h2 class="card-title">{{ team.name }}</h2>
          <p class="card-text">{{ team.discripion }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const teams = [
  {
    id: "commodities",
    name: "Nasreddin Oufallah",
    discripion: "Hello, how are you?",
    src: "https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_1280.jpg",
    alt: "commodities",
  },
];
</script>
  
  <style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";
.imagtexto {
  display: flex;
  flex-direction: row;
}
.card-img {
  width: 5rem;
  border-radius: 100%;
  
}

</style>