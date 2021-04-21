<script>
import Vue from "vue";
import VueProfileCard from "@/vue-profile-card.vue";

export default Vue.extend({
  name: "ServeDev",
  components: {
    VueProfileCard,
  },
});
</script>

<template>
  <div id="app">
    <vue-profile-card
      cardStyle="green"
      :socialLinks="{
        git: 'https://github.com/Lukenoutte',
        link: 'https://github.com/Lukenoutte/vue-profile-card',
        facebook: 'https://github.com/Lukenoutte/vue-profile-card',
        twitter: 'https://github.com/Lukenoutte/vue-profile-card',
      }"
    />
  </div>
</template>

