<template>
  <v-app-bar fixed color="black" dark style="z-index: 1000;">
    <v-toolbar-title>
      <v-img
        alt="Vuetify Logo"
        class="shrink m-3"
        contain
        src="../assets/Header/logo.png"
        transition="scale-transition"
        width="160"
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="hover-color" color="black">Home</v-btn>

      <v-btn class="hover-color" color="black">About</v-btn>

      <v-btn class="hover-color" color="black">Speakers</v-btn>

      <v-btn class="hover-color" color="black">Events</v-btn>

      <v-btn class="hover-color" color="black">Team</v-btn>

      <v-btn class="hover-color" color="black">Contact Us</v-btn>
    </v-toolbar-items>
    <v-btn raised>
      <v-icon color="yellow">mdi-open-in-new</v-icon>
      <span class="ml-2">Register</span>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import "../scss/resources";
.hover-color {
  transition: color 0.3s ease-in;
}
.hover-color:hover {
  color: yellow !important;
}
.hover-color:active {
  color: white !important;
}
</style>