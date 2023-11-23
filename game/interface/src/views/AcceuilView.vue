<script>
import router from "@/router";

export default {
  name: 'AcceuilView',
  methods: {
    jouer () {
      console.log('jouer click')
      router.push('/altercation')
    },
    parametre () {
      console.log('parametre click')
      //router.push('/Parametre')
    },
    quitter () {
      console.log('quitter click')

    },
    credit () {
      router.push('/credits')
    }
  }
}
</script>

<template>
  <div class="panel">
    <button class="btn" @click.prevent="jouer()">Jouer</button><br>
    <button class="btn" @click.prevent="parametre()">Paramètre</button><br>
    <button class="btn" @click.prevent="quitter()">Quitter</button><br>
    <button class="btn" @click.prevent="credit()">Crédits</button><br>
  </div>
</template>

<style scoped lang="scss">
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
}

.btn {
  background-color: green;
  color: #ffffff;
  padding:10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 10px; /* Ajoutez cette ligne pour arrondir les bords */
}
</style>