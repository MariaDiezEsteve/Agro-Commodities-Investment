//Para Fontanwsome poner en consola:
// $ npm i --save @fortawesome/fontawesome-svg-core
// $ npm i --save @fortawesome/free-solid-svg-icons
// $ npm i --save @fortawesome/vue-fontawesome@prerelease

import Vue from "vue";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faHome,
  faBuilding,
  faImages,
  faAt,
  faDownload,
  faCode,
  faCogs,
  faBell,
  faPalette,
  faLock,
  faCog,
  faListUl,
  faFileAlt,
  faListAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faHome, 
  faBuilding, 
  faImages, 
  faAt,
  faDownload,
  faCode,
  faCogs,
  faBell,
  faPalette,
  faLock,
  faCog,
  faListUl,
  faFileAlt,
  faListAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);