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
      <p>sexe : {{ stringSexe }}</p>
      <a href="" class="rightSexeBtn" @click.prevent="nextSexe"><img src="/images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
    <div class="skinChoice">
      <p>skin : {{ stringColor }}</p>
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

  background-color: grey;
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
    height: 460px;
    top: 130px;
    left: 0;

    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    //space items inside the div
    justify-content: space-around;


    background-color: blue;
  }

    .whiteSkin {
      /* Ellipse 2 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;

      background: #FAD5BA;
      border: 4px solid #000000;
      border-radius: 50%;
    }

    .blackSkin {
      /* Ellipse 4 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;

      background: #5D342F;
      border: 4px solid #000000;

      border-radius: 50%;
    }

    .yellowSkin {
      /* Ellipse 3 */

      box-sizing: border-box;

      width: 94px;
      height: 94px;

      background: #FCCE7F;
      border: 4px solid #000000;


      border-radius: 50%;
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
      width: 150px;
      height: 350px;
      background-color: brown;
    }

  .navigation {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 130px;
    bottom: 0;
    left: 0;

    background-color: yellow;
  }

    .previous {
      //position: absolute;
      width: 60px;
      height: 60px;
    }

    .selectedOutfit {
      //position: absolute;
      width: 200px;
      height: 60px;
      font-size: 30px;
    }

    .next {
      //position: absolute;
      width: 60px;
      height: 60px;
    }
</style>
