<template>
  <div>
    <v-text-field
      solo
      flat
      hide-details
      label="Check-in > Checkout"
      append-icon="calendar_today"
      id="datepicker-trigger"
      :value="formatDates(dateOne, dateTwo)"
    ></v-text-field>
    <AirbnbStyleDatepicker
      class="airBnBDatePicker"
      :trigger-element-id="'datepicker-trigger'"
      :mode="'range'"
      :months-to-show="1"
      :fullscreen-mobile="true"
      :date-one="dateOne"
      :date-two="dateTwo"
      @date-one-selected="val => { dateOne = val }"
      @date-two-selected="val => { dateTwo = val }"
    />
  </div>
</template>

<script>
import format from 'date-fns/format';
// import component and stylesheet
export default {
  data() {
    return {
      dateFormat: 'D MMM',
      dateOne: '',
      dateTwo: '',
    };
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
};
</script>
