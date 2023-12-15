<script>
import Character, {
  changeSexe,
  characterString,
  changeOutfit,
  changeColor,
  setStats
} from "../../public/Model/Character.js";
import store from "@/store";
import router from "@/router";


let character = new Character();


export default {
  name: "CharacterChoiceView",
  data() {
    return {
      character: character,
      stringChar: "/images/characters/" + characterString(character) + "Front.png"
    }
  },
  methods : {
    next() {
      character = setStats(character)
      store.commit('setPlayerStat', character);
      //console.log(store.state.player)
      router.push('/altercation')
    },
    nextSexe() {
      character = setStats(character)
      this.stringChar = "/images/characters/" + changeSexe(character) + "Front.png"
    },
    nextOutfit(direction) {
      this.stringChar = "/images/characters/" + changeOutfit(character, direction) + "Front.png"
    },
    nextColor(color) {
      this.stringChar = "/images/characters/" + changeColor(character, color) + "Front.png"
    }
  }
}
</script>

<template>
  <div class="ecran">
    <div class="sexeChoice">
      <a href="" class="leftSexeBtn" @click.prevent="nextSexe"><img src="/images/buttons/left_semi_arrow.png" alt="left_semi_arrow"></a>
      <p>sexe : choix</p>
      <a href="" class="rightSexeBtn" @click.prevent="nextSexe"><img src="/images/buttons/right_semi_arrow.png" alt="right_semi_arrow"></a>
    </div>
    <div class="skinChoice">
      <p>skin : choix</p>
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
      <p class="selectedOutfit">Outfit selectionné</p>
      <a href="" class="next" @click.prevent="next"><img src="/images/buttons/right_arrow.png"></a>
    </div>
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
    position: absolute;
    display: flex;
    flex-direction: row;
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
    height: 140px;
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