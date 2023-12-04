<script>
export default {
  name: "CharacterChoiceView"
}
</script>

<template>
  <div class="ecran">
    <div class="sexeChoice"></div>
    <div class="skinChoice"></div>
    <div class="outfitChoice"></div>
    <div class="navigation"></div>
  </div>
</template>

<style scoped lang="scss">
.ecran {
  position: absolute;
  width: 100%;
  height: 95.8%;
  top : 30px;

  background-color: grey;
}
  .sexeChoice {
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;

    background-color: red;
  }

  .skinChoice {
    position: absolute;
    width: 300px;
    height: 450px;
    top: 100px;
    left: 0;

    background-color: blue;
  }

  .outfitChoice {
    position: absolute;
    width: 300px;
    height: 450px;
    top: 100px;
    right: 300px;

    background-color: green;
  }

  .navigation {
    position: absolute;
    width: 100%;
    height: 140px;
    bottom: 0;
    left: 0;

    background-color: yellow;
  }
</style>