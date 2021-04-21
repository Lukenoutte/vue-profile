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
    <vue-profile-card />
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
