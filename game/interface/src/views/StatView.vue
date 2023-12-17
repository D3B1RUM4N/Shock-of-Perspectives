<script>
export default {
  name: "StatView",

  computed: {
    player() {
      return this.$store.state.player;
    },
  }
}
</script>

<template>
  <div class="ecran">
    <p>Calm : {{ this.player.calm }}</p>
    <p>Frustration : {{ this.player.frustration }}</p>
    <a href="/">Home</a>
  </div>
</template>

<style scoped lang="scss">

</style>