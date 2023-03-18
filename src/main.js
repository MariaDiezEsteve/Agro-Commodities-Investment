import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* La parte de Boostrap da errores por lo que se ha comentado*/

// import * as bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
// createApp(App).use(router, bootstrap).mount('#app')

createApp(App).use(router).mount('#app')

// QT70XFV8RWVYA560

// import axios from "axios"
// import { ref } from "vue"

// export default{
// setup(){
//     const wheat = ref(null)
//     console.log(wheat)

//     const getData = async () => {
//         const response = await axios.get("https://www.alphavantage.co/query?function=SUGAR&interval=monthly&apikey=demo")
//         wheat.value = await response.data
//     }
    
//     getData();
    
    
//     return{
//         wheat
//     }
// }
// }


