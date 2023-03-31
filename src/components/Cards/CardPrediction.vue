<template>
  <h1>¿Any doubt?</h1>

  <div class="dropdown d-flex flex-rowbn">
    <button
      class="button dropdown-toggle"
      type="button"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ quest }}
    </button>
    <ul class="dropdown-menu px-2 ml-20" aria-labelledby="dropdownMenu2">
      <li v-for="question in questions.getQuestions" :key="question.id">
        <p class="dropdown-item" type="button" @click="showAnswer(question.id)">
          {{ question.question }}
        </p>
      </li>
    </ul>

    <div v-if="click == true">
      <div class="card mx-5">
        <div class="card-body">
          <h5 class="card-title mx-2 my-2">
            {{ questions.getQuestions[idData].answer }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

let prop = defineProps({
  questions: Object,
});

// console.log("algo para Zu", prop.questions.getQuestions.rawvalue)
// console.log("algo para Mu", prop.questions.getQuestions[0])
// console.log("algo para", prop.questions)

let click = ref(false);

let quest = ref(prop.questions.getQuestions[0].question);

let idData = ref(0);

function showAnswer(id) {
  idData.value = id - 1;
  click.value = true;
  quest.value = prop.questions.getQuestions[idData.value].question;

  console.log("imprime aquí", idData.value);
  console.log("imprime", click);
}
</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

button {
  @include button($bg-color: $blueDark, $wth: 38rem, $colorletra: $white_color);
  // @include drop($wth: 14rem);
}
li {
  height: 2rem;
}

.card {
  width: 40rem;
  background-color: lightblue;
}

.dropdown, h1 {
  margin-left: 3rem;
}
</style>
