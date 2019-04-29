<template>
  <v-card flat :min-width="width">
    <v-img
      :src="place.image"
      aspect-ratio="1.5"
    ></v-img>
    <v-card-text class="pl-0 pr-3 description pt-2" color="white">
      <div class="body-2 font-weight-thin text-capitalize pt-0">{{ place.category }}</div>
      <div class="title font-weight-bold text-capitalize py-2">{{ place.title }}</div>
      <div class="subheading font-weight-thin text-lowercase">${{ place.price }} {{ place.per }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    place: {
      type: Object,
      default: () => {},
    },
    width: {
      type: String,
      default: '284px',
    },
  },
};
</script>

<style>

</style>
