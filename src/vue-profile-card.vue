<template>
  <div
    class="vue-profile-card"
    :style="{ height: cardHeight + 'px', width: cardWidth + 'px' }"
  >
    <div class="cover">
      <img class="bakground-img" v-if="backgroundImgData" :src="backgroundImgData" />
      <div class="content-cover">
        <div class="profile-pic">
          <img v-if="!profileImg" :src="profileBlank" />
          <img v-else :src="profileImg" />
        </div>
        <strong :style="{ color: nicknameColor }">{{nickname}}</strong>
      </div>
    </div>
    <div class="body" :style="{ background: bodyColor }">
      <div class="icons-wrapper">
        <a
          v-for="(link, social) in socialLinks"
          :href="linkFormat[social]"
          v-bind:key="social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <fa-icon
            class="social-icon"
            :style="{ color: iconsColorData }"
            :icon="icons[social]"
        /></a>
      </div>
      <span :style="{ color: phraseColorData }">{{ bodyPhrase }}</span>
    </div>
  </div>
</template>



<script>
import profileBlank from "../assets/blank-profile.jpg";
import plants from "../assets/plants.jpg";

export default /*#__PURE__*/ {
  name: "VueProfileCard", // vue component name
  data() {
    return {
      plants,
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
      backgroundImgData: this.backgroundImg,
      iconsColorData: this.iconsColor,
      phraseColorData: this.phraseColor,
    };
  },
  props: {
    cardHeight: { type: [String, Number], default: 300 },
    cardWidth: { type: [String, Number], default: 400 },
    socialLinks: { type: Object },
    bodyPhrase: { type: String },
    nickname: { type: String, default: "@YourNicknameHere" },
    nicknameColor: { type: String },
    profileImg: { type: [Object, String] },
    backgroundImg: { type: [Object, String] },
    iconsColor: { type: String },
    bodyColor: { type: String },
    phraseColor: { type: String },
    cardStyle: { type: [String, Number], default: 0 },
  },
  computed: {
    linkFormat: function () {
      let links = this.socialLinks;
      if (links.email) links.email = "mailto:" + links.email;
      if (links.tel) links.tel = "tel:" + links.tel;
      return links;
    },
  },
  mounted() {
    if (this.cardStyle == 1) {
      this.iconsColorData = "#264748";
      this.backgroundImgData = plants;
      this.phraseColorData = "#96ab97";
    }
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

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
  box-shadow: 0 5px 4px rgb(0 0 0 / 25%);
}
.cover {
  width: 100%;
  height: 60%;
  background: #c5c5c7;
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
  backdrop-filter: blur(1px);
  padding: 5px 15px;
  border-radius: 15px;
}

.body {
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0 10%;
}

.body span {
  margin-top: 5px;
  font-weight: 400;
  color: #c5c5c7;
}

.icons-wrapper {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.social-icon {
  font-size: 30px;
  color: #959596;
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
