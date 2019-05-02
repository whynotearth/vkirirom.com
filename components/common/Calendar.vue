<template>
  <div>
    <v-text-field
      solo
      flat
      hide-details
      label="Check-in > Checkout"
      append-icon="calendar_today"
      :id="triggerID"
      :value="formatDates(dateOne, dateTwo)"
      v-if="showInput"
    ></v-text-field>
    <div v-else :id="triggerID"></div>
    <AirbnbStyleDatepicker
      class="airBnBDatePicker"
      :class="cardBorder ? '' : 'borderHiddin'"
      :trigger-element-id="triggerID"
      :mode="'range'"
      :inline="!showInput"
      :months-to-show="monthsToShow"
      :fullscreen-mobile="true"
      :date-one="dateOne"
      :date-two="dateTwo"
      :showActionButtons="showActionButtons"
      @date-one-selected="val => { dateOne = val }"
      @date-two-selected="val => { dateTwo = val }"
    />
  </div>
</template>

<script>
import format from 'date-fns/format';
// import component and stylesheet
export default {
  props: ['triggerID', 'monthsToShow', 'showInput', 'cardBorder', 'showActionButtons'],
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
