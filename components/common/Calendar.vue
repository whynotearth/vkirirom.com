<template>
  <div>
    <!-- <AirbnbStyleDatepicker
      :trigger-element-id="'datepicker-trigger'"
      :mode="'range'"
      :fullscreen-mobile="true"
      :date-one="dateOne"
      :date-two="dateTwo"
      @date-one-selected="val => { dateOne = val }"
      @date-two-selected="val => { dateTwo = val }"
    /> -->
    <v-date-picker
      v-model="dates"
      multiple
      no-title
      disabled
    ></v-date-picker>
    <v-date-picker
      v-model="dates"
      multiple
      no-title
      disabled
    ></v-date-picker>
  </div>
</template>

<script>
// import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import format from 'date-fns/format';

export default {
  data() {
    return {
      // dateFormat: 'D MMM',
      dates: ['2018-09-15', '2018-09-20'],
    };
  },
};
</script>

<style>

</style>
