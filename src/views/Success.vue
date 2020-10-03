<template>
  <div class="success-reg">
    <v-card dark class="pa-5 elevation-12 mx-5" outlined shaped>
      <v-card-text>
        <p class="display-1 my-1 yellow--text">Registration Succesful !</p>
        <p style="font-size: normal" class="py-2">
          Thank you for registering for the event, we will get in touch with you
          by email soon for further details.
        </p>
        <v-btn to="/contact-us" block color="yellow black--text"
          ><v-icon>mdi-phone</v-icon> Contact Us
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";

.success-reg {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: $black;
}
</style>