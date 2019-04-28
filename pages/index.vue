<template>
  <v-app class="pa-0 homeWrap">
    <v-container
      fluid
      class="pa-0 container1"
    >
      <v-layout row wrap>
        <v-flex xs12 class="homeCarousel">
          <v-carousel hide-controls hide-delimiters :height="carouselHeight">
            <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              :src="item"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex xs12 class="hidden-md-and-up  px-4">
          <BookForm />
        </v-flex>
        <div class="homeTop mt-3 ml-5 hidden-sm-and-down">
          <v-card class="pa-4">
            <v-card-text>
              <BookForm />
            </v-card-text>
          </v-card>
        </div>
      </v-layout>
    </v-container>
    <v-container class="container2">
      <v-layout row wrap>
        <ListCover title="What can we help you to find?">
          <template v-slot:content>
            <v-flex xs4 md4 lg3 v-for="post in posts" :key="post.id" class="pr-3">
              <find-card
                :category="post.category"
                :image="post.image"
                :href="post.href"
              />
            </v-flex>
          </template>
        </ListCover>
        <ListCover title="Top-rated">
          <template v-slot:content>
            <no-ssr>
            <slick ref="slick" :options="slickOptions">
              <v-card>
                <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
              </v-card>
              <v-card>
                <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
              </v-card>
              <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
              <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
              <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
              <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
              <v-img src="https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG" />
            </slick>
            </no-ssr>
          </template>
        </ListCover>
        <ListCover title="Accomodation"></ListCover>
        <ListCover title="Food & Drinks"></ListCover>
        <ListCover title="Experiences"></ListCover>
        <ListCover title="Rental Building"></ListCover>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// components
import ListCover from '@/components/home/ListCover.vue';
import BookForm from '@/components/home/BookForm.vue';
import FindCard from '@/components/home/FindCard.vue';

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
    FindCard,
    ListCover,
  },
  data: () => ({
    // images
    images: [
      FrontendImg,
      Bedroom,
      Bedroom2,
      Kitchen,
      Livingroom,
    ],
    slickOptions: {
      dots: false,
      infinite: false,
      slidesToShow: 6,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 320,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    },
    posts: [
      {
        category: 'Accommodation',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        href: '#accommodation',
      },
      {
        category: 'Restaurants',
        image:
          'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
        href: '#restaurant',
      },
      {
        category: 'Activities',
        image: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
        href: '#activities',
      },
    ],
  }),
  computed: {
    carouselHeight() {
      const curBreakPoint = this.$vuetify.breakpoint.name;
      let height = '100vh';
      if (curBreakPoint === 'xs' || curBreakPoint === 'sm') {
        height = '40vh';
      }
      return height;
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.container1 {
  max-height: calc(100vh - 100px);
}
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
