<script>
import router from "@/router";
import {initGame} from "../../public/Controller/GameController";
import store from "@/store";
import {closeApp} from "@/app";


export default {
  name: 'AcceuilView',
  methods: {
    jouer () {
      store.commit('setController', initGame());
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
  <div class="titre">
    <p>Nom du jeu</p>
  </div>
  <div class="panel">
    <button class="btn" @click.prevent="jouer()">Jouer</button><br>
    <button class="btn" @click.prevent="parametre()">Paramètre</button><br>
    <button class="btn" @click.prevent="quitter()">Quitter</button><br>
    <button class="btn" @click.prevent="credit()">Crédits</button><br>
  </div>
</template>

<style scoped lang="scss">
.titre {
  color: #000000;
  font-size: 50px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px;
  animation: translateFromTop 1.5s, fadein100 1.5s;
}
.panel {
  position: absolute;
  height: 300px;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding-top: 20px;

  box-shadow: 0 0 10px black;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #000000;
  opacity: 0.5; /* Vous devez spécifier la valeur de l'opacité entre 0 et 1 */
  color: #ffffff;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */

  animation: fadein 1.5s;
  transition: opacity 1.5s, transform 1.5s;
}


.btn {
  background-color: green;
  color: #ffffff;
  padding:10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */
  animation: translateFromTop 1.5s;
}
.btn:hover {
  background-color: #195f19;
  padding:10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */
  scale: 125%;
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
