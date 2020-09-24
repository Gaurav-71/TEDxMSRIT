<template>
  <div class="team-container mb-3">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">Team</div>
    </div>
    <div class="teams">
      <v-card
        v-for="(organiser, i) in organisers"
        :key="i"
        width="250px"
        height="250px"
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
        <v-img :src="organiser.src" height="250px" eager></v-img>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organisers: [
        {
          name: "Trupthi Joshi",
          desc: "Curator, Organiser and Licensee",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/trupthi.jpeg?raw=true",
        },
        {
          name: "Kaushik Singh",
          desc: "Co-organiser",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/kaushik.jpeg?raw=true",
        },
        {
          name: "Dheeraj Bhat",
          desc: "Coordinator",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/dheeraj.jpeg?raw=true",
        },
        {
          name: "Gaurav V",
          desc: "Head,  Graphic Design & Website",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/gaurav.jpg?raw=true",
        },
        {
          name: "Divya",
          desc: "Co-Head,  Content Writing ",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/divya.jpeg?raw=true",
        },
        {
          name: "Tia",
          desc: "Co-Head,  Content Writing",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/tia.jpeg?raw=true",
        },
        {
          name: "Aishwarya G",
          desc: "Co-Head,  Stage Design",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/aishwarya.jpeg?raw=true",
        },
        {
          name: "Yasa Usman",
          desc: "Co-Head,  Stage Design",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/yasa.jpeg?raw=true",
        },
        {
          name: "Nidhi Kulkarni",
          desc: "Co-Head,  Publicity",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/nidhi.jpeg?raw=true",
        },
        {
          name: "Diya Wadhwani",
          desc: "Co-Head,  Publicity",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/diya.jpeg?raw=true",
        },
        {
          name: "Shriya Mahan",
          desc: "Co-Head,  Sponsorship",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/shriya.jpeg?raw=true",
        },
        {
          name: "Chandini Deb",
          desc: "Co-Head,  Sponsorship",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/chandini.jpeg?raw=true",
        },
        {
          name: "Aravind Shreyas",
          desc: "Head in Training, Sponsorship",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/shreyas.jpeg?raw=true",
        },
        {
          name: "Aditya KK",
          desc: "Co-Head,  Logistics",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/aditya.jpeg?raw=true",
        },
        {
          name: "Aniruddh Herle",
          desc: "Co-Head,  Logistics",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Organisers/anirudh.jpeg?raw=true",
        },
      ],
    };
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
      margin: 3rem 0;
      .headline {
        color: $theme-color !important;
      }
    }
  }
}
</style>