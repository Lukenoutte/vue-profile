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
// Import vue component
import component from "@/vue-profile.vue";

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/ (() => {
  // Get component instance
  const installable = component;

  // Attach install function executed by Vue.use()
  installable.install = (Vue) => {
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
    Vue.component("VueProfileCard", installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
