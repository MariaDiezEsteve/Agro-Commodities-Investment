<template>

  <h2 class="mt-5">¿Any doubt?</h2>
  <img
    v-if="questions.isError"
    src="@/assets/images/error.jpeg"
    alt="error"
  />
  <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading" />

  <div v-if="!questions.isError && !isLoading">
    <div class="dropdown d-flex flex-row">
      <button
        class="button dropdown-toggle "
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
      {{quest}}
      </button>
      <ul class="dropdown-menu px-2" aria-labelledby="dropdownMenu2">
        <li v-for="question in questions.getQuestions" :key="question.id">
          <p class="dropdown-item " type="button" @click="showAnswer(question.id)">
            {{question.question }}
          </p>
        </li>
      </ul>

      <div v-if="click == true">
        <div class="card mx-5">
          <div class="card-body">
            <h5 class="card-title  mx-2 my-2">

              {{ questions.getQuestions[idData].answer }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from "vue";
import predictionInfo from "@/DataInformation/predictionInfo";


// let prop =defineProps({
//   questions: Object,
// });


let isLoading = ref(true);

let questions = ref(
  onMounted(async () => {
    questions.value = await predictionInfo.getAskQuestion();

    if (!questions.value.isLoading) {
      isLoading.value = false;
    }
  })
);


let click = ref(false);

// let quest = ref(questions.value.getQuestions[0].question)

let quest = ref("Ask a Question")


let idData = ref(0);

function showAnswer(id) {
  idData.value = id - 1;
  click.value = true;
  quest.value = questions.value.getQuestions[idData.value].question
}
</script>




<style lang="scss" scoped>
@import "@/assets/Sass/--parcial.scss";

button {
  @include button($bg-color: $blueDark, $wth: 38rem, $colorletra: $white_color);
  margin-bottom: 13rem;
  margin-top: 2rem;
}
li {
  height: 2rem;
}


  .card{
    width: 40rem;
    background-color: lightblue
  }
</style>
