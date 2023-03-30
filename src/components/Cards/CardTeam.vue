<template >
  <div class="card-grid">
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
  {
    id: "commodities",
    name: "Zuceles Guedest",
    discripion: "Hello, how are you?",
    src: "https://i.pinimg.com/originals/d0/e6/59/d0e659125145e110eee3d64013050812.png",
    alt: "commodities",
  },
  {
    id: "commodities",
    name: "Lucas Ibar",
    discripion: "Hello, how are you?",
    src: "https://img.freepik.com/vector-premium/caracter-chico-avatar-internet_24877-17028.jpg?w=2000",
    alt: "commodities",
  },
  {
    id: "commodities",
    name: "Jessica Mosteiro",
    discripion: "Hello, how are you?",
    src: "https://i.pinimg.com/originals/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f.jpg",
    alt: "commodities",
  },
  {
    id: "commodities",
    name: "Maria Diaz",
    discripion: "Hello, how are you?",
    src: "https://i.pinimg.com/originals/42/ae/ce/42aece2eb0533ac8656fa06945f56081.png",
    alt: "commodities",
  },
  {
    id: "commodities",
    name: "Gorka",
    discripion: "Hello, how are you?",
    src: "https://img.freepik.com/vector-premium/ilustracion-joven-estilo-hombre-guapo-barba-dibujos-animados-avatar-perfil-hipster_15870-758.jpg?w=2000",
    alt: "commodities",
  },
];
</script>
  
  <style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.card-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.imagtexto {
  display: flex;
  flex-direction: row;
}
.card-img {
  width: 5rem;
  border-radius: 100%;
  margin-right: 1rem;
  
}


</style>