import Vue from "vue";
import Dev from "./serve.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
  faPinterestSquare,
  faGitSquare,
  faBlogger,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPoo,
  faLink,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
  faPinterestSquare,
  faGitSquare,
  faBlogger,
  faEnvelope,
  faTelegram,
  faPoo,
  faLink,
  faPhoneSquareAlt
);

Vue.component("fa-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount("#app");
