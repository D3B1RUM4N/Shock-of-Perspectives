<script>
export default {
  name: "LoadingView" // Defines the Vue component name as "LoadingView"
}
</script>

<template>
  <img src="/images/loadings/loadings1/loading1.gif" alt="" class="imgBack"/>
</template>

<style scoped lang="scss">
.imgBack {
  inset: 0; /* Fills the entire container */
  object-fit: cover; /* Scales the image to cover the entire area */
  position: absolute; /* Positioned absolutely */
  object-position: center; /* Centers the image within its container */
}
</style>

