<script>
export default {
  name: "CharacterChoiceView",
  
  data() {
    return {
      player: {
        
      }
    }
  }
}
</script>

<template>
  <div class="ecran">
    <div class="sexeChoice">
      <a href="" class="leftSexeBtn"><img src="../../images/buttons/left_semi_arrow.png" alt="left_semi_arrow"></a>
      <p>sexe : choix</p>
      <a href="" class="rightSexeBtn"><img src="../../images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
    <div class="skinChoice"></div>
    <div class="outfitChoice">
      <a href="" class="leftOutfitBtn"><img src="../../images/buttons/left_semi_arrow.png" alt="left_semi_arrow"></a>
      <img src="" alt="player" class="showPlayer">
      <a href="" class="rightOutfitBtn"><img src="../../images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;

    background-color: red;
  }

    .leftSexeBtn{
      //position: absolute;
      width: 60px;
      height: 60px;
    }
    .rightSexeBtn{
      //position: absolute;
      width: 60px;
      height: 60px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 375px;
    height: 450px;
    top: 100px;
    right: 300px;

    background-color: green;
  }
    .leftOutfitBtn{
      //position: absolute;
      width: 60px;
      height: 60px;
    }
    .rightOutfitBtn{
      //position: absolute;
      width: 60px;
      height: 60px;
    }
    .showPlayer {
      position: absolute;
      width: 150px;
      height: 350px;
      top: 10px;
      background-color: brown;
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