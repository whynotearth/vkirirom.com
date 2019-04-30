<template>
  <div>
    <a class="btnMore my-1 title hidden-sm-and-down">Show all<v-icon>keyboard_arrow_right</v-icon></a>
    <div class="hidden-md-and-up hiddenMd">
      <a class="btnMore my-1 subheading pa-2">Show all {{ title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/scss/base.scss';

.hiddenMd {
  border: 1px solid $primaryDark;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  a {
    margin: 0 auto;
    display: table;
  }
}
</style>
