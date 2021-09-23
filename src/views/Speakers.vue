<template>
  <div class="speaker-container">
    <div class="image-header">
      <v-img
        src="../assets/Organisers/header.png"
        class="black--text align-end header-length"
        eager
      ></v-img>
      <div class="display-3 image-title white--text pl-10 pb-10">speakers</div>
    </div>
    <div class="speaker-wrapper">
      <v-card
        v-for="(speaker, i) in speakers"
        :key="i"
        dark
        style="width: 80vw"
        outlined
        class="my-5 py-2 elevation-15"
      >
        <v-list-item class="my-flex">
          <v-list-item-avatar tile size="220" color="transparent">
            <v-img
              v-show="speaker.loaded"
              :src="speaker.src"
              eager
              @load="onImageLoad(i)"
            ></v-img>
            <v-skeleton-loader
              v-show="!speaker.loaded"
              height="200"
              width="220"
              type="card"
              class="black--text align-end"
            ></v-skeleton-loader>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline red--text mb-3 px-5">
              {{ speaker.name }}
            </v-list-item-title>
            <div class="px-5 line-height">
              {{ speaker.description }}
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      speakers: [
        {
          name: "Meghna Reddy G",
          description:
            "A 21-year-old Rhythmic Gymnast hailing from Hyderabad, Telangana, became the first-ever Indian to qualify for the Gold Coast Commonwealth Games in 2018 in this sport of Rhythmic Gymnastics, scoring the highest for the country. Starting off at a comparatively older age of 11 in a sport which wasn’t much known in our country, Meghana had to go to the US for her training due to the lack of facilities available in our country for this sport. Since then, she learned the right techniques of the game with her international training exposure across the globe including the USA, UK, Uzbekistan, Greece, Russia, and Italy. Ranked number one rhythmic gymnast in the country, Meghna can make you see the magic of movements. Defying all odds, Meghana has bagged gold for our country in the Fifth Friendly International Tournament which concluded at Del Mare, Italy, making the Indian flag proud. She has participated in the 2018 Gold Coast Commonwealth Games, the 2018 Jakarta Palembang Asian Games, many world championships and has won numerous medals in club-level competitions across the globe. She has also achieved one of the highest scores at the Ness Ziona International Tournament. She is now focused on Commonwealth games 2022 and Paris Olympics 2024, inspiring all of us.",
          src: "https://github.com/Gaurav-71/TEDxMSRIT/blob/master/src/assets/Speakers/2021/Meghana.jpg?raw=true",
          loaded: false,
        },
        {
          name: "Dr. Taslimarif Saiyed",
          description:
            "CEO and director of The Centre for Cellular and Molecular Platforms, or C-CAMP an initiative supported by the Department of Biotechnology, Govt of India. Dr. Saiyed started from his training in neurosciences, receiving his Ph.D. from Max-Planck Institute for Brain research situated in Germany followed by postdoctoral training at The University of California, San Francisco. He has actively taken part in biotech management and training at UC Santa Cruz, Berkeley, and San Francisco. He is currently an adjunct faculty at the Indian Institute of Technology, Madras, and Amrita Institute-School of Biotechnology. Dr. Saiyed is a strong believer in India’s potential as an innovation powerhouse. He believes in how establishing frameworks around three vital ingredients and implementing them systematically can drive India’s growth for decades. The three ingredients are a framework that facilitates the generation and curation of ideas, deep-tech investment strategies, and a bold vision with a clear view of how to realize growth in every focus sector. He also firmly believes about how the next step to powering India’s growth is establishing a seamless value chain for idea-to-market technology development.",
          src: "https://github.com/Gaurav-71/TEDxMSRIT/blob/master/src/assets/Speakers/2021/Taslim.jpg?raw=true",
          loaded: false,
        },
        {
          name: "Tanvie Hans",
          description:
            "An Indian footballer. From kicking ball for some of the most coveted women’s football teams and currently playing in India as the Karnataka State Women's Football Team Captain, 'Tanvie Hans' journey has been an inspiring one. She started playing football at the age of 8 and competed under multiple age groups until 2008 when she was called up to play for the Indian Football team under-19 but was not allowed to play as she was holding a British passport. She then went on to pursue her Masters from the University of Exeter. With a taste for the English women’s League, she moved back to London and tried out with the women’s league. She is an Ex-Tottenham (2013-15) & Ex- Fulham Ladies player (2015-16). She has played for Sethu FC in 2017-18 IWL and the Bangalore United. She plays as the captain of Parikrma Girls FC and is the co-founder of Sisters in Sweat, a fitness & wellness community, exclusively for women, that is comprised of over 1500 women who are scattered all across the globe. It offers physical sessions not only in football but a variety of sports such as box cricket, basketball. It is a community wherein women not only sweat together but also support one another and fix each other's crowns. Tanvie has been leaving her mark on society through her multiple endeavors in the area of football and wellness.",
          src: "https://github.com/Gaurav-71/TEDxMSRIT/blob/master/src/assets/Speakers/2021/Tanvie.jpg?raw=true",
          loaded: false,
        },
        {
          name: "Dr. Suresh Bada Math",
          description:
            "Professor of Psychiatry and Head of Forensic Psychiatry Centre and Unit V at National Institute of Mental Health and Neuro Sciences. Dr Suresh completed his MBBS and thereafter MD in Psychiatry. He earned various degrees throughout his academic career such as DNB in Psychiatry, Post-Graduate Diploma in Medical Ethics and Law, Post-Graduate Diploma in Human Rights and Law and PhD in Law. He led a landmark study as a principal investigator in 2009 titled ‘The Bangalore Prison Mental Health Study: Local Lessons for National Action’, which was funded by Karnataka State Legal Service Authority, Karnataka. He played a crucial role in starting Free Legal Aid clinic at NIMHANS institute in collaboration with Karnataka State Legal Service Authority, Karnataka in 2011. His keen interest in research has led him to be an investigator in various research projects that are depicted through the 333 publications in national and international journals including 12 books. He has been honored with ‘Prof Raghuram’s - Distinguished Young Teacher Award, in the 25th Annual Conference of Indian Psychiatric Society – Karnataka Chapter and Dr C. V. Raman Young Scientist Award in Medical Field for the year 2015-16 by Government of Karnataka.",
          src: "https://github.com/Gaurav-71/TEDxMSRIT/blob/master/src/assets/Speakers/2021/Suresh.jpeg?raw=true",
          loaded: false,
        },
        {
          name: "Nithya Rao",
          description:
            "a psychologist, entrepreneur, actor and artist who specializes in the spaces of self-expression, business coaching, entrepreneurship, event management, and most of all creative innovation. Nithya completed her Bachelor's degree in Theatre, Literature & Psychology from Christ University; and a Master's degree in Psychosocial Rehabilitation and Counselling from the Richmond Fellowship society. She is recognized by India Today as one of India's top 5 entrepreneurs to look out for. She is a co-founder of Heart it Out, a mental health and well-being startup that has shaped and positively influenced over 20000 individuals. She and her team strongly believe in and are working towards de-stigmatizing mental health complications in our country. They offer mental health and therapeutic services across Urban India with the aim to make mental health care accessible to 1.5 billion people of India by 2040. She has also co-founded Name Katharsis, A theatre production house dedicated to portraying real-life stories on stage. She also works with the Global shaper’s community, a non-profit organization working to address local, regional and global challenges and other social causes.",
          src: "https://github.com/Gaurav-71/TEDxMSRIT/blob/master/src/assets/Speakers/2021/Nithya.jpg?raw=true",
          loaded: false,
        },
      ],
    };
  },
  methods: {
    onImageLoad(index) {
      this.speakers[index].loaded = true;
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
  //min-height: 100vh;
  background-image: $black;

  .speaker-wrapper {
    width: 100vw;
    padding: 2rem 0;
    widows: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .v-list-item {
      display: flex !important;
      flex-wrap: wrap !important;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @include responsive($phone) {
        flex-direction: column;
      }
    }
    .v-application--is-ltr .v-list-item__avatar:first-child {
      margin-right: 0px;
    }
  }
}

.line-height {
  line-height: 1.5rem;
  text-align: justify;
}
</style>