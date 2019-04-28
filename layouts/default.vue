<template>
  <v-app>
    <div>
      <Header />
      <v-container grid-list-md text-xs-center fluid class="pa-0">
        <nuxt />
      </v-container>
      <Footer class="hidden-sm-and-down"/>
    </div>
  </v-app>
</template>

<script>
import Footer from '@/components/common/Footer.vue';
import Header from '@/components/common/Header.vue';

export default {
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss" scoped>

.v-toolbar {
  background-color: #fff;
  box-shadow: none;
  border: 1px solid rgba(61, 78, 97, 0.2);
}
</style>
