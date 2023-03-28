import axios from 'axios'
import {ref} from 'vue'

async function getReviewsInfo(){
    let isError = false
    let isLoading = true 

    const getReviews = ref(null)

    try{
        const response = await axios.get(" http://localhost:3000/reviews")
        getReviews.value = await response.data
        
    }catch (error) {
        console.log(error);
        isError = true
    }

    isLoading = false
    
    return{
        isError, isLoading, getReviews
    }
}

export default {getReviewsInfo} 