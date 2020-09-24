<template>
  <div class="contacts-container mb-3">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">
        Contact Us
      </div>
    </div>
    <div class="contacts-wrapper">
      <v-card class="ma-5 text-center" min-width="300" hover dark>
        <v-card-text>
          <h2 class="font-weight-normal custom-color">Trupthi Joshi</h2>
          <p class="ma-0 mt-2">Curator, Organiser and Licensee</p>
        </v-card-text>
        <v-divider class="mt-1" />
        <a href="tel:+91 80084 45852">
          <div class="custom-flex">
            <i class="fa fa-phone size" aria-hidden="true"></i>
            <div class="black--text ml-3">+91 80084 45852</div>
          </div>
        </a>
      </v-card>
      <v-card
        class="ma-5 text-center"
        min-width="290"
        max-width="500"
        hover
        dark
      >
        <v-card-text>
          <h2 class="font-weight-normal custom-color">Kaushik Singh</h2>
          <p class="ma-0 mt-2">Co-organiser</p>
        </v-card-text>
        <v-divider class="mt-1" />
        <a href="tel:+91 9739888078">
          <div class="custom-flex">
            <i class="fa fa-phone size" aria-hidden="true"></i>
            <div class="black--text ml-3">+91 9739888078</div>
          </div>
        </a>
      </v-card>
      <v-card
        class="ma-5 text-center"
        min-width="290"
        max-width="500"
        hover
        dark
      >
        <v-card-text>
          <h2 class="font-weight-normal custom-color">Dheeraj Bhat</h2>
          <p class="ma-0 mt-2">Coordinator</p>
        </v-card-text>
        <v-divider class="mt-1" />
        <a href="tel:+91 7411452100">
          <div class="custom-flex">
            <i class="fa fa-phone size" aria-hidden="true"></i>
            <div class="black--text ml-3">+91 7411452100</div>
          </div>
        </a>
      </v-card>
    </div>
    <div class="socials-wrapper">
      <a href="mailto: tedxatramaiah@gmail.com" target="_blank">
        <v-chip class="ma-2 px-5" dark text-color="white" large>
          <i class="fa fa-envelope size mr-3" aria-hidden="true"></i>
          tedxatramaiah@gmail.com
        </v-chip></a
      >
      <a href="https://www.instagram.com/tedxmsrit/" target="_blank">
        <v-chip class="ma-2 px-5" dark text-color="white" large>
          <i class="fa fa-instagram size mr-3" aria-hidden="true"></i>
          Instagram | @tedxmsrit
        </v-chip></a
      >
      <a href="https://www.facebook.com/tedxmsrit/" target="_blank">
        <v-chip class="ma-2 px-5" dark text-color="white" large>
          <i class="fa fa-facebook size mr-3" aria-hidden="true"></i>
          Facebook | TEDxMSRIT
        </v-chip></a
      >
      <a href="https://twitter.com/tedxmsrit" target="_blank">
        <v-chip class="ma-2 px-5" dark text-color="white" large>
          <i class="fa fa-twitter size mr-3" aria-hidden="true"></i>
          Twitter | @TEDxMSRIT
        </v-chip></a
      >
      <a
        href="https://www.linkedin.com/in/tedxmsrit-3672911b7/"
        target="_blank"
      >
        <v-chip class="ma-2 px-5" dark text-color="white" large>
          <i class="fa fa-linkedin size mr-3" aria-hidden="true"></i>
          LinkedIn | TEDxMSRIT
        </v-chip></a
      >
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
.contacts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  //min-height: 100vh;
  background-image: $black;
  padding-bottom: 5rem;
  .contacts-wrapper {
    width: 100vw;
    padding: 4rem 0 2rem 0;
    widows: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @include responsive($phone) {
      padding: 1rem 0;
    }
  }
  .custom-color {
    color: $theme-color !important;
  }
  a {
    color: black;
    margin: 0;
    padding: 0;
    text-decoration: none;
    .custom-flex {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $theme-color;
      padding: 0.5rem;
      .size {
        font-size: 25px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .socials-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap-reverse;
    @include responsive($tablet-landscape) {
      justify-content: center;
    }
    @include responsive($tablet-portrait) {
      justify-content: center;
    }
    .size {
      font-size: 25px;
      color: $theme-color;
    }
  }
}
</style>