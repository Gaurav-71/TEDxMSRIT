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
        class="my-5 py-5 elevation-15"
      >
        <v-list-item class="my-flex">
          <v-list-item-avatar tile size="220" color="transparent">
            <v-img :src="speaker.src"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline yellow--text mb-3 px-5">
              {{ speaker.name }}
            </v-list-item-title>
            <div class="px-5">
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
          name: "Mehul Manjeshwar",
          description:
            "Mehul Manjeshwar, born and raised in Qatar and Canada, currently leads the marketing and sustainability communications at Bare Necessities. He shares the story of the brand through meaningful partnerships, words, and actions. Being a firm believer in the impact of communication, raising awareness, and education being the foundation of change, he has always been passionate about sustainability. Mehul completed his MBA in the field to learn about the life cycle of products and how every process has an impact on the environment. He spent years studying and volunteering his time for environmental causes in Canada, Costa Rica, and Indonesia to raise awareness of the problems that our world faces today. Mehul is a Climate Reality Leader having had the opportunity to be trained during the Climate Reality Leadership Corps with former Vice President Al Gore among other knowledgeable experts in the sustainability field. He continually inspires communities to create a better lifestyle and live sustainably. With the conviction that the world is capable of finding a balance between technology and non-conformism, Mehul believes that sustainability is not about giving up either side completely but about finding the best of both worlds.",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Square/Mehul.jpeg?raw=true",
        },
        {
          name: "Qian Wang",
          description:
            "Dr. Qian Wang, the author of over 20 research publications, many of which are based on the study of photocatalysts and their use in solar energy conversion, has been working as a researcher at the Department of Chemistry at the University of Cambridge, UK. She is currently working on the generation of renewable energy via artificial photosynthesis as an alternative to fossil fuels. Harvesting sunlight to convert water and carbon dioxide into chemical fuels has been a promising technology but has faced challenges like the assembly of efficient, selective and scalable systems without sacrificial reagents and external bias. The technology that Dr. Wang is working on, is referred to as ‘artificial leaf’ which can convert sunlight, carbon dioxide, and water into hydrogen and other carbon-based fuels. The breakthrough has been cited by many news journals, including BBC news, The Times, News Atlas, Innovation origins and DesignNews. It is hoped that this technology will pave the way toward sustainable and practical solar fuel production. We are honored to have Dr. Qian Wang address the “Energy” problem statement and are excited to know more about her discoveries in the field.",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Square/Qian.jpeg?raw=true",
        },
        {
          name: "Samarth Kholkar",
          description:
            "Samarth Kholkar, Co-Founder and CEO at B:Live is currently leading the Growth, Customer Experience and Technology functions at the company. The goal behind B:Live is to drive adoption of sustainable mobility. The team has tirelessly worked to bring together leading technology, EV infrastructure, and immersive consumers experiences. It is the pioneer of ‘Electric Vehicle Tourism’ in India and has partnered with various state tourism departments and premium hotels to build the country’s first EV Tourism ecosystem. BLive has just launched India’s first multi brand EV Store to drive adoption of EVs. Samarth's journey in the field of bringing sustainability to Tourism has been an inspiring one. We are truly honoured to have Mr. Samarth Kholkar discuss “sustainable travel”, and are really excited to learn from his ways to bring our planet to a better future.",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Square/Samarth.jpeg?raw=true",
        },
        {
          name: "Venkat Charloo",
          description:
            "Venkat Charloo, a banker by profession, has always been passionate about marine conversation. He worked in Hong Kong for 11 years before deciding to quit the rat race and start recreational scuba diving in Goa, India, in 1995. He founded Coastal Impact with the intention of building awareness about marine ecosystems and motivating people to become divers and ‘ocean ambassadors’ , as well as join in to save Goa’s precious marine life. Besides conducting underwater surveys for Central Marine Fisheries Research Institiute, Worldwide Fund for Nature, The National Institute of Oceanography (the very first UNDP funded survey of remote submerged reefs at Angria Banks) and a number of independent marine biologists and NGOs all over the West coast of India, Venkat has also done the sole surveys India for sharks for The Paul Allen Family Foundation (Bill Gates' partner in Microsoft) owned Global Finprint,which completed a worldwide survey for sharks and rays. This year, Coastal Impact will be completeling the Microfragmentation Coral Reef Transplantation Project and is looking to start a Environmental DNA project to do a comprehensive study of underwater biodiversity all over the west coast of India next year. We are honoured to have him address 'Nature' problem statement and excited to learn from his research and practices throughout his journey.",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Square/Venkat.jpeg?raw=true",
        },
        {
          name: "Shailesh Awathe",
          description:
            "Shailesh Awate, A Farmer & Teacher. A co-founder of OOO farms. Gave up his comfortable Business in Mumbai. Along with his friends wanting to do something about the growing deforestation taking place inside the Sahyadri hills of western India. Ever since he was a young boy, Awate trekked the hills of this biodiversity and had grown concerned about this issue after which he found out that the indigenous people who used to practice sustainable farming were now growing produce for urban markets due to the road construction which led them to cut down forests. Traditional farming methods were abandoned and Industrial Agricultural models-provided hybrid seeds, fertilizers and pesticides were used which damaged the ecosystem. Awate and his friends developed the passion to tackle this issue and encourage sustainable Agroforestry farming with environmental protection. After a long struggle and focus to save the forest, OOO farms was formed training farmers to follow sustainable Primitive methods of farming with indigenous seeds, Conserving & Propagating them through Seed Banks . He along with his Friends have designed few Successful Economical Models for Farmers He has also been instrumental in devicing and Teaching a Subject for School Students 'Graam- Village' to groom minds to move towardsTodays Village and reversing Village Drain, OOO Farm works with 800 Farmer Families in 42 Village Hamlets over a Span of 650 kms of Sahyadri Range growing 45 varieties of indigenous grains and more than 100 types of wild food. Awate believes that this endeavor will positively impact and help tribal communities realize that they are the custodians of the heritage to protect, conserve and increase forest produce.",
          src:
            "https://github.com/Gaurav-71/TEDx-Countdown/blob/master/src/assets/Speakers/2020/Square/Shailesh.jpeg?raw=true",
        },
      ],
    };
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
</style>