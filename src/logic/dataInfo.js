import axios from 'axios'
import {ref} from 'vue'

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


async function getData(){
    for (let clave in url){

        try{
            let response = await axios.get(url[clave]);
            isLoading = false
            prodts[clave]=response.data
            console.log("aa",clave,prodts[clave])
        }catch (error) {
            console.log(error);
            isError = true
        }
    }
 }


getData()

export default {prodts, url, isError, isLoading} 

