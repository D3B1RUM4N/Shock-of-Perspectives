<script>
import router from "@/router";
import {initGame} from "../../public/Controller/GameController";
import store from "@/store";
import {closeApp} from "@/app";


export default {
  name: 'AcceuilView',
  methods: {
    jouer () {
      store.commit('setController', initGame("")); // _type = 0 : new game
      router.push('/customisation')
    },
    parametre () {
      console.log('parametre click')
      //router.push('/Parametre')
    },
    credit () {
      router.push('/credits')
    },
    quitter () {
      console.log('closeBtnClick')
      closeApp()
    }
  }
}
</script>

<template>
  <div class="ecran">
    <div class="titre">
      <p>Nom du jeu</p>
    </div>
    <div class="panel">
      <button class="btn" @click.prevent="jouer()">Jouer</button>
      <button class="btn" @click.prevent="parametre()">Tutoriel</button>
      <button class="btn" @click.prevent="credit()">Crédits</button>
      <button class="btn" @click.prevent="quitter()">Quitter</button>

    </div>
  </div>
</template>

<style scoped lang="scss">

.ecran {
  background-image: url("../../public/images/backgrounds/AccueilBackgroundBlur2.png");
  position: absolute;
  width: 100%;
  height: 720px;
  background-size: cover;


}


.titre {
  color: #000000;
  font-size: 64px;
  font-family: 'Press Start 2P', serif;
  text-align: center;
  margin-top: 270px;
  margin-bottom: 0px;
  animation: translateFromTop 1.5s, fadein100 1.5s;
}
.panel {
  position: absolute;
  height: 80px;
  width: 710px;
  top: 60%;
  left: 52%;
  transform: translate(-50%,-50%);
  padding-top: 0px;


 // box-shadow: 0 0 10px black;


  display: flex;
  flex-direction: row;
  justify-content: center;

 // background-color: purple;
  opacity: 1; /* Vous devez spécifier la valeur de l'opacité entre 0 et 1 */
  color: #ffffff;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */

  animation: fadein 1.5s;
  transition: opacity 1.5s, transform 1.5s;
}


.btn {
  background-color: lightskyblue;
  color: #000000;
  padding:0px;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-right:40px;
  margin-left:40px;
  font-weight: bold;
  border: solid black;
  //font-size:12px;

  width:150px;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */
  opacity: 1;
  animation: translateFromTop 1.5s;
}

.btn:hover {
  background-color: lightskyblue;
  color: #000000;
  padding:0px;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-right:40px;
  margin-left:40px;
  font-weight: bold;
  border: solid black;
  box-shadow: 0px 5px 5x midnightblue;

  //font-size:12px;

  width:150px;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */
  opacity: 1;

}


@keyframes fadein50 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}
@keyframes fadein100 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}

@keyframes translateFromTop {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

</style>
