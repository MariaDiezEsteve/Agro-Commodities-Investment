import axios from 'axios'
import {ref} from 'vue'


async function getAskQuestion(){
    let isError = false
    let isLoading = true 

    const getQuestions = ref(null)

    try{
        const response = await axios.get("http://localhost:3000/askQuestion")
        getQuestions.value = await response.data

    }catch (error) {
      console.log(error);
         isError = true
    }
         isLoading = false

    return {isError, isLoading, getQuestions}

}

export default {getAskQuestion} 