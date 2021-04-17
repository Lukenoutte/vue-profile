<template>
  <div
    class="vue-profile-card"
    :style="{ height: cardHeight + 'px', width: cardWidth + 'px' }"
  >
    <div class="cover">
      <div class="profile-pic"></div>
      <span>@Lukenoutte</span>
    </div>
    <div class="body">
      <div class="icons-wrapper">
        <a
          v-for="(link, social) in socialLinks"
          :href="linkFormat[social]"
          v-bind:key="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa-icon class="social-icon" :icon="icons[social]"
        /></a>
      </div>
      <p>{{ bodyPhrase }}</p>
    </div>
  </div>
</template>



<script>
export default /*#__PURE__*/ {
  name: "VueProfileCard", // vue component name
  data() {
    return {
      icons: {
        facebook: ["fab", "facebook-square"],
        twitter: ["fab", "twitter-square"],
        youtube: ["fab", "youtube-square"],
        instagram: ["fab", "instagram-square"],
        linkedin: ["fab", "linkedin"],
        whatsapp: ["fab", "whatsapp-square"],
        pinterest: ["fab", "pinterest-square"],
        git: ["fab", "git-square"],
        blogger: ["fab", "blogger"],
        email: ["fas", "envelope"],
        telegram: ["fab", "telegram"],
        poo: ["fas", "poo"],
        link: ["fas", "link"],
        tel: ["fas", "phone-square-alt"],
      },
    };
  },
  props: {
    cardHeight: { type: [String, Number], default: 300 },
    cardWidth: { type: [String, Number], default: 400 },
    socialLinks: { type: Object },
    bodyPhrase: { type: String },
    profilePic: { type: String },
  },
  computed: {
    linkFormat: function () {
      let links = this.socialLinks;
      if(links.email) links.email = "mailto:" + links.email
      if(links.tel) links.tel = "tel:" + links.tel
      return links
    }
  },
};
</script>

<style scoped>
.vue-profile-card {
  display: block;
  width: 400px;
  height: 320px;
  margin: 25px auto;
  background: #eaeaea;
  text-align: center;
  border-radius: 15px;
}
.cover {
  width: 100%;
  height: 65%;
  background: red;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.profile-pic {
  height: 100px;
  width: 100px;
  background: black;
  border-radius: 50%;
}
.cover span {
  margin-top: 10px;
}

.body {
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.icons-wrapper {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 15px;
}
.social-icon {
  font-size: 30px;
  color: black;
}
</style>
