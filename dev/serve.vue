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
      bodyPhrase="Iai carai."
      :socialLinks="{
        facebook: 'https://fb.com',
        twitter: 'https://twitter.com',
        youtube: 'https://youtube.com'
      }"
    />
  </div>
</template>
