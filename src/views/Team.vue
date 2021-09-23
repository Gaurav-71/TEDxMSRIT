<template>
  <div class="team-container">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">Team</div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      appear
    >
      <div class="teams mt-5">
        <v-card
          v-for="(organiser, i) in organisers"
          :key="i"
          width="300px"
          height="360px"
          dark
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">{{
                organiser.name
              }}</v-list-item-title>
              <v-list-item-subtitle>{{ organiser.desc }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img
            v-show="organiser.loaded"
            :src="organiser.src"
            height="290px"
            :key="i"
            eager
            @load="onImageLoad(i)"
          ></v-img>
          <v-skeleton-loader
            v-show="!organiser.loaded"
            height="250"
            width="300"
            type="card"
          ></v-skeleton-loader>
        </v-card></div
    ></transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      organisers: [
        {
          name: "Trupthi Joshi",
          desc: "Curator, Organiser and Licensee",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/trupthi.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Kaushik Singh",
          desc: "Co-organiser",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/kaushik.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Dheeraj Bhat",
          desc: "Coordinator",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/dheeraj.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Gaurav V",
          desc: "Head,  Graphic Design & Website",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/gaurav.jpg?raw=true",
          loaded: false,
        },
        {
          name: "Aishwarya G",
          desc: "Head, Design",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/aishwarya.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Divya",
          desc: "Head,  Content Curation ",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/divya.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Aravind Shreyas",
          desc: "Head, Sponsorship",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/shreyas.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Nidhi Kulkarni",
          desc: "Head,  Publicity",
          src: "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/nidhi.jpeg?raw=true",
          loaded: false,
        },
      ],
    };
  },
  methods: {
    onImageLoad(index) {
      this.organisers[index].loaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
.team-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: $black;
  .teams {
    padding-bottom: 5rem;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .v-card {
      margin: 1rem 0;
      .headline {
        color: $theme-color !important;
      }
    }
  }
}
</style>