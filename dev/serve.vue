<script>
import Vue from "vue";
import VueProfileCard from "@/vue-social-card.vue";
export default Vue.extend({
  name: "ServeDev",
  components: {
    VueProfileCard,
  }
});
</script>

<template>
  <div id="app">
    <vue-social-card />
  </div>
</template>

