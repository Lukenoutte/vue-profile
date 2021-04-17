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
        youtube: 'https://youtube.com',
        email: 'lucas@hotmail.com',
        poo: 'https://poo.com',
        link: 'https://test.com',
        tel: '5575991648461'
      }"
    />
  </div>
</template>
