<script>
import Vue from "vue";
import VueProfileCard from "@/vue-profile-card.vue";
import plants from "../assets/plants.jpg";
export default Vue.extend({
  name: "ServeDev",
  components: {
    VueProfileCard,
  },
  data() {
    return {
      plants,
    };
  },
});
</script>

<template>
  <div id="app">
    <vue-profile-card
      cardStyle= "1"
      mainTitle="!Test"
      bodyPhrase="Iai carai."
  
      :socialLinks="{
        facebook: 'https://fb.com',
        twitter: 'https://twitter.com',
        youtube: 'https://youtube.com',
        email: 'lucas@hotmail.com',
        poo: 'https://poo.com',
        link: 'https://test.com',
        tel: '5575991648461',
      }"
    />
  </div>
</template>

<style scoped>
#app {
  background-color: beige;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
</style>
