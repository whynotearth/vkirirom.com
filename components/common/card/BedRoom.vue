<template>
  <v-card>
    <v-card-text primary-title>
      <div class="cover">
        <img :src="doubleBed" />
        <img :src="singleBed" />
        <p class="subheading pt-4 font-weight-bold">Bedroom {{ index }}</p>
        <div><p v-if="double">{{ double }} double beds</p></div>
        <div><p v-if="single">{{ single }} single beds</p></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import doubleBed from '@/assets/img/icons/double-bed.svg';
import singleBed from '@/assets/img/icons/single-bed.svg';

export default {
  props: ['index', 'double', 'single'],
  data() {
    return {
      // images
      doubleBed,
      singleBed,
    };
  },
};
</script>

<style lang="scss" scoped>
.cover {
  height: 120px;
}
</style>
