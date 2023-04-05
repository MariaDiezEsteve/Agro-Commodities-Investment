<template>

  <h2 class="mt-5">Any doubt?</h2>
  <img
    v-if="questions.isError"
    src="@/assets/images/error.gif"
    alt="error"
  />
  <img v-if="isLoading" src="@/assets/images/spin.gif" alt="loading" />

  <div v-if="!questions.isError && !isLoading">
    <div class="dropdown d-flex flex-row flex-wrap">
      <button
        class="button dropdown-toggle"
        type="button"
        id="dropdownMenuButton2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
       <p class="quest">{{ quest }}</p> 
      </button>
      <ul class="dropdown-menu px-2" aria-labelledby="dropdownMenu2">
        <li v-for="question in questions.getQuestions" :key="question.id">
          <p 
            class="dropdown-item quest"
            type="button"
            @click="showAnswer(question.id)"  
          >
<<<<<<< HEAD
          <!-- When you click the question, the id question is keeping in a variable to show the answer-->
            {{ question.question }}
=======
          {{ question.question }}
>>>>>>> b954399348ea7217b2d9028f701d7029de38872d
          </p>
        </li>
      </ul>

      <div v-if="click == true">
        <div class="card mx-5">
          <div class="card-body">
            <h5 class="card-title mx-2 my-2">
              {{ questions.getQuestions[idData].answer }}
            </h5>
            <!-- That shows the answer which is associate with the question -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import predictionInfo from "@/DataInformation/predictionInfo";

let isLoading = ref(true);

// This is the call for the api to get all the information
let questions = ref(
  onMounted(async () => {
    questions.value = await predictionInfo.getAskQuestion();

    if (!questions.value.isLoading) {
      isLoading.value = false;
    }
  })
);

let click = ref(false);


// This is the previews button 
let quest = ref("Ask a Question");

let idData = ref(0);

// This is the function which keeps the id question and show the answer joint to question

function showAnswer(id) {
  idData.value = id - 1;
  click.value = true;
  quest.value = questions.value.getQuestions[idData.value].question; // This show the question in the button
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

.card {
  width: 22rem;
  background-color: lightblue;
}

.dopdown, h1 {
  margin-left: 3rem;
}

@include media-breakpoint-down(lg) {
  .card {
  width: 100%;
  margin-left: 0rem !important;
  margin-right: 0rem !important;
  margin-bottom: 2rem;
}



button {
  margin-bottom: 2rem;
}
}

@include media-breakpoint-down(sm) {

  .quest{
  font-size: 0.7rem !important;
  //width: 10rem;
}

button {
  height: 1.5rem;
}

}


</style>
