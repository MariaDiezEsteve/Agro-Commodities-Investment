import { createApp } from 'vue'

import App from './App.vue'
import router from './router' 

// Importar materialLize
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

/* debes poner en tu consola npm i bootstrap y no te dara error*/
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

//Si da error, incluir esta linea de codigo en la consola npm i vue-sidebar-menu --save
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
createApp(App).use(router,bootstrap,VueSidebarMenu).mount('#app')

// QT70XFV8RWVYA560  // esto es la clave para hacer mas peticiones a la api




