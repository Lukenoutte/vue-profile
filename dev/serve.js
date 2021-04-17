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
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faLinkedin,
  faWhatsappSquare,
  faPinterestSquare
);

Vue.component("fa-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount("#app");
