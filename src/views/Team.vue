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
      <v-card v-for="(organiser,i) in organisers" :key="i" width="250px" class="mx-auto" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">{{organiser.name}}</v-list-item-title>
            <v-list-item-subtitle>{{organiser.desc}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-img :src="organiser.src" height="auto" eager></v-img>
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
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Carousel/1.jpg?raw=true",
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
    width: 100%;
    min-height: 100vh;
    background-image: url("../assets/Landing Page/black-gradient.jpg");
    color: white;
  }
}
</style>