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
          <a class="card-team">{{ team.enlace}}</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
  
<script setup>
const teams = [
  {
    id: "1",
    name: "Nasreddin Oufallah",
    discripion: "FullStack Development",
    src: require("@/assets/Avatar/myAvatar.png"),
    
    enlace:"https://www.linkedin.com/in/nasreddin-oufallah/",
    alt: "development",
    
  },
  {
    id: "2",
    name: "Zuceles Guedes",
    discripion: "FullStack Development",
    src: "https://i.pinimg.com/originals/d0/e6/59/d0e659125145e110eee3d64013050812.png",
    
   
    alt: "backend",
  
  },
  {
    id: "3",
    name: "Lucas Ibar",
    discripion: "FullStack Development",
    src: require("@/assets/Avatar/lucas.png"),
    enlace:"https://www.linkedin.com/in/lucas-ibar-basaldua/",
  
    alt: "frontend",
  },
  {
    id: "4",
    name: "Jessica Mosteiro",
    discripion: " FullStack Development",
    src: "https://i.pinimg.com/originals/82/ab/35/82ab3533ee71daf256f23c1ccf20ad6f.jpg",
    enlace: "https://www.linkedin.com/in/lucas-ibar-basaldua/",
   
    alt: "FullStack Developer",
  },
  {
    id: "5",
    name: "Maria Diaz",
    discripion: "FullStack Development",
    src: "https://i.pinimg.com/originals/42/ae/ce/42aece2eb0533ac8656fa06945f56081.png",
    enlace:"https://www.linkedin.com/in/mariadiezesteve/",
     
     alt: "fullstack",
  },
  {
    id: "6",
    name: "Gorka",
    discripion: "FullStack Development",
    src: "https://img.freepik.com/vector-premium/ilustracion-joven-estilo-hombre-guapo-barba-dibujos-animados-avatar-perfil-hipster_15870-758.jpg?w=2000",
    enlace:"https://www.linkedin.com/in/gorka-ibarrondo-busturia-21a317259/",
     
    alt: "commodities" ,
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