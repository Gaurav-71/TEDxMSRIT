<template>
  <v-app-bar fixed color="black" dark style="z-index: 1000">
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
      <v-btn to="/" class="hover-color" color="black" dark>Home</v-btn>

      <v-btn to="/about" class="hover-color" color="black">About</v-btn>

      <v-btn to="/speakers" class="hover-color" color="black">Speakers</v-btn>

      <v-menu dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="hover-color" color="black" v-bind="attrs" v-on="on">
            Events
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn to="/team" class="hover-color" color="black">Team</v-btn>

      <v-btn to="/contact-us" class="hover-color" color="black"
        >Contact Us</v-btn
      >
    </v-toolbar-items>
    <v-btn class="ml-3" raised>
      <v-icon color="yellow">mdi-open-in-new</v-icon>
      <span class="ml-2">Register</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "2015" },
      { title: "2016" },
      { title: "2017" },
      { title: "2019" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import "../scss/resources";
.hover-color {
  transition: color 0.3s ease-in;
}
.hover-color:hover {
  color: yellow !important;
}
</style>