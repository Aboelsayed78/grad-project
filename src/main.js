import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/_reset.scss";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "normalize.css";
import "@fortawesome/fontawesome-free";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faVoteYea,
  faPlaneDeparture,
  faColumns,
  faThumbsUp,
  faThumbsDown,
  faMapMarkerAlt,
  faAngleDoubleDown,
  faHeart,
  faEye,
  faCoins,
  faBusAlt,
  faBuilding,
  faClock,
  faUtensils,
  faExternalLinkAlt,
  faFilter,
  faStar,
  faShip,
  faTree,
  faUmbrellaBeach,
  faBriefcaseMedical,
  faQuran,
  faArchway,
  faTags,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import{
  faCalendar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faFacebookMessenger,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faYoutube,
  faGooglePlay,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebookF,
  faFacebookMessenger,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faYoutube,
  faGooglePlay,
  faVoteYea,
  faPlaneDeparture,
  faColumns,
  faThumbsUp,
  faThumbsDown,
  faMapMarkerAlt,
  faAngleDoubleDown,
  faHeart,
  faEye,
  faCoins,
  faBusAlt,
  faBuilding,
  faClock,
  faUtensils,
  faExternalLinkAlt,
  faCalendar,
  faFilter,
  faStar,
  faShip,
  faTree,
  faUmbrellaBeach,
  faBriefcaseMedical,
  faQuran,
  faArchway,
  faTags,
  faPlus,
  faTelegramPlane,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
