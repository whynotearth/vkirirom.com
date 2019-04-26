<template>
  <v-footer class="py-3">
    <v-container>
      <v-card flat tile>
        <v-card-text class="px-0">
          <v-btn flat class="subheading font-weight-bold text-capitalize">Accommodation</v-btn>
          <v-btn flat class="subheading font-weight-bold text-capitalize">Restaurant</v-btn>
          <v-btn flat class="subheading font-weight-bold text-capitalize">Activities</v-btn>
          <v-btn flat class="subheading font-weight-bold text-capitalize">Shuttle Bus Booking</v-btn>
          <!-- <v-spacer></v-spacer> -->
          <v-btn
            class="mx-3"
            icon
            style="float: right"
          >
            <v-icon inverted size="35px">fab fa-instagram</v-icon>
          </v-btn>
          <v-btn
            class="mx-3"
            style="float: right"
            icon
          >
            <v-icon size="35px">fab fa-facebook</v-icon>
          </v-btn>
        </v-card-text>
        <v-card-actions class="bottomFooter pl-3">
          <div class="subheading">Copyright &copy; {{ new Date().getFullYear() }} | vKiriom Pine Resort co.Ltd. All Right Reserved.</div>
          <div class="language">
            <img :src="Flag"/>
            <div class="subheading">English</div>
          </div>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
import Flag from '@/assets/img/flagUS.svg';

export default {
  data() {
    return {
      Flag,
    }
  }
};
</script>

<style lang="scss" scoped>
.language {
  display: flex;
  align-items: center;
  .subheading {
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px;
    border-left: none;
  }
}
.bottomFooter {
  display: flex;
  justify-content: space-between;
}
</style>
