<script>
  import { closeApp } from './app.js';
  import router from "@/router";

  export default {
    name: 'App',
    methods: {
      closeBtnClick () {
        //call closeBut.eventlistener on app.js
        console.log('closeBtnClick')
        closeApp()
        //router.push('/Acceuil')
      },
    }
  }
</script>

<template>
  <ul class="nav" id="topMenuBtns">
    <li>
      <button @click.prevent="closeBtnClick()" id="closeBTN" class="topMenuBtns">&#128473;&#xFE0E;</button>
    </li>
  </ul>
  <RouterView />
</template>

<style lang="scss">
  .nav {
    position: absolute;
    top: 0;
    left: 0px;
    width: 100%;
    height: 50px;
    margin: 0;
    padding: 0;
  }
  #closeBTN {
    position: absolute;
    right: 20px;
  }
</style>
<script setup>
</script>
