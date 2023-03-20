import axios from 'axios'
import {ref} from 'vue'

async function getData(){

    let isError = false
    let isLoading = true 

    const prodts= {
        wheat : ref(null), 
        sugar : ref(null),
        cotton : ref(null),
        coffee : ref(null),
        corn : ref(null),
      
      }
      
      
      const url={
        wheat: "https:www.alphavantage.co/query?function=WHEAT&interval=monthly&apikey=demo",
        sugar: "https://www.alphavantage.co/query?function=SUGAR&interval=monthly&apikey=demo",
        corn: "https://www.alphavantage.co/query?function=CORN&interval=monthly&apikey=demo",
        cotton: "https://www.alphavantage.co/query?function=COTTON&interval=monthly&apikey=demo",
        coffee: "https://www.alphavantage.co/query?function=COFFEE&interval=monthly&apikey=demo"
      }
    
    for (let clave in url){
        try{
            let response = await axios.get(url[clave]);
            prodts[clave] = await response.data
           
        }catch (error) {
            console.log(error);
            isError = true
        }
    }
    isLoading = false

    return{
        isError, isLoading, prodts, url
    }
     
  }


export default {getData} 



