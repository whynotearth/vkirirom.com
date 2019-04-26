<template>
  <div>
    <p class="subheading font-weight-bold text-xs-left pb-3 pt-2">{{ title }}</p>
    <div class="text-xs-left pb-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', ],
}
</script>

<style>

</style>
