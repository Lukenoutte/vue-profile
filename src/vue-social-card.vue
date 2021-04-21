<template>
  <div
    class="vue-social-card"
    :style="{ height: cardHeight + 'px', width: cardWidth + 'px' }"
  >
    <div class="cover" :style="{ background: coverColorData }">
      <img class="bakground-img" v-if="coverImgData" :src="coverImgData" />
      <div class="content-cover">
        <div class="profile-pic">
          <img v-if="profileImg" :src="profileImg" />
        </div>
        <strong :style="{ color: nicknameColorData }">{{ nickname }}</strong>
      </div>
    </div>
    <div class="body" :style="{ background: bodyColorData }">
      <div class="icons-wrapper">
        <a
          v-for="(link, social) in socialLinks"
          :href="linkFormat[social]"
          v-bind:key="social"
          target="_blank"
          rel="noopener noreferrer"
          :title="social"
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
      coverImgData: this.coverImg,
      iconsColorData: this.iconsColor,
      phraseColorData: this.phraseColor,
      coverColorData: this.coverColor,
      bodyColorData: this.bodyColor,
      nicknameColorData: this.nicknameColor,
    };
  },
  props: {
    cardHeight: { type: [String, Number], default: 300 },
    cardWidth: { type: [String, Number], default: 400 },
    socialLinks: {
      type: Object,
      default: () => {
        return {
          git: "https://github.com/Lukenoutte",
          link: "https://github.com/Lukenoutte/vue-social-card",
        };
      },
    },
    bodyPhrase: { type: String },
    nickname: { type: String, default: "@YourNicknameHere" },
    nicknameColor: { type: String },
    profileImg: { type: [Object, String] },
    coverImg: { type: [Object, String] },
    coverColor: { type: String },
    iconsColor: { type: String },
    bodyColor: { type: String },
    phraseColor: { type: String },
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

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
img {
  pointer-events: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  transition: all 0.7s ease 0s;
  image-rendering: auto;
}

.vue-social-card {
  display: block;
  width: 400px;
  height: 320px;
  margin: 25px auto;
  text-align: center;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 2px 4px rgb(0 0 0 / 25%);
  overflow: hidden;
}

.vue-social-card:hover .bakground-img {
  transform: scale(1.05);
}

.cover {
  width: 100%;
  height: 60%;
  background: #5bcf95;
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
  border: 3px solid white;
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
  background: #e9ecf1;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 0 10%;
}

.body span {
  margin-top: 5px;
  font-weight: 400;
  color: #5498e9;
}

.icons-wrapper {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.social-icon {
  font-size: 30px;
  color: #5498e9;
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
