<script>
import router from "@/router";

export default {
  name: 'CreditView',
  methods: {
    arriere () {
      router.push('/')
    }
  }
}
</script>

<template>
  <div class="page">
    <div class="credit">
      <h1>Crédits</h1>
    </div>
    <div class="return">
      <button class="btn" @click.prevent="arriere()">&#8592</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page{
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
</style>