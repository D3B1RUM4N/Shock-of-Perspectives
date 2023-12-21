<script>
import {GameController} from "@/assets/js/controllers/game.controller";

export default {
  name: "StatView",
  computed: {
    history () {
      return this.$store.state.resume.history
    },
    stats () {
      console.log(this.$store.state.resume.statistics)
      return this.$store.state.resume.statistics
    },
    playerAvatar () {
      return `/images/characters/${this.$store.state.controller.characterOptions.buildImageURI('Face')}`
    }
  },
  methods: {
    reaction (altercation) {
      return GameController.REACTIONS.find(r => r.id === altercation?.reactionId)
    }
  }
}
</script>

<template>
  <div class="ecran">
    <div class="container">
      <h1>Récapitulatif de la game</h1>

      <section class="stats" v-if="stats">
        <img :src="playerAvatar" alt="" class="stats--player" />

        <div class="stats__box" v-for="s in stats" :key="s">
          {{ s }}
        </div>
      </section>

      <section class="history" v-if="history">
        <div class="history--section" v-for="a in history" :key="a">
          <div class="content">
            <h3>Altercation {{ a.id - history[0].id + 1 }}</h3>
            <p>{{ a.label }}</p>
            <img :src="`/images/buttons/${reaction(a).icon}.png`" alt="" />
          </div>
        </div>
      </section>

      <div class="back-to-top">
        <RouterLink to="/">Retour à l'accueil</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ecran {
  font-family: Arial, sans-serif;
  background-image: url("../../public/images/backgrounds/DojoBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Activation de la barre de défilement verticale */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 950px; /* Largeur du conteneur */

}

.section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%; /* Largeur totale des sections */
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  background-color: rgba(121, 161, 208, 0.9);
  font-size: 1.3rem;
  box-shadow: #3b3737 0.1em 0.1em 0.5em;
}

.section:hover {
  box-shadow: 0 0 10px black; /* Ombre au survol */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 20px;
}

.content :nth-child(2) {
  width : 500px;
}

.content img {
  width: 150px; /* Taille maximale de l'image */
  height: 150px; /* Taille maximale de l'image */
  margin-bottom: 10px;
  object-fit: cover; /* Préservation du ratio de l'image */
}

#img2 {
  width:100px;
  height:100px;
  object-fit: cover;
  margin-top: 50px;
}

h1{
  font-family: "Press Start 2P", Serif;
  font-size:30px;
  margin-top:30px;
  margin-bottom:30px;
}


h3 {
  font-family: "Press Start 2P", Serif;
  text-align: center;
  margin: 0;
  margin-bottom: 20px;

}

.back-to-top {
  margin-top: 20px;
  text-align: center;
  padding-bottom:20px;
}

.back-to-top a {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-to-top a:hover {
  background-color: #2980b9;
}

</style>
