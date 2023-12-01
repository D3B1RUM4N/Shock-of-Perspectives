<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Click me', // Texte par défaut si aucun texte n'est fourni
    },
  },
  methods: {
    handleClick() {
      // Émettre un événement ou exécuter une action lors du clic
      console.log('button clicked');
    },
  },
};
</script>

<template>
  <div class="btn">
    <button class="image" @click="handleClick">
      <img src="https://img.pixers.pics/pho_wat(s3:700/FO/56/49/23/41/700_FO56492341_3a5776815d8f42755e584315db67b85b.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/posters-panneau-de-limitation-de-vitesse-50.jpg" alt="Image du bouton">
    </button>
    <span class="text">{{ buttonText }}</span>
  </div>
</template>

<style scoped lang="scss">
.btn {
  background-color: green;
  color: #000000;

  //padding:10px;
  width: 70px;
  height: 70px;

  border: black 1px solid;

  transition: width 0.3s;
}
  .image {
    width: 30px;
    margin: 4px;
  }

  .text {
    opacity: 0;
    position: absolute;
    margin-top: 10px;
    transition: opacity 0.3s, transform 0.3s; /* Ajoutez cette ligne pour une transition fluide */
    transform: translateX(0px); /* Décalez de 0px vers la droite par défaut */
  }

.btn:hover{
  width: 225px;
}
.btn:hover .text{
  opacity: 1;
  transform: translateX(50px); /* Décalez de 50px vers la droite lors du survol */
}
</style>
