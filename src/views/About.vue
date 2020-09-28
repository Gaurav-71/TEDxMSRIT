<template>
  <div class="about-container">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">About</div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      appear
    >
      <div class="about-wrapper">
        <v-card class="long-card" dark raised outlined>
          <v-card-text>
            <p class="display-1 text--primary pb-0 mb-0 card-title">TED</p>
            <div class="mb-5 red--text">Ideas worth spreading</div>
            <div class="white--text card-body">
              Getting access to great ideas hasn’t always been easy. But good
              thing times have changed. The internet has made sharing ideas a
              breeze, and no one is doing it better than TED: Technolgy,
              Entertainment and Design. TED is a nonprofit devoted to spreading
              ideas, usually in the form of short, powerful talks (18 minutes or
              less). TED began in 1984 as a conference where Technology,
              Entertainment and Design converged, and today covers almost all
              topics — from science to business to global issues — in more than
              100 languages. Twice a year, TED holds this conference where
              thought leaders from around the world give some mind-blowing talks
              and then TED posts them online so anyone can watch them for free
              and be inspired by the great ideas and journeys.
            </div>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-actions class="actions">
            <a href="http://twitter.com/TEDTalks" target="_blank">
              <i class="fa fa-twitter size" aria-hidden="true"></i>
            </a>
            <a href="http://www.facebook.com/TED" target="_blank">
              <i class="fa fa-facebook size" aria-hidden="true"></i>
            </a>
            <a href="https://www.ted.com/" target="_blank">
              <i class="fa fa-globe size" aria-hidden="true"></i>
            </a>
          </v-card-actions>
        </v-card>
        <div class="side-flex">
          <v-card dark raised outlined>
            <v-card-text>
              <p class="display-1 text--primary pb-0 mb-0 card-title">TEDx</p>
              <div class="mb-3 red--text">
                Independently organized TED event
              </div>

              <div class="white--text card-body">
                In the spirit of ideas worth spreading, TEDx is a program of
                local, self-organized events that bring people together to share
                a TED-like experience. At a TEDx event, TED Talks video and live
                speakers combine to spark deep discussion and connection. These
                local, self-organized events are branded TEDx, where x =
                independently organized TED event. The TED Conference provides
                general guidance for the TEDx program, but individual TEDx
                events are self-organized. TEDx is a way for anyone to run a
                mini TED-like event in their own town, holds talks around issues
                that matter to your community, free from corporate, political
                and religious agendas. TEDx events are fully planned and
                coordinated independently, on a community-by-community basis.
              </div>
            </v-card-text>
          </v-card>
          <v-card dark raised outlined>
            <v-card-text>
              <p class="display-1 text--primary pb-0 mb-0 card-title">
                TEDxMSRIT
              </p>
              <div class="mb-3 red--text">Ramaiah Institute of Technology</div>

              <div class="white--text card-body">
                TEDxMSRIT is an independently organised TEDx event organised in
                our very own college Ramaiah Institute of Technology, Bangalore.
                TEDxMSRIT strives to bring together people from different walks
                of life and uniting them to form a community that brings about
                new ideas. Our reputed line of speakers is a part of this
                community that we're trying to build. The speakers are
                monumental in contributing ideas that were instrumental in
                changing their lives for the better!
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: $black;
  .about-wrapper {
    width: 100vw;
    padding: 2rem 0;
    widows: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include responsive($tablet-portrait) {
      flex-wrap: wrap;
    }
    @include responsive($phone) {
      flex-wrap: wrap;
    }
    .long-card {
      max-width: 400px;
      min-height: 515px;
      @include responsive($tablet-landscape) {
        max-width: 350px;
        min-height: 595px;
      }
      @include responsive($tablet-portrait) {
        max-width: 80vw;
        min-height: 400px;
        margin: 1rem 0;
      }
      @include responsive($phone) {
        max-width: 320px;
        margin: 1rem 0;
      }
      @include responsive($small-phone) {
        max-width: 280px;
        margin: 1rem 0;
      }
    }
    .card-title {
      color: $theme-color !important;
    }
    .card-body {
      line-height: 1.5rem !important;
    }
    .actions {
      display: flex;
      justify-content: space-around;
      font-size: 30px;
      a {
        color: $theme-color !important;
        transition: color 0.4s ease-in;
      }
      a:hover {
        color: red !important;
      }
    }
    .side-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      .v-card {
        max-width: 60vw;
        min-height: 247px;
        margin: 0.5rem 1rem;
        @include responsive($tablet-landscape) {
          max-width: 60vw;
          margin-right: 0;
        }
        @include responsive($tablet-portrait) {
          max-width: 80vw;
          min-height: 300px;
          margin: 1rem 0;
        }
        @include responsive($phone) {
          max-width: 320px;
          margin: 1rem 0;
        }
        @include responsive($small-phone) {
          max-width: 280px;
          margin: 1rem 0;
        }
      }
    }
  }
}
</style>