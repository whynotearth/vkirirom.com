<template>
  <v-img
    :src="place.image"
    height="240px"
    class="py-0"
  >
    <v-layout align-end fill-height class="pa-0 ma-0">
      <v-flex class="pa-0">
        <v-card
          class="descriptionWrap"
        >
          <v-card-text class="px-2 description pt-2" color="white">
            <div class="body-2 font-weight-thin text-capitalize pt-0">{{ place.category }}</div>
            <div class="title font-weight-bold text-capitalize py-2">{{ place.title }}</div>
            <div class="subheading font-weight-thin text-lowercase">${{ place.price }} {{ place.per }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  props: ['place'],
};
</script>

<style scoped lang="scss">
.rounded-card {
  border-radius: 3px;
  overflow: hidden;
}
.descriptionWrap {
  height: 100px;
  background: linear-gradient(180deg, rgba(168, 168, 168, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%);
  .description {
    div {
      color: white;
    }
  }
}
</style>
