<template>
  <div class="speaker-container">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-1">
        {{ events[$store.state.eventYearOrder].theme }}
      </div>
      <div class="display-1 image-subtitle white--text pl-10 pb-10">
        {{ events[$store.state.eventYearOrder].date }}
      </div>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      appear
    >
      <div class="speaker-wrapper" :key="$store.state.eventYearOrder">
        <div class="heading">
          <div class="h1 display-1">About</div>
          <div class="line"></div>
        </div>
        <p class="white--text px-10">
          {{ events[$store.state.eventYearOrder].description }}
        </p>
        <div class="heading">
          <div class="h1 display-1">Speakers</div>
          <div class="line"></div>
        </div>
        <div class="speakers">
          <v-card
            v-for="(speaker, i) in events[$store.state.eventYearOrder].speakers"
            :key="i"
            width="265px"
            height="370px"
            raised
            outlined
            dark
          >
            <v-img
              v-show="speaker.loaded"
              :src="speaker.src"
              height="250px"
              eager
              @load="onImageLoad(i)"
            ></v-img>
            <v-skeleton-loader
              v-show="!speaker.loaded"
              height="370"
              width="265"
              type="card"
            ></v-skeleton-loader>
            <v-card-title class="custom-color">
              {{ speaker.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ speaker.description }}
            </v-card-subtitle>
          </v-card>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  data() {
    return {
      events: [
        {
          theme: "An Illusion called Success",
          date: "September 12, 2015",
          description:
            "The dictionary defines Success as'the accomplishment of an aim or purpose'. Perception of Success varies from one individual to another,Success is something that cannot be bound by parameters. , one comes to wonder, What is Success? Is it Satisfaction? Freedom? A whole new Identity altogether? Or an ultimate Maze of inescapable Illusion? We all tend to ponder upon the mysteries of what lies Beyond. Ultimately, is it everything what one hoped for? TEDxMSRIT 2015 is an endeavour to discover the secrets and mysteries of success. Be a part of this exhuberant experience, while the Connoisseur of varied fields share their story.",
          speakers: [
            {
              name: "Natya STEM Kampni",
              description: "Professional Dancers and Choreographers",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/NatyaSTEMDanceKampni.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Ali Khwaja",
              description:
                "Educationalist, Life skills trainer, Motivational speaker and Writer",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/AliKhwaja.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Madhu Nataraj Kiran",
              description:
                "Performer, choreographer, educator and arts entrepreneur",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/MadhuNatarajKiran.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Rajdeep Manwani",
              description:
                "Academician, Trainer, Motivational Speaker and Quizmaster",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/RajdeepManwani.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Ramesh Aravind",
              description: "Actor, writer, director, producer and TV host",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/RameshAravind.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Saveen Hegde",
              description:
                "Award Winning speaker,humorist, entrepreneur, anchor",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/SaveenHegde.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Varijashree Venugopal",
              description: "Carnatic vocalist, Playback singer, and flautist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/VarijashreeVenugopal.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Vasanthi Hariprakash",
              description:
                "Journalist, TV & Radio anchor, Show host and Media trainer",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/VasanthiHariprakash.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Vikram Sridhar",
              description:
                "Story teller, Social worker and Theatre practitioner",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2015/VikramSridhar.jpg?raw=true",
              loaded: false,
            },
          ],
        },
        {
          theme: "Sonder",
          date: "September 17,2016",
          description:
            "The realization that each random passerby is living a life as vivid and complex as your own ”populated with their own ambitions, friends, routines, worries and inherited craziness”an epic story that continues invisibly around you like an anthill sprawling deep underground, with elaborate passageways to thousands of other lives that you will never know existed, in which you might appear only once, as an extra sipping coffee in the background, as a blur of traffic passing on the highway, as a lighted window at dusk.",
          speakers: [
            {
              name: "Dr.Vikram Huded",
              description: "Consultant Interventional and stroke specialist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2016/VikramHuded1.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Harish Sivaramakrishnan",
              description: "Engineer, Designer and a rockstar",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2016/HarishSivaramakrishnan.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Madhuvanthi Ananth",
              description: "Founder, CEO at SlamdunQ",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2016/MadhuvanthiAnanth.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Naresh Narasimhan",
              description: "Architect, Urbanist and Activist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2016/NareshNarasimhan.jpeg?raw=true",
              loaded: false,
            },
            {
              name: "Samvit Menon",
              description: "Physicist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2016/SamvitMenon.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Sinu Joseph",
              description:
                "Educator, counselor, writer, project coordinator and activist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2016/SinuJoseph.jpeg?raw=true",
              loaded: false,
            },
          ],
        },
        {
          theme: "Shadow",
          date: "September 9, 2017",
          description:
            "TEDxMSRIT strives to bring together people from different walks of life and uniting them to form a community that brings about new ideas. Our reputed line of speakers are a part of this community that we're trying to build. The speakers are monumental in contributing ideas that were instrumental in changing their lives for the better! Come and witness this attempt of the TEDxMSRIT family and be a part of it!",
          speakers: [
            {
              name: "Dr. Naveen Bagalkot",
              description:
                "Interaction design researcher with a background in Architecture",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/naveenbagalkot.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Dr.Sarthak Kamath",
              description: "Junior resident in Psychiatry at KIMS hospital",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/Dr.SarthakKamath.jpg?raw=true",
              loaded: false,
            },

            {
              name: "Mr. Sanjay Koppikar",
              description: "CEO of Quadwave, author, Evangelist and Rotarian",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/Mr.SANJAYKOPPIKAR.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Mr. Satish Perumal",
              description:
                "Engineering to advertising and finally to stand up comedy",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/Mr.SatishPerumal.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Ms. Priyanka Diwaakar",
              description: "First Transgender Radio Jockey of the country",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/Ms.PriyankaDiwaakar.jpeg..jpeg?raw=true",
              loaded: false,
            },
            {
              name: "Ms. Shilok Mukkati",
              description:
                "Community Radio Journalist at Radio Active CR 90.4 MHz",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/Ms.ShilokMukkati.jpeg?raw=true",
              loaded: false,
            },
            {
              name: "N Santosh Hegde",
              description:
                "Chief Justice of India, solicitor general and a Lokayukta member",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/NSANTOSHHEGDE.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Sugandha Sukrutaraj",
              description: "Founder of AMBA and author of its curriculum",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2017/SugandhaSukrutaraj.jpeg?raw=true",
              loaded: false,
            },
          ],
        },
        {
          theme: "Mudita",
          date: "March 2nd, 2019",
          description:
            "Here, O, Monks, a disciple lets his mind pervade one quarter of the world with thoughts of unselfish joy, and so the second, and so the third, and so the fourth. And thus the whole wide world, above, below, around, everywhere and equally, he continues to pervade with a heart of unselfish joy, abundant, grown great, measureless, without hostility or ill-will.",
          speakers: [
            {
              name: "Archana Timmaraju",
              description: "Social Activist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/ArchanaTimmaraju.png?raw=true",
              loaded: false,
            },
            {
              name: "Cohan Sujay Carlos",
              description: "CEO, ML Researcher and Consultant",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/CohanSujayCarlos.jpg?raw=true",
              loaded: false,
            },
            {
              name: "D.B. Rai",
              description: "Indian Arm Veteran",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/DBRai.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Dr. Prabha S. Chandra",
              description: "Psychiatrist, teacher",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/PrabhaSChandra.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Girish Badragond",
              description: "Innovator, partner at Santepp System",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/GirishBadragond.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Kimsain Jidung",
              description: "Development professional & Rehabilitator",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/KimsainJidung.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Ms. Anuradha Vikranth",
              description: "Professional Dancer",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/AnuradhaVikranth.jpg?raw=true",
              loaded: false,
            },
            {
              name: "Mr. Daniel Sundaram",
              description: "A sculptor and art teacher",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/DanielSundaram.jpg?raw=true",
              loaded: false,
            },
            {
              name: "N.M. Prathap",
              description: "Scientist",
              src:
                "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2019/prathap.jpg?raw=true",
              loaded: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    onImageLoad(index) {
      this.events[this.$store.state.eventYearOrder].speakers[
        index
      ].loaded = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_resources.scss";
.speaker-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-image: $black;

  .image-header {
    position: relative;
    z-index: 2;
    border-bottom: 2px solid grey;
    .image-title {
      position: absolute;
      bottom: 5.5rem;
      left: 0;
      z-index: 3;
      font-family: "Anton", sans-serif !important;
      text-transform: uppercase;
      color: $theme-color !important;
      @include responsive(phone) {
        font-size: small !important;
      }
    }
    .image-subtitle {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;
      font-family: "Anton", sans-serif !important;
      text-transform: uppercase;
    }
  }

  .speaker-wrapper {
    width: 100vw;
    padding: 0 0 0rem 0;
    widows: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: large;
      line-height: 2rem;
    }
    .speakers {
      padding-bottom: 5rem;
      width: 100%;
      color: white;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .v-card {
        margin: 1rem 0;
        .headline {
          color: $theme-color !important;
        }
        .custom-color {
          color: $theme-color;
        }
      }
    }
  }
}
</style>