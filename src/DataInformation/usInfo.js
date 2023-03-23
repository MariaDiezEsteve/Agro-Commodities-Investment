import axios from 'axios'
import {ref} from 'vue'

async function getInfo(){
    let isError = false
    let isLoading = true 

    const getNews = ref(null)

    try{
        const response = await axios.get("http://localhost:3000/blogNews")
        getNews.value = await response.data
        
    }catch (error) {
        console.log(error);
        isError = true
    }
    
    isLoading = false
    
    return{
        isError, isLoading, getNews
    }

}

export default {getInfo} 