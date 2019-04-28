<template>
  <v-app class="pa-0 homeWrap">
    <v-container
      fluid
      class="hidden-sm-and-down pa-0"
    >
      <v-layout row wrap>
        <v-flex xs12 class="hidden-sm-and-down homeCarousel">
          <v-carousel hide-controls hide-delimiters height="100vh">
            <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <div class="homeTop mt-3 ml-5">
          <v-card class="pa-4">
            <v-card-text>
              <BookForm />
            </v-card-text>
          </v-card>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// components
import BookForm from '@/components/home/BookForm.vue';

// images
import FrontendImg from '../assets/img/FrontImage.png';
import Bedroom from '../assets/img/Bedroom.svg';
import Bedroom2 from '../assets/img/Bedroom2.svg';
import Kitchen from '../assets/img/Kitchen.svg';
import Livingroom from '../assets/img/Livingroom.svg';

export default {
  layout: 'home',
  components: {
    BookForm,
  },
  data: () => ({
    // images
    images: [
      FrontendImg,
      Bedroom,
      Bedroom2,
      Kitchen,
      Livingroom,
    ]
  }),
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.homeWrap {
  background: transparent;
}
.homeCarousel {
  position: relative;
  top: -100px;
  z-index: -1;
}
.homeTop {
  border-radius: 5px;
  width: 500px;
  position: absolute;
  max-width: 1080px !important;
  top: 150px;
}

@media screen and (min-width: 1440px) {
  .homeTop {
    left: 200px;
  }
}
@media screen and (min-width: 1200px) {
  .homeTop {
    left: 100px;
  }
}
@media screen and (max-width: 1200px) {
  .homeTop {
    left: 50px;
  }
}
</style>
