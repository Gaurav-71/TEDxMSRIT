<template>
  <div class="parallax-container my-3">
    <div class="parallax-wrap">
      <div class="parallax-inner"></div>
    </div>
    <section class="countdown-container">
      <div class="date-time">
        <div class="date">
          <img src="../assets/Landing Page/calendar.svg" alt />
          <div class="data">
            <h3>OCT 17th 2020</h3>
          </div>
        </div>
        <div class="date">
          <div @click="route()" class="data data-2">
            <div class="btn flashy">Register Now</div>
          </div>
        </div>
      </div>
      <div class="circle-container">
        <div class="circle days">
          <h1>{{ days }}</h1>
          <h1>Days</h1>
        </div>
        <div class="circle hours">
          <h1>{{ hours }}</h1>
          <h1>Hours</h1>
        </div>
        <div class="circle mins">
          <h1>{{ minutes }}</h1>
          <h1>Mins</h1>
        </div>
        <div class="circle secs">
          <h1>{{ seconds }}</h1>
          <h1>Secs</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    route() {
      this.$router.push("/register");
    },
    countdown() {
      let end = new Date("2020-10-17");
      let start = new Date();
      let remTime = end.getTime() - start.getTime();
      let mm = Math.floor(remTime / (1000 * 60));
      let hh = Math.floor(mm / 60);
      let dd = Math.floor(hh / 24);
      let ss = Math.floor(remTime / 1000);
      hh %= 24;
      mm %= 60;
      ss %= 60;
      hh = hh < 0 ? "0" : hh < 10 ? "0" + hh : hh;
      mm = mm < 0 ? "0" : mm < 10 ? "0" + mm : mm;
      ss = ss < 0 ? "0" : ss < 10 ? "0" + ss : ss;
      this.days = dd;
      this.hours = hh;
      this.minutes = mm;
      this.seconds = ss;
      if (start >= end) {
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
      setTimeout(this.countdown, 1000);
    },
  },
  created() {
    this.countdown();
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/resources";
@import "../scss/parallax";

.parallax-container {
  .countdown-container {
    z-index: 999;
    padding: 1.5rem 0;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @include responsive($phone) {
      flex-wrap: wrap;
      padding-bottom: 2rem;
    }
    .date-time {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 0 1.5rem;
      @include responsive($phone) {
        margin: 1rem 3rem;
      }
      .date,
      .time {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        @include responsive($phone) {
          flex-direction: column;
        }
      }
      .date {
        img {
          width: 55px;
          height: 55px;
        }
        .data,
        .data-2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          margin-left: 0.5rem;
          font-size: large;
          h3 {
            margin: 0;
            font-size: x-large;
            @include responsive($phone) {
              margin: 1rem 0 0.5rem 0;
            }
          }
          h4 {
            margin: 0;
            margin: 0.3rem 0;
            font-weight: lighter;
            color: #e4335c;
            cursor: pointer;
          }
          h4:hover {
            color: darken(#e4335c, 10%);
          }
        }
        .data-2 {
          align-items: center;
          h3 {
            color: #2a176d;
            margin: 0.8rem 0;
          }
        }
        margin-bottom: 1rem;
      }
      .btn {
        background: $theme-color;

        padding: 1rem 5rem;
        color: black;
        border-radius: 0.8rem;
        box-shadow: 5px 8px 10px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: 0.3s all ease-in;
      }
      .btn:hover {
        background: radial-gradient(
            circle at 11% 62%,
            rgba(205, 205, 205, 0.04) 0%,
            rgba(205, 205, 205, 0.04) 50%,
            rgba(149, 149, 149, 0.04) 50%,
            rgba(149, 149, 149, 0.04) 100%
          ),
          radial-gradient(
            circle at 78% 10%,
            rgba(49, 49, 49, 0.04) 0%,
            rgba(49, 49, 49, 0.04) 50%,
            rgba(254, 254, 254, 0.04) 50%,
            rgba(254, 254, 254, 0.04) 100%
          ),
          radial-gradient(
            circle at 92% 43%,
            rgba(34, 34, 34, 0.04) 0%,
            rgba(34, 34, 34, 0.04) 50%,
            rgba(206, 206, 206, 0.04) 50%,
            rgba(206, 206, 206, 0.04) 100%
          ),
          linear-gradient(329deg, rgb(241, 157, 33), rgb(218, 227, 61));
      }
      .btn:active {
        transform: scale(0.9);
      }
      .flashy {
        animation: shake-btn 1s linear infinite;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      }
      .flashy:hover {
        background-image: radial-gradient(
            circle at 11% 62%,
            rgba(205, 205, 205, 0.04) 0%,
            rgba(205, 205, 205, 0.04) 50%,
            rgba(149, 149, 149, 0.04) 50%,
            rgba(149, 149, 149, 0.04) 100%
          ),
          radial-gradient(
            circle at 78% 10%,
            rgba(49, 49, 49, 0.04) 0%,
            rgba(49, 49, 49, 0.04) 50%,
            rgba(254, 254, 254, 0.04) 50%,
            rgba(254, 254, 254, 0.04) 100%
          ),
          radial-gradient(
            circle at 92% 43%,
            rgba(34, 34, 34, 0.04) 0%,
            rgba(34, 34, 34, 0.04) 50%,
            rgba(206, 206, 206, 0.04) 50%,
            rgba(206, 206, 206, 0.04) 100%
          ),
          linear-gradient(329deg, rgb(241, 157, 33), rgb(218, 227, 61));
      }
    }
    .circle-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      @include responsive($phone) {
        flex-wrap: wrap;
      }
      .circle {
        width: 170px;
        height: 170px;
        border-radius: 50%;
        background: black;
        background-image: $black;
        border: 2px solid yellow;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
        box-shadow: 0px 0px 10px 0px rgb(0, 0, 0, 1);
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 2rem;
        @include responsive($tablet-landscape) {
          width: 150px;
          height: 150px;
          margin: 0 1rem;
        }
        @include responsive($tablet-portrait) {
          width: 90px;
          height: 90px;
          margin: 0 1rem;
        }
        @include responsive($phone) {
          width: 140px;
          height: 140px;
          margin: 1rem 0;
        }
        h1 {
          font-weight: lighter;
          font-size: xx-large;
          margin-top: 0;
          margin-bottom: 0.3rem;
          @include responsive($tablet-landscape) {
            font-size: xx-large;
          }
          @include responsive($tablet-portrait) {
            font-size: large;
          }
          @include responsive($phone) {
            font-size: medium;
          }
        }
      }
    }
  }
}

@keyframes shake-btn {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}
</style>