<template>
  <v-app class="pa-0">
    <v-container fill-height>
      <v-flex>
        <v-card class="text-xs-center mx-auto" dark color="cyan darken-4" style="color:white;" outline>
          <v-card-text class="headline font-weight-bold display-4 pa-10 text-xs-center"><span style="color:white; margin:20px;">Congratulations, your booking has been successfully made.</span></v-card-text>
          <v-card-text class="headline font-weight-bold display-4 pa-10 text-xs-center">
            <span style="color:white;"> Thank you for booking with us. We look forward to hosting you.</span>
          </v-card-text>
          <nuxt-link to="/">
            <v-btn flat outline style="margin:20px;">Go Back Home</v-btn>
            </nuxt-link>
        </v-card>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
