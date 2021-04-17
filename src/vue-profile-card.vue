<template>
  <div
    class="vue-profile-card"
    :style="{ height: cardHeight + 'px', width: cardWidth + 'px' }"
  >
    <div class="cover">
      <img class="bakground-img" v-if="backgroundImg" :src="backgroundImg" />
      <div class="content-cover">
        <div class="profile-pic">
          <img v-if="!profileImg" :src="profileBlank" />
          <img v-else :src="profileImg" />
        </div>
        <strong>@Lukenoutte</strong>
      </div>
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
      <span>{{ bodyPhrase }}</span>
    </div>
  </div>
</template>



<script>
import profileBlank from "../assets/blank-profile.jpg";

export default /*#__PURE__*/ {
  name: "VueProfileCard", // vue component name
  data() {
    return {
      profileBlank,
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
    profileImg: { type: [Object, String] },
    backgroundImg: { type: [Object, String] },
  },
  computed: {
    linkFormat: function () {
      let links = this.socialLinks;
      if (links.email) links.email = "mailto:" + links.email;
      if (links.tel) links.tel = "tel:" + links.tel;
      return links;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

img {
  pointer-events: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}

.vue-profile-card {
  display: block;
  width: 400px;
  height: 320px;
  margin: 25px auto;
  text-align: center;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
}
.cover {
  width: 100%;
  height: 60%;
  background: thistle;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.profile-pic {
  height: 100px;
  width: 100px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgb(0 0 0 / 25%);
  overflow: hidden;
}

.profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cover strong {
  margin-top: 10px;
  color: white;
}

.body {
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2.5%;
}

.body span {
  margin-top: 5px;
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
.bakground-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}
.content-cover {
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
    flex-direction: column;
}
</style>
