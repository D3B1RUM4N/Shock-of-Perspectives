<script>
import router from "../router";
import store from "@/store";
import {Enum} from "../../public/Model/Enum";


let controller = store.state.Controller;
let altercations = controller.getAltercations();

export default {
  name: "StatView",
  data() {
    return {
      altercations: altercations,
    }
  },

  methods: {
    router() {
      return router
    },
    getStringChar(altercation) {
      return "/images/characters/" + altercation.getNPC().characterString() + "Front.png"
    },
    getStats(altercation) {
      return altercation.getNPC().getStats()
    },
    interaction(altercation){
      return altercation.getInteraction()
    },
    getImgInterraction(interaction){
      switch(interaction){
        case Enum.FIGHT:
          return "/images/buttons/ButtonFight.png"
        case Enum.TALK:
          return "/images/buttons/ButtonTalk.png"
      }
    }
  },

  computed: {
    player() {

    },
  }
}
</script>

<template>
  <div class="ecran">
    <div class="container">
      <h1>Récapitulatif de la game</h1>

      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[0])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Altercation 1</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[0]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[0]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[0]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[0]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[0]))" id="img2" alt="Image de fin">
      </div>

      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[1])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Altercation 4</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[1]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[1]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[1]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[1]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[1]))" id="img2" alt="Image de fin">
      </div>


      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[2])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Altercation 5</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[2]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[2]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[2]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[2]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[2]))" id="img2" alt="Image de fin">
      </div>


      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[3])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Altercation 6</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[3]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[3]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[3]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[3]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[3]))" id="img2" alt="Image de fin">
      </div>

      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[4])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Altercation 7</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[4]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[4]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[4]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[4]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[4]))" id="img2" alt="Image de fin">
      </div>

      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[5])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Dojo 1</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[5]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[5]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[5]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[5]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[5]))" id="img2" alt="Image de fin">
      </div>

      <div class="section">
        <div class="content">
          <img :src="getStringChar(altercations[6])" alt="Image 1">
        </div>
        <div class="content">
          <h3>Dojo 2</h3>
          <ul>
            <li>Calm : {{ getStats(altercations[6]).calm }}</li>
            <li>Frustation : {{ getStats(altercations[6]).frustration }}</li>
            <li>Strength : {{ getStats(altercations[6]).strength }}</li>
            <li>Resistance : {{ getStats(altercations[6]).resistance }}</li>
          </ul>
        </div>
        <img :src=" getImgInterraction(interaction(altercations[6]))" id="img2" alt="Image de fin">
      </div>


      <div class="back-to-top">
        <a href="{{ router().push('/') }}" >Retour à l'accueil</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.ecran {
  font-family: Arial, sans-serif;
  background-color: #BBD3F0;
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
  background-color: #79A1D0;
  font-size: 1.3rem; ;
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