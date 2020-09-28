<template>
  <v-container class="fill-height my-bgrnd" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card dark class="elevation-12 pa-5">
          <v-toolbar dark flat>
            <v-toolbar-title>Admin Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                label="Email"
                name="email"
                prepend-icon="mdi-email"
                type="email"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn light color="yellow" @click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data() {
    return {
      email: "tedxatramaiah@gmail.com",
      password: "",
    };
  },
  methods: {
    login() {
      let data = { email: this.email, password: this.password };
      this.$store
        .dispatch("login", data)
        .then(() => {
          this.$router.push("/admin/home");
        })
        .catch((err) => {
          alert(err);
          this.password = "";
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_resources.scss";
.my-bgrnd {
  background-image: $black;
  min-height: 100vh;
}
</style>