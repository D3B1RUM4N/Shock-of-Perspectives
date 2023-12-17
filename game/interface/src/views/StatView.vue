<script>
export default {
  name: "StatView",

  computed: {
    player() {
      return this.$store.state.player;
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
          <img src="EleaFront.png" alt="Image 1">
        </div>
        <div class="content">
          <h3>Altercation 1</h3>
          <ul>
            <li>Calm : 30</li>
            <li>Frustation : 40</li>
            <li>Strength :30</li>
            <li>Resistance : 50</li>
          </ul>
        </div>
        <img src="Button Fight.png" id="img2" alt="Image de fin">
      </div>

      <div class="section">
        <div class="content">
          <img src="EleaFront.png" alt="Image 2">
        </div>
        <div class="content">
          <h3>Altercation 2</h3>
          <ul>
            <li>Calm : 30</li>
            <li>Frustation : 40</li>
            <li>Strength :30</li>
            <li>Resistance : 50</li>
          </ul>
        </div>
        <img src="Button Talk.png" id="img2" alt="Image de fin">
      </div>


      <div class="section">
        <div class="content">
          <img src="EleaFront.png" alt="Image 3">
        </div>
        <div class="content">
          <h3>Altercation 3</h3>
          <ul>
            <li>Calm : 30</li>
            <li>Frustation : 40</li>
            <li>Strength :30</li>
            <li>Resistance : 50</li>
          </ul>
        </div>
        <img src="Button Insult.png" id="img2" alt="Image de fin">
      </div>


      <div class="section">
        <div class="content">
          <img src="EleaFront.png" alt="Image 4">
        </div>
        <div class="content">
          <h3>Altercation 4</h3>
          <ul>
            <li>Calm : 30</li>
            <li>Frustation : 40</li>
            <li>Strength :30</li>
            <li>Resistance : 50</li>
          </ul>
        </div>
        <img src="Button Fight.png" id="img2" alt="Image de fin" >
      </div>

      <div class="section">
        <div class="content">
          <img src="EleaFront.png" alt="Image 5">
        </div>
        <div class="content">
          <h3>Altercation 5</h3>
          <ul>
            <li>Calm : 30</li>
            <li>Frustation : 40</li>
            <li>Strength :30</li>
            <li>Resistance : 50</li>
          </ul>
        </div>
        <img src="Button Insult.png" id="img2" alt="Image de fin">
      </div>


      <div class="back-to-top">
        <a href="#top">Retour à l'accueil</a>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

body {
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
  align-items: center;
  width: 800px; /* Largeur du conteneur */
  padding-left: 20px; /* Ajout d'un espace à gauche pour la barre de défilement */
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
  width : 400px;
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
  padding-top:50px;
}

h3 {
  text-align: center;
  margin: 0;
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