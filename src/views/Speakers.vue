<template>
  <div class="speaker-container mb-3">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">speakers</div>
    </div>
    <div class="speaker-wrapper">
      <div class="display-3 my-6 white--text">To Be Revealed Soon ....</div>
    </div>
  </div>
</template>


<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
.speaker-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  //min-height: 100vh;
  background-image: $black;

  .speaker-wrapper {
    width: 100vw;
    padding: 2rem 0;
    widows: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>