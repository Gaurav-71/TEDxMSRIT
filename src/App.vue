<template>
  <v-app>
    <Header />
    <v-main>
      <Landing />
    </v-main>
  </v-app>
</template>

<script>
import Landing from "./views/Landing";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Header,
    Landing,
  },
};
</script>




