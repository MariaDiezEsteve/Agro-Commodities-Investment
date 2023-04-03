<template>

  <ul class="d-flex flex-column">
    <li
      class="d-flex flex-row justify-content-start"
      v-for="(but, prop, index) in buts"
      :key="but"
      @click="getButtonSelected(index)"
    >
      <label class="off d-flex flex-row aling-items-center" :for="index">
        <img :src="images[index]" style="margin-top: 0.3rem;" />
        <p style=" width: 3rem;margin-right: 1.3rem; margin-top: 0.3rem;">{{ prop }}</p> 
        <input
          style="width: 1rem"
          :id="index"
          type="checkbox"
          checked
        />
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref, defineEmits} from "vue";

let prod = ref("wheat");
let buts = {
  wheat: ref(true),
  sugar: ref(true),
  cotton: ref(true),
  coffee: ref(true),
  corn: ref(true),
};

let images = [
  require("@/assets/images/IconosUserView/trigoBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/azucarBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/algodonCapBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/cafeBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/maizBlanco-removebg-preview.png"),
];

 const emit = defineEmits(["buttonSelected"])
 

let getButtonSelected = (index) => {
  prod.value = Object.keys(buts)[index];

  if (buts[prod.value].value == false) {
    buts[prod.value].value = true;
  } else {
    buts[prod.value].value = false;
  }
  emit("buttonSelected",index) 
 
};
</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.off {
  @include button($bg-color: $blueDark, $wth: 10rem, $colorletra: $white_color);
  display: flex;
  margin-left: 3rem;
  margin-top: 1.8rem;
  margin-bottom: 1.8rem;
}

h1 {
  margin-left: 3rem;
}

img {
  height: 2rem;
  align-self: start;
  display: flex;
  flex-direction: row;
  padding-right: 1rem;
  padding-left: 1rem;
}
</style>
