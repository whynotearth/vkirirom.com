<template>
  <div class="rating">
    <div class="starWrapper">
      <div class="starImg" :style="{width: rating * 12 + 'px'}"/>
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
    width: 60px;
    height: 15px;
    margin-right: 3px;
    .starImg {
      height: 15px;
      background-image: url('../../assets/img/stars-filled.png');
    }
  }
}
</style>
