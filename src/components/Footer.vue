<template>
  <footer class="footer ma-0">
    <!--
    <div class="company">
      <div class="tedx">
        <div class="image-cont">
          <img src="../assets/Header/logo.png" alt="logo" />
        </div>
        <ul style="list-style-type: none;">
          <li>
            <i class="fa fa-phone" aria-hidden="true" style="margin:10px; color:white"></i> +91-6364335551
          </li>
          <li>
            <i class="fa fa-globe" aria-hidden="ture" style="margin:10px; color:white"></i>
            <a href="https://www.bgc-genomics.com" target="_blank">www.bgc-genomics.com</a>
          </li>
          <li>
            <a href="https://www.instagram.com/bengalurugenomics/" target="_blank">
              <i
                class="fa fa-instagram"
                aria-hidden="true"
                style=" margin:15px 15px 15px 10px; color:white"
              ></i>
            </a>
            <a href="https://facebook.com/bengaluru.genomics.center" target="_blank">
              <i class="fa fa-facebook" aria-hidden="true" style=" margin:15px; color:white"></i>
            </a>
            <a href="https://www.linkedin.com/in/bengaluru-genomics-center" target="_blank">
              <i class="fa fa-linkedin" aria-hidden="ture" style=" margin:15px; color:white"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="admin">
        <div class="conf-email">
          <h3>Conference Email</h3>
          <span>
            <i class="fa fa-envelope" aria-hidden="ture" style="margin:10px; color:white"></i> info@worldcovidconf.com
          </span>
          <a
            href="https://www.facebook.com/Advances-in-COVID-110800634049499/?modal=admin_todo_tour"
          >
            <i class="fa fa-facebook" aria-hidden="true" style=" margin:15px; color:white"></i> Facebook
          </a>
        </div>
        <div class="admin-container">
          <h3>Administrator</h3>
          <ul style="list-style-type: none;">
            <li @click="route" style="cursor: pointer;">
              <i class="fa fa-user" aria-hidden="true" style="margin:10px; color:white"></i> Login
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="developer grow">
      <div class="line"></div>
      <a href="http://linkedin.com/in/gaurav-v-941368194">
        <span>
          Made with
          <i class="fa fa-heart" aria-hidden="true" style="margin:0 5px; color:red"></i> by
        </span> Gaurav V
      </a>
    </div>-->
    <div class="logo">
      <img src="../assets/Header/logo.png" alt="logos" />
    </div>
    <div class="message my-3">THIS INDEPENDENT TEDX EVENT IS OPERATED UNDER LICENSE FROM TED</div>
    <div class="contact-container ma-1">
      <ul style="list-style-type: none;">
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
          <a href="https://www.linkedin.com/in/tedxmsrit-3672911b7/" target="_blank">
            <i class="fa fa-linkedin size" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="developer">
      <div class="line"></div>
      <a href="http://linkedin.com/in/gaurav-v-941368194">
        <span>
          Made with
          <i class="fa fa-heart" aria-hidden="true" style="margin:0 5px; color:red"></i> by
        </span> Gaurav V
      </a>
    </div>
  </footer>
</template>
<!--
<script>
export default {
  name: "Footer",
  methods: {
    route() {
      this.$router.push("/login");
    },
  },
};
</script>-->

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
    color: black;
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
            font-size: 25px;
            margin: 0 1.5rem;
          }
          @include responsive($small-phone) {
            font-size: 25px;
            margin: 0 1rem;
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
  /*
  .company {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    @include responsive($tablet-portrait) {
      width: 90%;
      text-align: center;
    }
    ul {
      margin: 0;
      padding: 0;
      li {
        margin: 0;
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          color: $theme-color;
        }
      }
      li:hover {
        color: $theme-color;
      }
    }
    .tedx {
      .image-cont {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        img {
          margin-top: 0.5rem;
          width: 200px;
          height: auto;
        }
      }
    }
    .happi {
      .image-cont {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        img {
          width: 65px;
          height: 75px;
        }
      }
    }
  }
  .conf-email {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: white;
    }
    a:hover {
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
      background: black;
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
  @media print {
    display: none;
  }*/
}
</style>
