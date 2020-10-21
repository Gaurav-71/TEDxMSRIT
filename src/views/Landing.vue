<template>
  <div class="landing-container">
    <div class="hero-section">
      <div class="home-wrap">
        <div class="home-inner"></div>
      </div>
      <div class="h1 display-1 text-uppercase delay-appear">
        we can change
        <span>climate change</span>.
      </div>
      <img class="logo-gif" src="../assets/Landing Page/countdown.gif" />
      <div class="h1 display-1 text-uppercase delay-appear">
        <div>to a</div>
        <div class="animate-text-container">
          <div class="display-3 text-capitalize rouge animate-text"></div>
        </div>
        <div>future</div>
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
        <div class="p px-8 py-3 display-1">
          Countdown is a global initiative to champion and accelerate solutions
          to the climate crisis, turning ideas into action. The goal: To build
          <span
            >a better future by cutting greenhouse gas emissions in half by
            2030</span
          >
          in the race to a zero-carbon world – a world that is safer, cleaner
          and fairer for everyone.
        </div>
        <div class="para px-8">
          The ongoing health and economic crises are reminding us of an
          important fact: We’re all part of the same fragile system, dependent
          on nature and one another.
        </div>
        <div class="para px-8">
          As we look to the future, we must build forward and emerge more
          sustainable and resilient than before.
        </div>
        <div class="para px-8">
          We can change climate change – #JoinTheCountdown to a safer, cleaner,
          fairer future. Countdown invites collaboration from every
          organization, company, city and nation and from citizens everywhere.
          It is a movement open to everyone – and everyone has a vital role to
          play.
        </div>
        <div class="parax px-8">
          Part of a global initiative, we at TEDxMSRIT aim to find ways to make
          rapid shift to a world with net zero greenhouse emissions and tackle
          the climate crisis. With the focus being on climate change, we focus
          on five subject areas Food Nature Transport Energy Materials We bring
          you a live virtual event featuring thinkers and experts in each of the
          mentioned areas on 24th of October.
        </div>
        <div class="hashtag">
          <div class="display-3 h1">We need Your Help.</div>
          <div class="display-1">#JoinTheCountdown</div>
        </div>
        <div class="videos">
          <iframe
            class="iframe"
            src="https://www.youtube.com/embed/juuR8kC3Qz4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
          <div class="h1 display-2">Themes</div>
          <div class="line"></div>
        </div>
        <div class="themes">
          <div class="theme">
            <svg
              class="svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
            >
              <title>Electricity</title>
              <path
                data-name="layer1"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M34.7 8l-22 28.5h19.6L28.7 56l22.6-31.5h-19L34.7 8z"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
            <div class="caption">Energy</div>
          </div>
          <div class="theme">
            <svg
              class="svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
            >
              <title>Airplane</title>
              <path
                data-name="layer2"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M32 11v12"
              />
              <path
                data-name="layer1"
                d="M12.4 37.3c-4.8-1.3-8.9-3-10.3-4.7 0 0-.6-1.6.9-1.6h20.2m1.6 8l-4.8-.3m31.6-1.4c4.8-1.2 8.9-2.9 10.3-4.6 0 0 .6-1.6-.9-1.6H40.9M39.2 39l4.8-.3"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <circle
                data-name="layer2"
                cx="16"
                cy="39"
                r="4"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <circle
                data-name="layer2"
                cx="48"
                cy="39"
                r="4"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <ellipse
                data-name="layer1"
                cx="32"
                cy="33"
                rx="9"
                ry="10"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
              <path
                data-name="layer1"
                d="M24 28.4s4 4.6 8 4.6 8-4.6 8-4.6"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <div class="caption">Transport</div>
          </div>
          <div class="theme">
            <svg
              class="svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
            >
              <title>Data App</title>
              <path
                d="M2 23v22l30.082 14L62 45V23L32 37.048 2 23zm30 14.048V59m25.332-38.178L62 23M37.459 11.548l9.148 4.269m-29.232.009l9.147-4.27M2 23l4.742-2.213"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                data-name="layer2"
              />
              <ellipse
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                ry="4"
                rx="7"
                cy="19"
                cx="13"
                data-name="layer1"
              />
              <ellipse
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                ry="4"
                rx="7"
                cy="25"
                cx="32"
                data-name="layer1"
              />
              <ellipse
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                ry="4"
                rx="7"
                cy="9"
                cx="32"
                data-name="layer1"
              />
              <ellipse
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke="currentColor"
                fill="none"
                ry="4"
                rx="7"
                cy="19"
                cx="51"
                data-name="layer1"
              />
            </svg>
            <div class="caption">Materials</div>
          </div>
          <div class="theme">
            <svg
              class="svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
            >
              <title>Carrot</title>
              <path
                data-name="layer2"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M55.1 8.9l-8.4 8.4M45.3 2c2.4 2.4 5.6 11.1 1.4 15.3M62 18.7c-2.4-2.4-11.1-5.6-15.3-1.4"
              />
              <path
                data-name="layer1"
                d="M46.7 17.3c-5.4-5.4-12.1-7.4-16.7-2.8C18.1 26.5-.5 58.9 2.3 61.7s36.1-16.6 47.2-27.8c4.6-4.6 2.6-11.3-2.8-16.6zm-20.3 1.8l7.8 7.9m6.2 14.5l-6.2-6.2m-16.4-5.2l5.3 5.2m4 15.1l-6.8-6.7"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
            <div class="caption">Food</div>
          </div>
          <div class="theme">
            <svg
              class="svg"
              viewBox="0 0 64 64"
              aria-labelledby="title"
              aria-describedby="desc"
              role="img"
            >
              <title>Earth Globe</title>
              <path
                stroke-width="2"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="none"
                d="M57.7 16.5A30 30 0 1 1 43.4 4.3"
                data-name="layer2"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                stroke-width="2"
                stroke-miterlimit="10"
                stroke="currentColor"
                fill="none"
                d="M32 12c0 4.2 6 1.7 6 6s-4.6 7.3-8 5-7.9-3.5-11.9 2.1-1.3 12 1.5 11.9 5.5-2.8 6.7.6 1.5 3.4 2.8 4.2 1.3 2.2.9 4.1 2 8 4 8 3.8-.8 4-4 2.6-3.3 3.8-4.2-.9-4.3 1.3-6.5 6.6-6.2 2.8-7.2-3.5-1.8-4-3.4-2-3.2 1-3.3a11.9 11.9 0 0 0 8.7-3.6c2.5-2.6 3.8-5.2 6.1-5.2A25.6 25.6 0 0 0 51.2 9a30 30 0 0 0-7.8-4.7C36.7 7.5 32 7.8 32 12z"
                data-name="layer1"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
            <div class="caption">Nature</div>
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
          <div class="h1 display-2">Speakers</div>
          <div class="line"></div>
        </div>
        <div class="speakers">
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
        <div class="more-info">
          For more information about speakers,
          <span @click="route(1)">Click Here</span>
        </div>
      </section>
      <section class="speakers-section">
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
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/1.jpg?raw=true",
        },
        {
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/2.jpg?raw=true",
        },
        {
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/3.jpg?raw=true",
        },
        {
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/4.jpg?raw=true",
        },
        {
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/5.jpg?raw=true",
        },
        {
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/6.jpg?raw=true",
        },
        {
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/8.jpg?raw=true",
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
    .logo-gif {
      width: 800px;
      height: auto;
      z-index: 1;
      margin: 1.5rem 0;
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
        font-size: x-large;
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
            color: $theme-color;
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
          color: red;
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
        color: red;
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