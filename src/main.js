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
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faFacebookMessenger,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faYoutube,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFacebookF,
  faFacebookMessenger,
  faWhatsapp,
  faTwitter,
  faInstagram,
  faYoutube,
  faGooglePlay
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
