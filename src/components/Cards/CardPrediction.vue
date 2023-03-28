<template>
  <h1>HOLA</h1>

  
  <div class="dropdown">
    <button
      class="button dropdown-toggle"
      type="button"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Ask a question
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
      <li v-for="question in questions.getQuestions" :key="question.id">
        <p class="dropdown-item" type="button" @click="showAnswer(question.id)">
          {{ question.question }}
          {{ question.id }}
        </p>
      </li>
    </ul>

    <div v-if="click == true">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            {{ questions.getQuestions[ifff].answer }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps({
  questions: Object,
});

// console.log("algo para Zu", prop.questions.getQuestions.rawvalue)
// console.log("algo para Mu", prop.questions.getQuestions[0])
// console.log("algo para", prop.questions)

let click = ref(false);

let ifff = ref(0);

function showAnswer(id) {
  ifff.value = id;
  click.value = true;

  console.log("imprime aquí", ifff.value);
  console.log("imprime", click);
}
</script>

<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

button {
    @include button ($bg-color:$blueDark, $wth: 14rem, $colorletra:$white_color);
}

</style>
