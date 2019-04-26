<template>
  <div class="rating">
    <div class="starWrapper">
      <div class="starImg" :style="{width: rating * 10 + 'px'}"/>
    </div>
    <div>{{ counter }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    rating: {
      default: 5,
      type: Number,
    },
    counter: {
      default: 0,
      type: Number,
    }
  },
}
</script>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: center;
  .starWrapper {
    width: 50px;
    height: 15px;
    .starImg {
      width: 35px;
      height: 15px;
      // position: relative;
      background-image: url('../../assets/img/stars-filled.png');
    }
  }
}
</style>
