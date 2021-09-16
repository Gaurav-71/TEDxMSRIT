<template>
  <footer class="footer ma-0 mt-3">
    <div class="logo">
      <img src="../assets/Header/logo.png" alt="logos" />
    </div>
    <div class="message my-3">
      THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENSE FROM TED
    </div>
    <div class="contact-container ma-1">
      <ul style="list-style-type: none">
        <li>
          <a href="tel:+91 80084 45852">
            <i class="fa fa-phone size" aria-hidden="true"></i>
          </a>
          <a href="mailto: tedxatramaiah@gmail.com">
            <i class="fa fa-envelope size" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/tedxmsrit/" target="_blank">
            <i class="fa fa-instagram size" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/tedxmsrit/" target="_blank">
            <i class="fa fa-facebook size" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/tedxmsrit" target="_blank">
            <i class="fa fa-twitter size" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tedxmsrit-3672911b7/"
            target="_blank"
          >
            <i class="fa fa-linkedin size" aria-hidden="true"></i>
          </a>
          <a>
            <i @click="route" class="fa fa-user size" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="developer">
      <div class="line"></div>
      <a href="http://linkedin.com/in/gaurav-v-941368194">
        <span>
          Made with
          <i
            class="fa fa-heart"
            aria-hidden="true"
            style="margin: 0 5px; color: red"
          ></i>
          by
        </span>
        Gaurav V
      </a>
    </div>
  </footer>
</template>


<script>
export default {
  methods: {
    route() {
      this.$router.push("/login");
    },
  },
};
</script>




<style lang="scss" scoped>
@import "../scss/_resources.scss";

footer {
  color: white;
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 0;
  background: $black;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  .logo {
    img {
      width: 225px;
      height: auto;
      margin: 1rem 0;
    }
  }
  .message {
    width: 100%;
    background: $theme-color;
    padding: 0.5rem;
    color: white;
    text-align: center;
  }
  ul {
    margin: 1rem 0;
    padding: 0;
    li {
      margin: 0rem;
      a {
        text-decoration: none;
        color: white;
        .size {
          font-size: 35px;
          margin: 0 2rem;
          @include responsive($phone) {
            font-size: 20px;
            margin: 0 1rem;
          }

          @include responsive($small-phone) {
            font-size: 20px;
          }
        }
      }
      a:hover {
        color: $theme-color;
      }
    }
    li:hover {
      color: $theme-color;
    }
  }
  .developer {
    width: 100%;
    color: white;
    text-align: center;
    .line {
      width: 100%;
      height: 1px;
      background: gray;
      margin: 1rem 0;
    }
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: $theme-color;
    }
    span {
      color: white;
    }
  }
}
</style>
