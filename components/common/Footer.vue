<template>
  <v-footer class="pb-5">
    <v-container>
      <v-card flat tile>
        <v-card-text class="px-0 linkWrapper">
          <div class="otherLinks">
            <v-btn flat class="subheading font-weight-bold text-capitalize">Accommodation</v-btn>
<!--
            <v-btn flat class="subheading font-weight-bold text-capitalize">Restaurant</v-btn>
            <v-btn flat class="subheading font-weight-bold text-capitalize">Activities</v-btn>
            <v-btn flat class="subheading font-weight-bold text-capitalize">Shuttle Bus Booking</v-btn>
-->
          </div>
          <div class="socialLinks my-2">
            <v-btn
              class="mx-3"
              icon
            >
              <v-icon size="35px">fab fa-facebook</v-icon>
            </v-btn>
            <v-btn
              class="mx-3"
              icon
            >
              <v-icon inverted size="35px">fab fa-instagram</v-icon>
            </v-btn>
            <div class="language hidden-sm-and-up">
              <img :src="Flag"/>
              <div class="subheading">English</div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="bottomFooter pl-3 mt-2">
          <div class="subheading">&copy; vKiriom Pine Resort co.Ltd. All Right Reserved.</div>
          <div class="language hidden-xs-only">
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
    };
  },
};
</script>

<style lang="scss" scoped>
footer.v-footer {
  background: white;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.linkWrapper {
  display: flex;
  justify-content: space-between;
}
.otherLinks {
  display: flex;
  justify-content: space-around;
  button {
    padding: 0;
  }
}
@media screen and (max-width: 960px) {
  .linkWrapper {
    display: unset !important;
  }
  .bottomFooter {
    justify-content: space-around;
  }
  .socialLinks {
    display: flex;
    justify-content: space-around;
  }
}
@media screen and (max-width: 567px) {
  .otherLinks {
    display: flex;
    flex-direction: column;
  }
}
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
