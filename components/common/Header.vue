<template>
  <v-toolbar class="navBar py-3">
    <v-toolbar-title>
      <img :src="Logo" class="mr-5"/>
    </v-toolbar-title>
    <v-text-field
      v-model="search"
      class="search"
      prepend-inner-icon="search"
      solo
      flat
      hide-details
      clearable
    >
      <template v-slot:label>
        <span class="font-weight-bold ml-4">
          Search
        </span>
      </template>
    </v-text-field>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn :ripple="false" depressed flat class="text-capitalize font-weight-bold">Sign Up</v-btn>
      <v-btn :ripple="false" flat class="text-capitalize font-weight-bold">Sign in</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import Logo from '@/assets/img/logo.svg';

export default {
  data() {
    return {
      Logo,
      search: '',
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.search {
  box-shadow: 2px 2px 3px $inputShadow;
}
</style>
