<template>
  <div>
    <!-- <v-menu
      transition="slide-y-transition"
      bottom
      full-width
      close-on-click
      offset-y
      id="recommendSearchMenu"
    > -->
      <v-autocomplete
        slot="activator"
        prepend-inner-icon="search"
        placeholder="Search"
        v-model="search"
        clearable
        single-line
        hide-details
        hide-no-data
        solo
        flat
        class="input-text-field-slim"
        :items="searchList"
        item-text="content"
        item-value="content"
        :menu-props="{'openOnClick': false}"
      >
        <!-- <template v-slot:selection="data">
          {{ data.item.content }}
        </template> -->
        <template v-slot:item="data">
          <v-list-tile>
            <v-list-tile-avatar><v-icon>schedule</v-icon></v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ data.item.content }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ data.item.type }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-autocomplete>
      <!-- <v-list>
        <v-list-tile
          v-for="(item, index) in searchList"
          :key="index"
        >
          <v-list-tile-avatar><v-icon>schedule</v-icon></v-list-tile-avatar>
          <v-list-tile-title>{{ item.content }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendSearchMenu: false,
      search: '',

      searchList: [
        {
          listType: 'recentSearch',
          content: 'Cambodia Post, Phnom Penh',
          type: 'anytime',
        },
        {
          listType: 'recentSearch',
          content: 'Cambodia Town, Long Beach, CA',
          type: 'anytime',
        },
      ],
      searchRecommendList: [
        { header: 'Explore vKiriom Pine Resort' },
        {
          listType: 'pineResort',
        },
        { header: 'Recent Searches' },
        {
          listType: 'recentSearch',
          content: 'Cambodia Post, Phnom Penh',
          type: 'anytime',
        },
        {
          listType: 'recentSearch',
          content: 'Cambodia Town, Long Beach, CA',
          type: 'anytime',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.search {
  box-shadow: 2px 2px 3px $inputShadow;
}
.v-input__append-inner {
  display: none;
}
.recommendSearchMenu {
  top: 75px;
  left: 130px;
}
</style>
