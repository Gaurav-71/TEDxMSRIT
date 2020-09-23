<template>
  <div class="team-container">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        width="100vw"
        height="40vh"
        class="black--text align-end"
        eager
      ></v-img>
      <div class="display-3 team-title white--text pl-10 pb-10">Team</div>
    </div>
    <div class="teams mb-3">
      <v-card v-for="(organiser,i) in organisers" :key="i" width="250px" height="250px" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{organiser.name}}</v-list-item-title>
            <v-list-item-subtitle>{{organiser.desc}}</v-list-item-subtitle>
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
        { name: "Dheeraj Bhat", desc: "Coordinator", src: "" },
        { name: "Gaurav V", desc: "Head of Graphic Design & Website", src: "" },
        { name: "Divya", desc: "Co-Head of Content Writing ", src: "" },
        { name: "Tia", desc: "Co-Head of Content Writing", src: "" },
        { name: "Aishwarya G", desc: "Co-Head of Stage Design", src: "" },
        { name: "Yasa Usman", desc: "Co-Head of Stage Design", src: "" },
        { name: "Nidhi Kulkarni", desc: "Co-Head of Publicity", src: "" },
        { name: "Diya Wadhwani", desc: "Co-Head of Publicity", src: "" },
        { name: "Shriya Mahan", desc: "Co-Head of Sponsorship", src: "" },
        { name: "Chandini Deb", desc: "Co-Head of Sponsorship", src: "" },
        {
          name: "Aravind Shreyas",
          desc: "Head in Training, Sponsorship",
          src: "",
        },
        { name: "Aditya Krishnakumar", desc: "Co-Head of Logistics", src: "" },
        { name: "Aniruddh Herle", desc: "Co-Head of Logistics", src: "" },
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
  .image-header {
    position: relative;
    z-index: 2;
    border-bottom: 2px solid grey;
    .team-title {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      font-family: "Anton", sans-serif !important;
      text-transform: uppercase;
      color: $theme-color !important;
    }
  }
  .teams {
    padding: 3rem 0;
    width: 100%;
    min-height: 100vh;
    background-image: url("../assets/Landing Page/black-gradient.jpg");
    color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>