<template>
  <h1>Invest in your life !</h1>

  <ul class="d-flex flex-column">
    <li
      class="d-flex flex-row justify-content-start"
      v-for="(but, prop, index) in buts"
      :key="but"
      @click="buttonSelected(index)"
    >
      <label class="off d-flex flex-row aling-items-center" :for="index">
        <img :src="images[index]" style="margin-top: 0.3rem" />
        <p>{{ prop }}</p>
        <input :id="index" type="checkbox" />
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref, defineEmits } from "vue";

let prod = ref("wheat");
let buts = {
  wheat: ref(false),
  sugar: ref(false),
  corn: ref(false),
  cotton: ref(false),
  coffee: ref(false),
};

let images = [
  require("@/assets/images/IconosUserView/trigoBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/azucarBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/algodonCapBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/cafeBlanco-removebg-preview.png"),
  require("@/assets/images/IconosUserView/maizBlanco-removebg-preview.png"),
];

const emit = defineEmits(["buttonsValues"]);

let buttonSelected = (id) => {
  console.log("id", id);
  prod.value = Object.keys(buts)[id];
  console.log("prod.value ", prod.value);

  if (buts[prod.value].value == false) {
    buts[prod.value].value = true;
  } else {
    buts[prod.value].value = false;
  }

  emit("buttonsValues", buts);
};
</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.off {
  @include button($bg-color: $blueDark, $wth: 10rem, $colorletra: $white_color);
  display: flex;
  margin-left: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
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

p {
  width: 3rem;
  margin-right: 1.3rem;
  margin-top: 00.3rem;
}

input{
  width: 1rem;
}
</style>


