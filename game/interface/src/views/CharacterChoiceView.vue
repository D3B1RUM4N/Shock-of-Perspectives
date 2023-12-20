<script>
import Character from "../../public/Model/Character.js";
import store from "@/store";
import router from "@/router";


let controller = store.state.Controller;
let character = controller.getCharacter();

export default {
  name: "CharacterChoiceView",
  data() {
    return {
      character: character,
      stringChar: "/images/characters/" + character.characterString() + "Front.png",
      stringColor: character.getColor(),
      stringSexe: character.getSexe(),
      stringOutfit: character.getOutfit()
    }
  },
  methods : {
    next() {
      character.initStats()
      controller.setCharacter(character)
      //console.log(store.state.player)
      router.push('/altercation')
    },
    nextSexe() {
      this.stringChar = "/images/characters/" + character.changeSexe() + "Front.png"
      this.stringSexe = character.getSexe()
    },
    nextOutfit(direction) {
      this.stringChar = "/images/characters/" + character.changeOutfit(direction) + "Front.png"
      this.stringOutfit = character.getOutfit()
    },
    nextColor(color) {
      this.stringChar = "/images/characters/" + character.changeColor(color) + "Front.png"
      this.stringColor = character.getColor()
    }
  }
}
</script>

<template>
  <div class="ecran">
    <div class="sexeChoice">
      <a href="" class="leftSexeBtn" @click.prevent="nextSexe"><img src="/images/buttons/left_semi_arrow.png" alt="left_semi_arrow"></a>
      <p>Sexe : {{ stringSexe }}</p>
      <a href="" class="rightSexeBtn" @click.prevent="nextSexe"><img src="/images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
    <div class="skinChoice">
      <p>Skin : {{ stringColor }}</p>
      <div class="whiteSkin" @click.prevent="nextColor(2)"></div>
      <div class="yellowSkin" @click.prevent="nextColor(1)"></div>
      <div class="blackSkin" @click.prevent="nextColor(0)"></div>
    </div>
    <div class="outfitChoice">
      <a href="" class="leftOutfitBtn" @click.prevent="nextOutfit(1)"><img src="/images/buttons/left_semi_arrow.png" alt="left_semi_arrow"></a>
      <img :src="stringChar" :alt="stringChar" class="showPlayer">
      <a href="" class="rightOutfitBtn" @click.prevent="nextOutfit(-1)"><img src="/images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
    <div class="navigation">
      <a href="/" class="previous"><img src="/images/buttons/left_arrow.png"></a>
      <p class="selectedOutfit">{{ stringOutfit }}</p>
      <a href="" class="next" @click.prevent="next"><img src="/images/buttons/right_arrow.png"></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ecran {
  position: absolute;
  width: 100%;
  height: 720px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #BBD3F0;

  font-family: "Press Start 2P", Serif;
}

  .sexeChoice {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
    top: 0;
    left: 0;
    font-size:30px;

    background-color: #79A1D0;
  }

    .leftSexeBtn{
      position: absolute;
      left: 270px;
      width: 60px;
      height: 60px;
    }
    .rightSexeBtn{
      position: absolute;
      right:270px;
      width: 60px;
      height: 60px;
    }

  .skinChoice {
    position: absolute;
    width: 320px;
    height: 460px;
    top: 130px;
    left: 0;

    padding-left:20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //space items inside the div
    justify-content: space-around;
  }

    .whiteSkin {
      /* Ellipse 2 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;
      margin-left : 40px;

      background: #FAD5BA;
      border: 4px solid #000000;
      border-radius: 50%;

      transition: transform 0.5s ease, box-shadow 0.3s ease;
    }

    .whiteSkin:hover{
      box-shadow: 0 0 15px 5px white;
      transform: translateY(-5px);
    }

    .blackSkin {
      /* Ellipse 4 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;
      margin-left : 40px;

      background: #5D342F;
      border: 4px solid #000000;

      border-radius: 50%;

      transition: transform 0.5s ease, box-shadow 0.3s ease;
    }

  .blackSkin:hover{
    box-shadow: 0 0 15px 5px white;
    transform: translateY(-5px);
  }

    .yellowSkin {
      /* Ellipse 3 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;
      margin-left : 40px;

      background: #FCCE7F;
      border: 4px solid #000000;


      border-radius: 50%;

      transition: transform 0.5s ease, box-shadow 0.3s ease;
    }
  .yellowSkin:hover{
    box-shadow: 0 0 15px 5px white;
    transform: translateY(-5px);
  }

  .outfitChoice {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 375px;
    height: 460px;
    top: 130px;
    right: 300px;

  }
    .leftOutfitBtn{
      width: 80px;
      height: 80px;
    }

    .rightOutfitBtn{
      width: 80px;
      height: 80px;
    }
    .showPlayer {
      width: 200px;
      height: 350px;
      overflow: hidden;
      object-fit: cover;

    }

  .navigation {
    position: absolute;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 130px;
    line-height: 55px;
    bottom: 0;
    left: 0;

  }

    .previous {
      width: 100px;
      height: 100px;
      position: absolute;
      right:88%;
    }

    .navigation p {
      width: 200px;
      height: 60px;
      font-size: 30px;
      margin-bottom: 150px;
    }

    .next {
      width: 100px;
      height: 100px;
      position: absolute;
      left : 88%;
    }
</style>
