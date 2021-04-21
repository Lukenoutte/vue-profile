<script>
import Vue from "vue";
import vueProfile from "@/vue-profile.vue";
export default Vue.extend({
  name: "ServeDev",
  components: {
    vueProfile,
  }
});
</script>

<template>
  <div id="app">
    <vue-profile />
  </div>
</template>

