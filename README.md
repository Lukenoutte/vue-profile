[![npm version](https://badge.fury.io/js/vue-profile-card.svg)](https://badge.fury.io/js/vue-profile-card)
[![npm](https://img.shields.io/npm/dm/vue-profile-card.svg)](https://www.npmjs.com/package/vue-js-list)

### Vue.js Profile Card

Highly customizable social sharing card.

## Standard: 
![card1](https://user-images.githubusercontent.com/32497719/115598876-45451b00-a2b1-11eb-87fb-c1c9971eba3b.png)
## Green Style: 
![card](https://user-images.githubusercontent.com/32497719/115598806-2f375a80-a2b1-11eb-8606-0be7e922dbe5.gif)

## Install:

```bash
npm install vue-profile-card
```


## Use:

```vue
<template>
  <vue-profile-card 
  nickname="@Lukenoutte" 
  bodyPhrase="Follow the white rabbit."
  :socialLinks="myLinks"
  :profileImg="Img"
  />
</template>

<script>
import VueProfileCard from 'vue-profile-card';
import Img from "../assets/img.png";
export default {
  components: {
    VueProfileCard,
  }, 
  data(){
    return{
      myLinks: { 
        git: "https://github.com/Lukenoutte",         
        link: "https://github.com/Lukenoutte/vue-profile-card", 
        },
        Img
    }
  }
}
</script>

```

### Prop

| Name              | Type                  | Required | Description                                                    |
| ----------        | ----------------------| -------- | -------------------------------------------------------------- |
| nickname          | String                | +        | The text bellow the profile image.                             |
| socialLinks       | Object                | +        | A object with all links, using the social network name as key. |
| profileImg        | [Object, String]      | +        | The profile image.                                             |
| cardHeight        | [String, Number]      | -        | Height                                                         |
| cardWidth         | [String, Number]      | -        | Width                                                          |
| bodyPhrase        | String                | -        | Phrase bellow icons.                                           |
| coverImg          | [Object, String]      | -        | The cover image.                                               |
| nicknameColor     | String                | -        | Nickname color.                                                |
| coverColor        | String                | -        | Cover color, if you don't have an image.                       |
| iconsColor        | String                | -        | Icons color.                                                   |
| bodyColor         | String                | -        | Color of div bellow cover.                                     |
| phraseColor       | String                | -        | Phrase color.                                                  |
| cardStyle         | String                | -        | Styles                                                         |

### Icon links
| Name              | 
| ----------        | 
| facebook          |
| twitter           | 
| youtube           | 
| instagram         | 
| linkedin          | 
| whatsapp          | 
| pinterest         | 
| git               | 
| blogger           | 
| email             | 
| telegram          | 
| link              | 
| tel               | 
| poo               | 

```vue

<script>
export default {
  data(){
      myLinks: { 
        git: "https://github.com/Lukenoutte",         
        link: "https://github.com/Lukenoutte/vue-profile-card",
        tel: "5575991777777",
        email: "youremail@mail.com"
        }
  },
}
</script>

```

### Styles (cardStyle)

| Name              | 
| ----------        | 
| green             |
| dark-purple       | 
| yellow            | 
| dark-mode         | 