<script>
import Vue from "vue";
import VueProfile from "@/vue-profile.vue";
export default Vue.extend({
  name: "ServeDev",
  components: {
    VueProfile,
  }
});
</script>

<template>
  <div id="app">
    <vue-profile />
  </div>
</template>

