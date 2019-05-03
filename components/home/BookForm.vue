<template>
  <div id="bookForm">
    <v-layout row wrap>
      <v-flex xs12>
        <p class="font-weight-bold title mb-3 hidden-sm-and-down">Book accommodation and activities</p>
        <p class="font-weight-bold subheading mb-3 hidden-md-and-up">What can we help you to find?</p>
        <v-text-field
          class="search mb-3"
          prepend-inner-icon="search"
          solo
          flat
          hide-details
          clearable
          label="Meeting at vKirirom Resort"
        >
        </v-text-field>
      </v-flex>
      <v-flex xs6>
        <p class="font-weight-bold subheading mb-1">Check in</p>
        <!-- <v-text-field
          hide-details
          solo
          flat
          label="mm/dd/yy"
        ></v-text-field> -->
        <Calendar
          :mode="'single'"
          label="mm/dd/yy"
          :triggerID="`${visibleID}CheckIn`"
          monthsToShow="2"
          :showInput="true"
          :cardBorder="true"
          :showActionButtons="true"
        />
      </v-flex>
      <v-flex xs6>
        <p class="font-weight-bold subheading mb-1">Check out</p>
        <Calendar
          :mode="'single'"
          label="mm/dd/yy"
          :triggerID="`${visibleID}CheckOut`"
          monthsToShow="2"
          :showInput="true"
          :cardBorder="true"
          :showActionButtons="true"
        />
      </v-flex>
      <v-flex xs12>
        <p class="font-weight-bold subheading mb-1">Guest</p>
        <v-menu
          v-model="guest_menu"
          :close-on-content-click="false"
          transition="slide-y-transition"
          bottom
          full-width
          offset-y
        >
          <v-text-field
            slot="activator"
            placeholder="Guests"
            v-model="guests_text"
            single-line
            hide-details
            solo
            flat
            append-icon="keyboard_arrow_down"
            class="input-text-field-slim"
          />

          <v-list>
            <v-list-tile
              v-for="(item, i) in guest_categories"
              :key="i"
              class="my-2"
            >
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title" class="font-weight-bold" />
                <v-list-tile-sub-title v-html="item.subtitle" />
              </v-list-tile-content>
              <v-spacer/>
              <v-list-tile-action>
                <v-layout
                  row
                  align-center
                  justify-space-around
                >
                  <v-flex>
                    <v-btn
                      outline
                      fab
                      small
                      :disabled="item.amount === 0"
                      color="teal darken-4"
                      class="calculateBtn"
                      @click="removeGuest(i)"
                    >
                      <v-icon>remove</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex class="amount">
                    <div class="px-3 font-weight-bold">{{ item.amount }}</div>
                  </v-flex>
                  <v-flex>
                    <v-btn
                      outline
                      fab
                      small
                      color="teal darken-4"
                      class="calculateBtn"
                      @click="addGuest(i)">
                      <v-icon>add</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-spacer/>
              <v-list-tile-action>
                <v-btn
                  flat
                  color="teal darken-4"
                  :ripple="false"
                  class="text-capitalize font-weight-bold subheading"
                  @click="renderGuestNumber"
                >Apply</v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-flex>
      <v-flex xs12 class="text-xs-right mt-3">
        <v-btn
          color="cyan darken-4"
          :ripple="false"
          dark
          class="text-capitalize font-weight-bold mx-0 searchBtn hidden-sm-and-down"
        >
          Search
        </v-btn>
        <v-btn
          color="cyan darken-4"
          :ripple="false"
          dark
          block
          class="text-capitalize font-weight-bold mx-0 hidden-md-and-up"
        >
          Search
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Calendar from '@/components/common/Calendar.vue';

export default {
  components: {
    Calendar,
  },
  props: ['visibleID'],
  data: () => ({
    guest_menu: false,
    guest_categories: [
      {
        title: 'Adults',
        amount: 0,
      },
      {
        title: 'Children',
        subtitle: 'Ages 2-12',
        amount: 0,
      },
      {
        title: 'Infants',
        subtitle: 'Under 2',
        amount: 0,
      },
    ],
    guests_text: '',
  }),
  methods: {
    addGuest(index) {
      this.guest_categories[index].amount += 1;
      if (
        (index === 1 || index === 2) &&
        this.guest_categories[index - 1].amount === 0
      ) {
        this.guest_categories[index - 1].amount += 1;
      }
    },
    removeGuest(index) {
      if (this.guest_categories[index].amount) {
        this.guest_categories[index].amount -= 1;
      }
    },
    renderGuestNumber() {
      this.guests_text =
        this.guest_categories[0].amount +
        this.guest_categories[1].amount +
        ' guest(s)';
      if (this.guest_categories[2].amount > 0) {
        this.guests_text =
          this.guests_text +
          ', ' +
          this.guest_categories[2].amount +
          ' infant(s)';
      }
      this.guest_menu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

#bookForm {
  border-radius: 5px;
}
.v-text-field {
  box-shadow: 2px 2px 3px $inputShadow;
}
.searchBtn {
  width: 100px;
  border-radius: 5px;
}
.calculateBtn {
  width: 30px;
  height: 30px;
}
.amount {
  width: 42px;
}
</style>
