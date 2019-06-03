<template>
  <v-toolbar class="navBar py-3" flat>
    <v-toolbar-title>
      <nuxt-link to="/"><img :src="Logo" class="mr-5"/></nuxt-link>
    </v-toolbar-title>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
<!--
      <v-btn
        :ripple="false"
        depressed flat
        class="text-capitalize subheading font-weight-bold"
        color="white"
      >Sign Up</v-btn>
      <v-btn
        :ripple="false"
        flat
        color="white"
        class="text-capitalize subheading font-weight-bold"
      >
        Sign in
      </v-btn>
-->
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/img/Logo.svg';

export default {
  data() {
    return {
      Logo,
      search: '',
    };
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.v-toolbar {
  background: transparent;
}
.search {
  box-shadow: 2px 2px 3px $inputShadow;
}

</style>
