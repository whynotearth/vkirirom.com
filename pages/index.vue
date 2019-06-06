<template>
  <v-app class="pa-0 homeWrap">
    <v-container
      fluid
      class="pa-0 container1"
      :class="($vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl) ? 'container1Md' : ''"
    >
      <v-layout row wrap>
        <v-flex xs12 class="homeCarousel">
          <v-carousel hide-controls hide-delimiters :height="carouselHeight">
            <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              :src="item"
            ></v-carousel-item>
            <div class="carouselText">
              <p class="headline font-weight-bold px-4" color="white">Book accommodation and activities.</p>
            </div>
          </v-carousel>
        </v-flex>
        <div class="carouselText hidden-md-and-up">
          <p class="headline font-weight-bold px-4" color="white">Book accommodation and activities.</p>
        </div>
        <v-flex xs12 class="hidden-md-and-up px-4 bookFormWrapper">
          <BookForm visibleID="bookFormMD"/>
        </v-flex>
        <div class="homeTop mt-3 ml-5 hidden-sm-and-down">
          <v-card class="pa-4 rounded-card">
            <v-card-text>
              <p class="headline font-weight-bold" color="white">Book accommodation and activities.</p>
            </v-card-text>
            <v-card-text>
              <BookForm visibleID="bookFormSM" />
            </v-card-text>
          </v-card>
        </div>
      </v-layout>
    </v-container>
    <!-- <v-container>
    <div class="text-xs-center mt-3 hidden-sm-and-down">
      <v-btn dark color="cyan darken-4" class="font-weight-bold text-capitalize" style="width:48%; height:6vh;" @click="scrollMeTo('accommodation')">Browse Accommodation</v-btn>
      <v-btn dark color="cyan darken-4" class="font-weight-bold text-capitalize" style="width:48%; height:6vh;" @click="scrollMeTo('top-rated')">See top rated properties</v-btn>
    </div>
    <div class="text-xs-center hidden-md-and-up">
      <v-btn dark block color="cyan darken-4" class="font-weight-bold text-capitalize" @click="scrollMeTo('accommodation')">Browse Accommodation</v-btn>
      <v-btn dark block color="cyan darken-4" class="font-weight-bold text-capitalize" @click="scrollMeTo('top-rated')">See top rated properties</v-btn>
    </div>
    </v-container> -->
    <v-container class="container2 pl-4">
      <v-layout row wrap>
        <!-- <div @click="scrollMeTo('accommodation')">
        <ListCover title="Explore vKirirom Pine Resort">
          <template v-slot:content>
            <v-flex xs12 class="pr-2">
              <slick
                :options="{...slickOptions, arrows: false, draggable: true}"
              >
                <find-card
                  v-for="post in posts"
                  :key="post.id"
                  :category="post.category"
                  :image="post.image"
                  :href="post.href"
                />
              </slick>
            </v-flex>
          </template>
        </ListCover>
        </div> -->
        <!-- <ListCover title="Top-rated" id="top-rated">
          <template v-slot:content>
            <v-flex xs12>
              <slick
                :options="slickOptions"
              >
                <top-rated-card
                  v-for="(post, index) in places"
                  :key="index"
                  :place="post"
                />
              </slick>
            </v-flex>
          </template>
        </ListCover> -->
        <ListCover title="Accommodation" id="accommodation">
          <template v-slot:content>
            <v-flex xs12>
              <slick
                :options="slickOptions"
              >
                <IntroCard
                  v-for="(post, index) in places"
                  :key="index"
                  :place="post"
                />
              </slick>
            </v-flex>
            </template>
        </ListCover>
            <!-- <v-flex xs12>
              <ShowAllBtn title="accommodation" />
            </v-flex> -->
        
<!--
        <ListCover title="Food & Drinks">
          <template v-slot:content>
            <v-flex xs12>
              <slick
                :options="{...slickOptions, arrows: false, draggable: true}"
              >
                <IntroCard
                  v-for="(post, index) in places"
                  :key="index"
                  :place="post"
                />
              </slick>
            </v-flex>
            <v-flex xs12>
              <ShowAllBtn title="food & drinks" />
            </v-flex>
          </template>
        </ListCover>
        <ListCover title="Experiences">
          <template v-slot:content>
            <v-flex xs12>
              <slick
                :options="{...slickOptions, arrows: false, draggable: true}"
              >
                <IntroCard
                  v-for="(post, index) in places"
                  :key="index"
                  :place="post"
                />
              </slick>
            </v-flex>
            <v-flex xs12>
              <ShowAllBtn title="Activities" />
            </v-flex>
          </template>
        </ListCover>
        <ListCover title="Rental Building">
          <template v-slot:content>
            <v-flex xs12>
              <slick
                :options="{...slickOptions, arrows: false, draggable: true}"
              >
                <IntroCard
                  v-for="(post, index) in places"
                  :key="index"
                  :place="post"
                  width="430px"
                />
              </slick>
            </v-flex>
          </template>
        </ListCover>
-->
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
// components
import ListCover from '@/components/home/ListCover.vue';
import BookForm from '@/components/home/BookForm.vue';
import FindCard from '@/components/home/cards/FindCard.vue';
import TopRatedCard from '@/components/home/cards/TopRatedCard';
import IntroCard from '@/components/home/cards/IntroCard';
import ShowAllBtn from '@/components/home/ShowAllButton';

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
    TopRatedCard,
    IntroCard,
    ShowAllBtn,
  },
  data: () => ({
    slickComp: '',
    // images
    images: [
      FrontendImg,
      // Bedroom,
      // Bedroom2,
      // Kitchen,
      // Livingroom,
    ],
    slickOptions: {
      dots: true,
      infinite: false,
      slidesToScroll: 5,
      variableWidth: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 5,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1
          }
        }
      ]
    },
    posts: [
      {
        category: 'Accommodation',
        image:
          'https://www.vkirirom.com/images/detailsimage/bungalow/bungalow2.jpg',
        href: '#accommodation',
        title: 'Auto Camping',
        price: '45',
        per: 'night',
        refName: 'accommodation',
      },
    ],
    places: [
      {
        category: 'Accommodation',
        title: 'Bungalow',
        image:
          'https://res.cloudinary.com/die9ji2vn/image/upload/v1559801041/Bungalow_1_ledef7.jpg',
        price: '80',
        href: '#',
        per: 'night',
        slug: 'Bungalow'
      },
      {
        category: 'Accommodation',
        title: 'Luxury Tent',
        image:
          'https://res.cloudinary.com/die9ji2vn/image/upload/v1559801013/Luxury_Tent_1_e755jg.jpg',
        price: '80',
        href: '#',
        per: 'night',
        slug: 'Luxury-Tent'
      },
      {
        category: 'Accommodation',
        title: 'Khmer Cottage',
        image:
          'https://www.vkirirom.com/images/detailsimage/khmercottage/khmercottage1.JPG',
        price: '50',
        href: '#',
        per: 'night',
        slug: 'Khmer-Cottage'
      },
      {
        category: 'Accommodation',
        title: 'Camping',
        image:
          'https://res.cloudinary.com/die9ji2vn/image/upload/v1559801033/Camping_1_mqqhyf.jpg',
        price: '30',
        href: '#',
        per: 'night',
        slug: 'Camping'
      },
      {
        category: 'Accommodation',
        title: 'Pipe Room',
        image:
          'https://res.cloudinary.com/die9ji2vn/image/upload/v1559800987/Pipe_Room_1_lheut2.jpg',
        price: '30',
        href: '#',
        per: 'night',
        slug: 'Pipe-Room'
      },
      {
        category: 'Accommodation',
        title: 'Villa Suite',
        image:
          'https://res.cloudinary.com/die9ji2vn/image/upload/v1559800960/Villa_Suite_1_tsmo2b.jpg',
        price: '50',
        href: '#',
        per: 'night',
        slug: 'Villa-Suite'
      },
      {
        category: 'Accommodation',
        title: 'Villa Jasmine',
        image:
          'https://res.cloudinary.com/die9ji2vn/image/upload/v1559800971/Villa_Jasmine_1_tqe47i.jpg',
        price: '30',
        href: '#',
        per: 'night',
        slug: 'Villa-Jasmine'
      },
    ],
  }),
  computed: {
    carouselHeight() {
      const curBreakPoint = this.$vuetify.breakpoint.name;
      let height = '55vh';
      if (curBreakPoint === 'xs' || curBreakPoint === 'sm') {
        height = '40vh';
      }
      return height;
    },
  },
  methods: {
    scrollMeTo(el) {
      const element = document.getElementById(el);
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.rounded-image{
  border-radius: 10px;
}
.rounded-card {
  border-radius: 10px;
  overflow: hidden;
}

.bookFormWrapper {
  margin-top: -80px;
}
.carouselText {
  margin-top: -150px;
  p {
    color: white;
  }
}
.container1Md {
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
  top: 0;
}
@media screen and (max-width: 480px) {
  .carouselText {
    margin-top: -180px;
  }
}
@media (min-width: 1440px) {
  .listingContainer.container {
    max-width: 1200px;
  }
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


<!--
{
  category: 'Restaurants',
  image:
    'https://www.healthline.com/hlcmsresource/images/News/food-fads/070615_restaurants_THUMB_LARGE.jpg',
  href: '#restaurant',
  title: 'Auto Camping',
  price: '40',
  per: 'night',
},
{
  category: 'Activities',
  image: 'https://www.vkirirom.com/images/Activity/BubbleSoccer.jpg',
  href: '#activities',
  title: 'Auto Camping',
  price: '55',
  per: 'person',
},
-->
