<template>

    <h1>HOLA</h1>
<!-- 
<div class="dropdown" >
 
 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Ask a question</button>
  
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2" >
      <li v-for="question in questions.getQuestions" :key="question.id">
         <p 
         class="dropdown-item" 
         type="button" 
         @click="showAnswer(question.id)"
         >{{ question.question }}</p>       
         <div
          class="card-body"
          v-show="showAnswer"
          >
    {{ question.answer }}
   
    </div>
      </li>
    </ul>
</div> -->

<div v-for="question in questions.getQuestions" :key="question.id">
  <button @click="showAnswer(question.id); showAns=true">{{ question.question }} </button>
  <p v-show="showAns">
    {{ question.answer}}
  </p>

</div>
  


  </template>
  
  <script setup>
    import {defineProps, ref} from 'vue';
    

 const prop = defineProps({
      questions: Object
    })

const showAns = ref(false)

function showAnswer(id){
  console.log("hjk",prop.questions)
  if(id == prop.questions.id){
    showAns.value = true
  }
}
    

</script>
  
  <style lang="scss" scoped>
    @import "@/assets/Sass/--parcial.scss";

  
  </style>