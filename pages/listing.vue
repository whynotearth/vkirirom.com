<template>
  <v-app class="pa-0 listing">
    <v-container-fluid class="pa-0">
      <v-layout row flex class="pa-0 mx-0">
        <v-flex xs12 sm12 md6 class="pa-0 overflow-hidden hidden-sm-and-down">
          <v-img class="image" v-if="resort.images.length > 0" :src="resort.featuredImage" aspect-ratio="1.7"></v-img>
        </v-flex>
        <v-flex xs12 class="hidden-md-and-up">
          <!-- <v-carousel hide-controls>
            <v-carousel-item
              v-for="(item,i) in images"
              :key="i"
              :src="resort.img"
            ></v-carousel-item>
          </v-carousel> -->
          <v-img class="image" v-if="resort.images.length > 0" :src="resort.featuredImage"></v-img>
        </v-flex>
        <v-flex xs12 sm6 class="pa-0 ma-0 overflow-hidden hidden-sm-and-down">
          <v-layout row flex class="pa-0 ma-0 overflow-hidden">
            <v-flex xs12 sm6 class="pa-0 overflow-hidden">
              <v-img class="image ma-0 pa-0" v-if="resort.images.length > 0" :src="resort.images[0].url" aspect-ratio="1.7"></v-img>
            </v-flex>
            <v-flex xs12 sm6 class="pa-0 overflow-hidden">
              <v-img class="image" v-if="resort.images.length > 0" :src="resort.images[1].url" aspect-ratio="1.7"></v-img>
            </v-flex>
          </v-layout>
          <v-layout row flex class="pa-0 ma-0 overflow-hidden">
            <v-flex xs12 sm6 class="pa-0 overflow-hidden">
              <v-img class="image" v-if="resort.images.length > 0" :src="resort.images[2].url" aspect-ratio="1.7"></v-img>
            </v-flex>
            <v-flex xs12 sm6 class="pa-0 overflow-hidden">
              <v-img class="image" v-if="resort.images.length > 0" :src="resort.images[3].url" aspect-ratio="1.7"></v-img>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container-fluid>
    <v-container class="listingContainer">
      <v-layout row flex>
        <v-flex sm12 md8 class="mb-5 pb-5">
          <p class="text-xs-left subheading text-uppercase font-weight-light pt-3">
            Entire {{resort.title}}
          </p>
          <p class="text-xs-left display-1 text-capitalize font-weight-black pb-3 pt-1">
            {{resort.title}}
          </p>
          <div class="text-xs-left py-4">
            <p class="subDescription">
              <img class="mr-2" :src="MultiUsers" />
              <span class="mr-5 font-weight-bold">{{ resort && resort.modules && resort.modules.hotel && resort.modules.hotel.capacity }} guests</span>
              <!-- <span class="mr-5 font-weight-bold">{{ bedRooms.length }} bedrooms</span> -->
              <span class="font-weight-bold mr-5">Beds: {{ resort && resort.modules && resort.modules.hotel && resort.modules.hotel.beds[0] && resort.modules.hotel.beds[0].count }} </span>
              <span class="font-weight-bold"> Type: {{ resort && resort.modules && resort.modules.hotel && resort.modules.hotel.beds[0] && resort.modules.hotel.beds[0].type }} </span>
            </p>
          </div>
          <v-divider></v-divider>
          <ListSection title="Description" class="pt-3">
            <template v-slot:content>
              <p>{{ theSpaceConent }}</p>
            </template>
          </ListSection>
          <ListSection title="Location">
            <template v-slot:content>
              <a href="https://goo.gl/maps/NusquSFKVm2SHrDy7">Go to Location</a>
            </template>
          </ListSection>
          <ListSection title="Spaces" class="pt-3">
            <template v-slot:content>
              <p>{{resort && resort.modules && resort.modules.hotel && resort.modules.hotel.spaces[0]}}</p>
            </template>
          </ListSection>
          <ListSection title="Getting Around" class="pb-5">
            <template v-slot:content>
              <p>{{resort && resort.modules && resort.modules.hotel && resort.modules.hotel.gettingAround}}</p>
            </template>
          </ListSection>
          <v-divider></v-divider>
          <ListSection title="Amenities" class="py-3">
            <template v-slot:content>
              <v-layout row wrap>
                <v-flex xs8 md10>
                  <v-layout row wrap>
                    <v-flex xs6 md3 class="py-3">
                      <Amenity :imgURL="wifi" name="Wifi" />
                    </v-flex>
                    <v-flex xs6 md3 class="py-3">
                      <Amenity :imgURL="HairDryer" name="Hair Dryer" />
                    </v-flex>
                    <v-flex xs6 md3 class="py-3">
                      <Amenity :imgURL="Washer" name="Washer" />
                    </v-flex>
                    <v-flex xs6 md3 class="py-3">
                      <Amenity :imgURL="cutlery" name="Kitchen" />
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs4 md2></v-flex>
              </v-layout>
              <!-- <v-expand-transition>
                <div v-show="showAmenities">
                  <v-layout row wrap>
                    <v-flex xs8 md10>
                      <v-layout row wrap>
                        <v-flex xs6 md3 class="py-3">
                          <Amenity :imgURL="wifi" name="Wifi" />
                        </v-flex>
                        <v-flex xs6 md3 class="py-3">
                          <Amenity :imgURL="HairDryer" name="Hair Dryer" />
                        </v-flex>
                        <v-flex xs6 md3 class="py-3">
                          <Amenity :imgURL="Washer" name="Washer" />
                        </v-flex>
                        <v-flex xs6 md3 class="py-3">
                          <Amenity :imgURL="cutlery" name="Kitchen" />
                        </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs4 md2></v-flex>
                  </v-layout>
                </div>
              </v-expand-transition> -->
            </template>
          </ListSection>
          <!-- <a
            class="btnMore"
            @click.prevent="showAmenities= !showAmenities"
          >
            {{ showAmenities ? 'Hide Amenities' : 'Show All Amenities' }}
          </a> -->
          <v-divider class="mt-3"></v-divider>
          <ListSection title="Sleep Arrangements" class="py-3">
            <template v-slot:content>
              <v-layout row flex>
                <v-flex xs12 v-for="(room, index) in bedRooms" :key="index">
                  <BedRoom
                    :index="index + 1"
                    :double="room.double"
                    :single="room.single"
                  />
                </v-flex>
              </v-layout>
            </template>
          </ListSection>
          <v-divider></v-divider>
          <ListSection title="Availability" class="py-3">
            <template v-slot:content>
              <v-layout row flex>
                <v-flex xs12 class="availability">
                  <p>Updated 3 days ago</p>
                  <Calendar
                    :fullScreenMobile="false"
                    :mode="'range'"
                    triggerID="availability"
                    monthsToShow="2"
                    :showInput="false"
                    :cardBorder="false"
                    :showActionButtons="false"
                  />
                </v-flex>
              </v-layout>
            </template>
          </ListSection>
          <ListSection title="Rules" class="py-3">
            <template v-slot:content>
              <p>{{resort && resort.modules && resort.modules.hotel && resort.modules.hotel.rules[0]}}</p>
            </template>
          </ListSection>
          <v-divider></v-divider>
          <ListSection title="Cancellations" class="py-3">
            <template v-slot:content>
              <p class="subheading font-weight-bold">Moderate</p>
              <p class="pb-3">
                If cancelled, modified or in case of no-show, the first night will be charged.
              </p>
              <a
                class="btnMore"
                @click="showPolicy = !showPolicy"
              >
                {{ showPolicy ? 'Hide the policy' : 'Read more about the policy' }}
              </a>
              <v-expand-transition>
                <div v-show="showPolicy" class="mt-3">
                  <v-stepper value="2" alt-labels>
                    <v-stepper-header>
                      <v-stepper-step step="1" complete>Reservation confirmed</v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step step="2">7 days before check-in</v-stepper-step>
                      <v-divider></v-divider>
                      <v-stepper-step step="3">Check-In</v-stepper-step>
                    </v-stepper-header>
                  </v-stepper>
                </div>
              </v-expand-transition>
            </template>
          </ListSection>
        </v-flex>
        <v-flex md4 class="hidden-sm-and-down">
          <v-card class="pa-4 mt-5 ml-2 bookForm">
            <v-form name="bookForm" action="" method="post" netlify>
           <input type="hidden" name="form-name" value="bookForm" />
              <v-layout row wrap>
              <v-flex xs12>
                <p class="subheading text-xs-center pb-2">
                  <span class="priceLetter font-weight-bold">&dollar;{{ pricePerNight }}</span>
                  <span class="priceDesc">per night</span>
                </p>
                <!-- <Rating :rating="rating" :counter="counter"/> -->
                <v-divider class="pt-2"></v-divider>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="name"
                  solo
                  flat
                  label="Enter your Name"
                  name="Name"
                  append-icon="person_outline"
                  required
                  :error-messages="nameErrors"
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  solo
                  flat
                  label="Enter your e-mail address"
                  name="E-mail"
                  append-icon="email"
                  required
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  solo
                  flat
                  v-model="phone"
                  label="Phone"
                  name="Phone"
                  append-icon="local_phone"
                  required
                  :error-messages="phoneErrors"
                  @input="$v.phone.$touch()"
                  @blur="$v.phone.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <p>Select Dates</p>
              <v-btn dark color="cyan darken-4" id="datepicker" block>
                <input
                type="text"
                id="datepicker"
                placeholder="Select dates"
                :value="formatDates(dateOne, dateTwo)"
                >
              </v-btn>
              <AirbnbStyleDatepicker
                :trigger-element-id="'datepicker'"
                :mode="'range'"
                :fullscreen-mobile="false"
                :date-one="dateOne"
                :date-two="dateTwo"
                @date-one-selected="val => { dateOne = val }"
                @date-two-selected="val => { dateTwo = val }"
              />
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  solo
                  flat
                  hide-details
                  name="Message"
                  label="Message"
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>
            <v-btn
              block
              color="cyan darken-4"
              :ripple="false"
              dark
              class="text-capitalize font-weight-bold"
              type="submit"
            >
              Book
            </v-btn>
            </v-form>
          </v-card>
        </v-flex>
        <div id="bookBottom" class="hidden-md-and-up book-bottom px-5">
          <div>
            <p class="subheading text-xs-center pb-2">
              <span class="priceLetter font-weight-bold">&dollar;{{ pricePerNight }}</span>
              <span class="priceDesc">per night</span>
            </p>
            <!-- <Rating :rating="rating" :counter="counter"/> -->
          </div>
          <v-dialog v-model="bookDialog">
          <template v-slot:activator="{ on }">
            <v-btn
              color="cyan darken-4"
              :ripple="false"
              dark
              class="text-capitalize font-weight-bold"
              v-on="on"
            >
              Book
            </v-btn>
          </template>
          <v-card class="pa-4 bookForm">
            <v-form name="bookForm" action="" method="post" netlify>
           <input type="hidden" name="bookFor" value="bookForm" />
              <v-layout row wrap>
              <v-flex xs12>
                <p class="subheading text-xs-center pb-2">
                  <span class="priceLetter font-weight-bold">&dollar;{{ pricePerNight }}</span>
                  <span class="priceDesc">per night</span>
                </p>
                <!-- <Rating :rating="rating" :counter="counter"/> -->
                <v-divider class="pt-2"></v-divider>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="name"
                  solo
                  flat
                  label="Enter your Name"
                  name="Name"
                  append-icon="person_outline"
                  required
                  :error-messages="nameErrors"
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  solo
                  flat
                  label="Enter your e-mail address"
                  name="E-mail"
                  append-icon="email"
                  required
                  :error-messages="emailErrors"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  solo
                  flat
                  v-model="phone"
                  label="Phone"
                  name="Phone"
                  append-icon="local_phone"
                  required
                  :error-messages="phoneErrors"
                  @input="$v.phone.$touch()"
                  @blur="$v.phone.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
              <p>Select Dates</p>
              <v-btn dark color="cyan darken-4" id="datepicker-trigger" block>
                <input
                type="text"
                id="datepicker-trigger"
                placeholder="Select dates"
                :value="formatDates(dateOne, dateTwo)"
                >
              </v-btn>
              <AirbnbStyleDatepicker
                :trigger-element-id="'datepicker-trigger'"
                :mode="'range'"
                :fullscreen-mobile="true"
                :date-one="dateOne"
                :date-two="dateTwo"
                @date-one-selected="val => { dateOne = val }"
                @date-two-selected="val => { dateTwo = val }"
              />
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  solo
                  flat
                  hide-details
                  name="Message"
                  label="Message"
                ></v-textarea>
              </v-flex>
            </v-layout>
            <v-btn
              block
              color="cyan darken-4"
              :ripple="false"
              dark
              class="text-capitalize font-weight-bold form-button"
              type="submit"
            >
              Book
            </v-btn>
            </v-form>
          </v-card>
        </v-dialog>
        </div>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import format from 'date-fns/format';

// images
import FrontendImg from '../assets/img/FrontImage.png';
import Bedroom from '../assets/img/Bedroom.svg';
import Bedroom2 from '../assets/img/Bedroom2.svg';
import Kitchen from '../assets/img/Kitchen.svg';
import Livingroom from '../assets/img/Livingroom.svg';

// icons
import wifi from '../assets/img/icons/wifi.svg';
import HairDryer from '../assets/img/icons/hair-dryer.svg';
import Washer from '../assets/img/icons/washing-machine.svg';
import cutlery from '../assets/img/icons/cutlery.svg';
import MultiUsers from '../assets/img/icons/multiple-users-silhouette.svg';

// components
import ListSection from '@/components/Listing/Section';
import Amenity from '@/components/Listing/Amenity';
import BedRoom from '@/components/common/card/BedRoom';
import Calendar from '@/components/common/Calendar';
import Rating from '@/components/common/Rating';


import { validationMixin } from 'vuelidate'
import { required, maxLength, email, } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
      name: { required },
      email: { required, email },
      phone: { required },
    },
  transition: 'test',
  layout: 'default',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      slug: this.$route.params.id,
      resort: {
        images: []
      },
      bookDialog: false,
      // images
      FrontendImg,
      Bedroom,
      Bedroom2,
      Kitchen,
      Livingroom,
      wifi,
      HairDryer,
      Washer,
      cutlery,
      MultiUsers,

      // states

      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: '',

      theSpaceConent: 'City Apartment is newly renovated in the heart of Budapest, right in the city center. Lorem ipsum doior sitamet, consecteture adipiscing elite, sed do eiusmod tempor incidjls.',
      bedRooms: [
        { double: 2, single: 1 },
        { double: 3, single: 0 },
      ],
      subTitle: 'entire villa',
      title: 'villa suite',
      guestNum: 8,
      showAmenities: false,
      showPolicy: false,
      pricePerNight: 51,
      rating: 4.5,
      counter: 390,
      images: [
        FrontendImg,
        Bedroom,
        Bedroom2,
        Kitchen,
        Livingroom,
      ],
    };
  },
  components: {
    ListSection,
    Amenity,
    BedRoom,
    Calendar,
    Rating,
  },
  methods: {
    formatDates(dateOne, dateTwo) {
      let formattedDates = '';
      if (dateOne) {
        formattedDates = format(dateOne, this.dateFormat);
      }
      if (dateTwo) {
        formattedDates += ' - ' + format(dateTwo, this.dateFormat);
      }
      return formattedDates;
    },
  },
   created() {
    this.$http.get('https://stagingapi.whynot.earth/api/v0/pages/slug/vkirirom/'+this.slug).then(function(data){
      this.resort=data.body;
    });
  },
  computed: {
    nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    phoneErrors() {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Phone Number is required')
      return errors
    },
    // image1() { return this.resort.images[0].url;}
  }
};
</script>

<style lang="scss" scoped>
// .listingContainer {
//   padding: 40px 200px;
// }
@media screen and (min-width: 1440px) {
  .listingContainer.container {
    max-width: 1200px;
  }
}
@media screen and (min-width: 1200px) {
  .listingContainer.container {
    max-width: 1000px;
  }
}
// @media screen and (max-width: 1200px) {
//   .listingContainer.container {
//     min-width: 900px;
//   }
// }
.image {
  transition: 0.8s ease;
  -webkit-transition: 0.8s ease;
  &:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
.subDescription {
  display: flex;
  align-items: center;
}

.bookForm {
  position: sticky;
  top:50px;
}

#bookBottom {
  height: 100px;
  width: 100vw;
  background-color: white;
  position: fixed;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,0.12);
  margin-left: -12px;
  z-index: 5;
}
.priceLetter {
  font-size: 28px;
}
.priceDesc {
  margin-left: -3px;
}
</style>
