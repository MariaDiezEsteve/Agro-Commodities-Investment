import axios from "axios"
import { ref } from "vue"


    const wheat = ref(null)
  

    const getData = async () => {
        const response = await axios.get("https://www.alphavantage.co/query?function=WHEAT&interval=monthly&apikey=demo")
        wheat.value = await response.data
        console.log("ddd",wheat.value)
    }
    getData();