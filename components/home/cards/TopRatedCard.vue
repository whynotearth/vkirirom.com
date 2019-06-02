<template>
<nuxt-link to="/listing">
  <v-img
    :src="place.image"
    height="271px"
    min-width="218px"
    class="py-0 rounded-image"
  >
    <v-layout align-end fill-height class="pa-0 ma-0 descriptionWraptop">
      <v-flex class="pa-0">
        <v-card
          class="descriptionWrap rounded-card"
        >
          <v-card-text class="px-2 description pt-2" color="white">
            <div class="body-2 font-weight-thin text-capitalize pt-0">{{ place.category }}</div>
            <div class="title font-weight-bold text-capitalize py-2">{{ place.title }}</div>
            <div class="subheading font-weight-thin text-lowercase">${{ place.price }} {{ place.per }}</div>
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-img>
</nuxt-link>
</template>

<script>
export default {
  props: ['place'],
  methods: {
  }
};
</script>

<style scoped lang="scss">
.rounded-image{
  border-radius: 10px;
}
.rounded-card {
  border-radius: 10px;
  overflow: hidden;
}
.descriptionWraptop {
  padding-top: 30px !important;
}
.descriptionWrap {
  height: 95px;
  // padding-top: calc(100% - 100px);
  background: linear-gradient(180deg, rgba(168, 168, 168, 0.56) 0%, rgba(0, 0, 0, 0.56) 100%);
  .description {
    div {
      color: white;
    }
  }
}
</style>
