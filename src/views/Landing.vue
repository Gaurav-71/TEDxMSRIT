<template>
  <div class="landing-container">
    <div class="hero-section">
      <div class="home-wrap">
        <div class="home-inner"></div>
      </div>
      <div class="translucent-wrapper">
        <img
          class="logo-gif"
          src="../assets/Landing Page/Theme Logo - Transparent.png"
        />
      </div>
    </div>
    <Countdown />
    <div class="parallax-container about-container mb-3">
      <div class="parallax-wrap">
        <div class="parallax-inner"></div>
      </div>
      <section class="about-section">
        <div class="heading">
          <div class="h1 display-2">About</div>
          <div class="line"></div>
        </div>
        <div class="para px-8">
          TEDxMSRIT is an independently organised TEDx event organised in our
          very own college Ramaiah Institute of Technology, Bangalore. TEDxMSRIT
          strives to bring together people from different walks of life and
          uniting them to form a community that brings about new ideas. Our
          reputed line of speakers is a part of this community that we're trying
          to build. The speakers are monumental in contributing ideas that were
          instrumental in changing their lives for the better!
        </div>
        <div class="videos">
          <iframe
            class="iframe"
            src="https://www.youtube.com/embed/d0NHOpeczUU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
    <div class="parallax-container mb-3">
      <div class="parallax-wrap">
        <div class="parallax-inner"></div>
      </div>
      <section class="themes-container">
        <div class="heading">
          <div class="h1 display-2">Theme - Mission Twenty Twenty Won</div>
          <div class="line"></div>
        </div>
        <div class="themes">
          <div class="para px-8">
            Our theme for this year is “Mission Twenty Twenty Won”.
            Twenty-Twenty- A year that was envisioned as a landmark in many
            disciplines, a strong nation in the eyes of a then President, flying
            cars imagined by an artist, zero single-use plastic being the aim of
            an environmentalist, we surpassed our own expectations by the end of
            the last decade on numerous fronts but fell short of our own
            imagination in some, but twenty-twenty as a year was nothing like we
            imagined it would be.
          </div>
          <div class="para px-8">
            Twenty-twenty-one – Preceded by one of the most difficult years the
            modern world had witnessed, we stood spectators to a butterfly
            effect in action impacting every aspect of the living world. We
            didn’t just get through – we innovated, we invented, we created, we
            thrived - even at our worst. Now, we have yet another mission to
            accomplish – 2021. And 2022, and 2023.
          </div>
        </div>
      </section>
    </div>
    <div class="parallax-container speakers-container mb-3">
      <div class="parallax-wrap">
        <div class="parallax-inner"></div>
      </div>
      <section class="speakers-section">
        <div class="heading">
          <div class="h1 display-2">Speakers & Performers</div>
          <div class="line"></div>
        </div>
        <div v-if="false" class="speakers">
          <v-card class="v-card" max-width="250">
            <v-img
              height="350"
              class="black--text align-end"
              src="https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Mehul.jpeg?raw=true"
            >
              <v-card-title class="my-title">Mehul Manjeshwar</v-card-title>
            </v-img>
          </v-card>
          <v-card class="v-card" max-width="250">
            <v-img
              height="350"
              class="black--text align-end"
              src="https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Samarth.jpeg?raw=true"
            >
              <v-card-title class="my-title">Samarth Kholkar</v-card-title>
            </v-img>
          </v-card>
          <v-card class="v-card" max-width="250">
            <v-img
              height="350"
              class="black--text align-end"
              src="https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Qian.jpeg?raw=true"
            >
              <v-card-title class="my-title">Qian Wang</v-card-title>
            </v-img>
          </v-card>
          <v-card class="v-card" max-width="250">
            <v-img
              height="350"
              class="black--text align-end"
              src="https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Shailesh.jpeg?raw=true"
            >
              <v-card-title class="my-title">Shailesh Awathe</v-card-title>
            </v-img>
          </v-card>
          <v-card class="v-card elevation-19" max-width="250">
            <v-img
              height="350"
              class="black--text align-end"
              src="https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Venkat.jpeg?raw=true"
            >
              <v-card-title class="my-title">Venkat Charloo</v-card-title>
            </v-img>
          </v-card>
        </div>
        <div class="more-info white--text">
          <!-- For more information about speakers,
          <span @click="route(1)">Click Here</span> -->
          Coming Soon ...
        </div>
      </section>
      <section v-if="false" class="speakers-section">
        <div class="heading">
          <div class="h1 display-2">Performers</div>
          <div class="line"></div>
        </div>
        <div class="speakers">
          <v-card class="v-card" max-width="720">
            <v-img
              height="350"
              class="black--text align-end"
              src="https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Band.jpeg?raw=true"
            >
              <v-card-title class="my-title">Cardboard Streets</v-card-title>
            </v-img></v-card
          >
        </div>
      </section>
    </div>
    <div class="parallax-container mb-3">
      <div class="parallax-wrap">
        <div class="parallax-inner"></div>
      </div>
      <section class="organizers-container">
        <div class="heading">
          <div class="h1 display-2">Organizers</div>
          <div class="line"></div>
        </div>
        <div class="organizers">
          <div class="organizer">
            <img src="../assets/Organisers/trupthi.jpeg" alt="organizer" />
            <div class="name">Trupthi Joshi</div>
            <div class="job">Curator, Organiser and Licensee</div>
          </div>
          <div class="organizer">
            <img src="../assets/Organisers/kaushik.jpeg" alt="organizer" />
            <div class="name">Kaushik Singh</div>
            <div class="job">Co-organiser</div>
          </div>
          <div class="organizer">
            <img src="../assets/Organisers/dheeraj.jpeg" alt="organizer" />
            <div class="name">Dheeraj Bhat</div>
            <div class="job">Coordinator</div>
          </div>
        </div>
        <div class="more-info">
          <span @click="route(2)">Click here,</span> to view the complete Team
        </div>
      </section>
    </div>
    <div class="parallax-container carousel-container">
      <div class="parallax-wrap">
        <div class="parallax-inner"></div>
      </div>
      <section class="speakers-section">
        <div class="heading">
          <div class="h1 display-2">Gallery</div>
          <div class="line"></div>
        </div>
        <div class="carousel">
          <v-carousel continuous cycle height="auto">
            <v-carousel-item v-for="(item, i) in items" :key="i" eager>
              <v-img :src="item.src" eager></v-img>
            </v-carousel-item>
          </v-carousel>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Countdown from "../components/Countdown";
export default {
  components: {
    Countdown,
  },
  data() {
    return {
      unsubscribe: null,
      items: [
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/1.jpg?raw=true",
        },
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/2.jpg?raw=true",
        },
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/3.jpg?raw=true",
        },
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/4.jpg?raw=true",
        },
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/5.jpg?raw=true",
        },
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/6.jpg?raw=true",
        },
        {
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/8.jpg?raw=true",
        },
      ],
    };
  },
  methods: {
    route(page) {
      switch (page) {
        case 1:
          this.$router.push("/speakers");
          break;
        case 2:
          this.$router.push("/team");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
@import "../scss/_parallax.scss";
.landing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-family: "Anton", sans-serif !important;
  letter-spacing: 1px;
  .hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: table;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    .h1 {
      text-align: center;
      font-family: "Anton", sans-serif !important;
      width: 100%;
      z-index: 1;
      @include responsive($phone) {
        font-size: large !important;
      }
      span {
        margin-left: 0.7rem;
        color: $theme-color;
        @include responsive($phone) {
          margin-left: 0.5rem;
        }
      }
      .rouge {
        font-family: "Rouge Script", cursive !important;
        @include responsive($phone) {
          font-size: large !important;
        }
      }
      .animate-text-container {
        width: 160px;
        text-align: center;
        margin: 0 0.3rem;
        @include responsive($phone) {
          width: 90px;
        }
        .animate-text::before {
          content: "Greener";
          animation: text 8s infinite;
          color: $theme-color;
          text-align: center;
          @include responsive($phone) {
            font-size: xx-large !important;
          }
        }
      }
    }
    .translucent-wrapper {
      background: rgba(black, 0.7);
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      .logo-gif {
        width: 700px;
        height: auto;
        z-index: 1;
        @include responsive($tablet-portrait) {
          width: 720px;
        }
        @include responsive($phone) {
          width: 320px;
          margin: 0.5rem 0;
        }
        @include responsive($small-phone) {
          width: 300px;
          margin: 0.3rem 0;
        }
      }
    }
    .delay-appear {
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 1;
      animation: appear 2.5s ease-in 1;
    }
    .home-wrap {
      clip: rect(0, auto, auto, 0);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -999 !important;
      .home-inner {
        position: fixed;
        display: block;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        background-image: url("../assets/Landing Page/banner.png");
        background-size: cover;
        background-position: center center;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        will-change: transform !important;
      }
      @media all and (max-width: 330px) {
        .home-inner {
          max-width: 100vw;
        }
      }
    }
  }
  .about-container {
    .parallax-wrap {
      .parallax-inner {
        background-image: url("../assets/Landing Page/x.jpg");
      }
    }
    .about-section {
      width: 100%;
      background: rgba(black, 0.6);
      z-index: 999;
      .p {
        font-family: DMSans, system-ui, -apple-system, system-ui, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji" !important;
        font-weight: bold;
        line-height: 3.5rem;
        span {
          background: rgba($color: yellow, $alpha: 0.3);
          color: $theme-color;
          text-shadow: 2px 2px black;
          padding: 0.3rem;
        }
        @include responsive($phone) {
          font-size: x-large !important;
          line-height: 2.5rem;
          padding: 0.4rem;
        }
      }
      .para,
      .parax {
        font-family: DMSans, system-ui, -apple-system, system-ui, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji" !important;
        font-size: large;
        line-height: 1.8rem;
        margin: 1.5rem 0;
        letter-spacing: 2.5px;
        @include responsive($phone) {
          display: none;
        }
      }
      .parax {
        @include responsive($phone) {
          display: block;
        }
      }
      .hashtag {
        font-family: "Anton", sans-serif !important;
        width: 100%;
        text-align: center;
        margin: 3rem 0 0 0;
        background: $theme-color;
        color: black;
        padding: 4rem 0rem;
        div {
          @include responsive($phone) {
            font-size: x-large !important;
          }
        }
        @include responsive($phone) {
          padding: 2rem 0;
        }
        .h1 {
          font-family: "Anton", sans-serif !important;
          font-weight: 500;
          letter-spacing: 2px !important;
          margin: 1rem 0;
          text-transform: uppercase;
          @include responsive($phone) {
            font-size: xx-large !important;
            margin: 0.25rem 0;
          }
        }
      }
      .videos {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 1rem 0;
        margin: 2rem;
        @include responsive($phone) {
          flex-wrap: wrap;
        }
        .iframe {
          width: 560px;
          height: 320px;
          @include responsive($tablet-landscape) {
            transform: scale(0.95);
          }
          @include responsive($tablet-portrait) {
            width: 320px;
            height: 180px;
          }
          @include responsive($phone) {
            width: 320px;
            height: 180px;
            margin: 0.5rem;
          }
          @include responsive($small-phone) {
            width: 250px;
            height: 150px;
          }
        }
      }
    }
  }
  .themes-container {
    width: 100%;
    padding-bottom: 1rem;
    .themes {
      display: flex;
      justify-content: space-around;
      padding: 1.5rem;
      flex-wrap: wrap;
      .p {
        font-family: DMSans, system-ui, -apple-system, system-ui, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji" !important;
        font-weight: bold;
        line-height: 3.5rem;
        span {
          background: rgba($color: yellow, $alpha: 0.3);
          color: $theme-color;
          text-shadow: 2px 2px black;
          padding: 0.3rem;
        }
        @include responsive($phone) {
          font-size: x-large !important;
          line-height: 2.5rem;
          padding: 0.4rem;
        }
      }
      .para,
      .parax {
        font-family: DMSans, system-ui, -apple-system, system-ui, "Segoe UI",
          Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
          "Noto Color Emoji" !important;
        font-size: large;
        line-height: 1.8rem;
        margin: 1rem 0;
        letter-spacing: 2.5px;
        @include responsive($phone) {
          display: none;
        }
      }
      .parax {
        @include responsive($phone) {
          display: block;
        }
      }
      .theme {
        display: flex;
        flex-direction: column;
        align-items: center;
        @include responsive($phone) {
          flex-basis: 100%;
          margin: 1rem 0;
        }
        .svg {
          color: darken($color: $theme-color, $amount: 15%);
          width: 70px;
        }
        .caption {
          margin: 2rem 0 1rem 0;
          font-size: xx-large !important;
          text-transform: uppercase;
          color: $theme-color;
          font-family: "Anton", sans-serif !important;
          @include responsive($phone) {
            margin: 1rem 0 1rem 0;
          }
        }
      }
    }
  }
  .speakers-container {
    .parallax-wrap {
      .parallax-inner {
        background-image: url("../assets/Landing Page/sx.jpg");
      }
    }
    .speakers-section {
      width: 100%;
      padding-bottom: 1rem;
      .speakers {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .v-card {
          margin: 1rem;
          background-image: $yellow-gradient;
          .black-gradient {
            background-image: $black;
          }
          .my-title {
            background: rgba(black, 0.5);
            color: white;
            text-align: center;
          }
        }
      }
      .more-info {
        width: 100%;
        background: $theme-color;
        color: black;
        padding: 1rem;
        text-align: center;
        margin: 1.5rem 0;
        span {
          color: white;
          cursor: pointer;
        }
      }
    }
  }
  .organizers-container {
    width: 100%;
    .organizers {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding: 1.5rem 0 2.5rem 0;
      .organizer {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
        img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
        }
        .name {
          margin: 1rem 0 0.1rem 0;
          font-size: xx-large;
          color: $theme-color;
        }
        .job {
          font-weight: lighter;
        }
      }
    }
    .more-info {
      width: 100%;
      background: $theme-color;
      color: black;
      padding: 1rem;
      text-align: center;
      margin: 1.5rem 0 2.5rem 0;
      span {
        color: white;
        cursor: pointer;
      }
    }
  }
  .carousel-container {
    .parallax-wrap {
      .parallax-inner {
        background-image: url("../assets/Landing Page/guitar.jpg");
      }
    }
    .speakers-section {
      width: 100%;
      padding-bottom: 1rem;

      .carousel {
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 1.5rem 0 3rem 0;
        .v-carousel {
          width: 900px;
          @include responsive($tablet-portrait) {
            width: 720px;
          }
          @include responsive($phone) {
            width: 350px;
          }
          @include responsive($small-phone) {
            width: 300px;
          }
        }
      }
    }
  }
}

@keyframes text {
  0% {
    content: "Greener";
  }
  20% {
    content: "Better";
  }
  40% {
    content: "Healthier";
  }
  60% {
    content: "Cooler";
  }
  80% {
    content: "Thriving";
  }
  100% {
    content: "Resilient";
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>