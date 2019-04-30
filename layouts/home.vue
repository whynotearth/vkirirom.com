<template>
  <v-app class="homeLayout">
    <div>
      <HeaderHome />
      <v-container grid-list-md text-xs-center fluid class="pa-0">
        <nuxt />
      </v-container>
      <Footer />
      <!-- <Footer class="hidden-sm-and-down"/> -->
    </div>
  </v-app>
</template>

<script>
import HeaderHome from '@/components/common/HeaderHome.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    HeaderHome,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.homeLayout {
  background: transparent;
}
</style>
