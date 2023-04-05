<template>
  <ul class="d-flex flex-row flex-wrap">
    <li
      class="d-flex flex-row justify-content-start"
      v-for="(but, prop, index) in buts"
      :key="but"
      @click="getButtonSelected(index)"
    >
      <label class="off d-flex flex-row aling-items-center" :for="index">
        <img :src="images[index]" />
        <p>{{ prop }}</p>
        <input :id="index" type="checkbox" checked />
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref, defineEmits } from "vue";

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

// When the user click in the button, this keep the index to send to the parent view like a emit in the following funtion

const emit = defineEmits(["buttonSelected"]);

let getButtonSelected = (index) => {
  prod.value = Object.keys(buts)[index];

  if (buts[prod.value].value == false) {
    buts[prod.value].value = true;
  } else {
    buts[prod.value].value = false;
  }
  emit("buttonSelected", index);
};
</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

.off {
  @include button($bg-color: $blueDark, $wth: 10rem, $colorletra: $white_color);
  display: flex;
  margin-left: 3rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
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
  margin-top: 0.3rem;
}

p {
  width: 3rem;
  margin-right: 1.3rem;
  margin-top: 00.3rem;
}

input {
  width: 1rem;
}

@include media-breakpoint-down(lg) {

  .off {
    @include button($bg-color: $blueDark, $wth: 6.2rem, $colorletra: $white_color);
    margin-left: 0.3rem;
    padding-right: 0.2rem;
  }

  p{
    font-size: 1rem;
    margin-right: 0.3rem;
  }

  img{
    padding-left: 0rem;
    padding-right: 0rem;
  }

}

@include media-breakpoint-down(md) {

  p{
    display: none;
  }
  h1{
    font-size: 1.4rem;
  }

  .off{
    width: 3rem;
  }
}

</style>
