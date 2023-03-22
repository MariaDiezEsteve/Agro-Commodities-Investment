import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* debes poner en tu consola npm i bootstrap y no te dara error*/
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import '';

createApp(App).use(router,bootstrap,VueSidebarMenu).mount('#app')

// QT70XFV8RWVYA560  // esto es la clave para hacer mas peticiones a la api




