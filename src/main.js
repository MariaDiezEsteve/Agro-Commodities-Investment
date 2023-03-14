import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router, bootstrap).mount('#app')
