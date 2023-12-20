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
  <div class="ecran">
    <h1>Crédits</h1>
    <div class="panel">
      <section>
        <h4>Elies Mekhinini</h4>
        <div class="photo">
          <img src="/images/characters/EliesFront.png">
        </div>
        <p>● Toujours dans le Back ^^</p>
        <p>● TheRock me demande des conseils</p>
      </section>
      <section>
        <h4>Simon Williams</h4>
        <div class="photo">
          <img src="/images/characters/SimonFront.png">
        </div>
        <p>● Toujours dans le Front ...</p>
        <p>● Qu'est ce que je fou là ?</p>
      </section>
      <section>
        <h4>Eléa <br>Menu</h4>
        <div class="photo">
          <img src="/images/characters/EleaFront.png">
        </div>
        <p>● Designer 667</p>
        <p>● Je coco toutes les recettes des maquettes</p>
        <p>● Approved By Gossa</p>

      </section>
      <section>
        <h4>Loïc <br>Maes</h4>
        <div class="photo">
          <img src="/images/characters/LoicFront.png">
        </div>
        <p>● Je fais l'API tkt</p>
      </section>
    </div>
    <div class="return">
      <button class="btn" @click.prevent="arriere()">Main menu</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* SCREEN */
.ecran{
  height: 720px;
  width: 100%;
  position: absolute;

  font-family: 'Press Start 2P', Serif;

  /* Flexbox */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../public/images/backgrounds/NightBackgroundMexicosAriba.png");
  background-size: cover;
  background-position: center;
  filter: brightness(1);
}

/* PANEL */
.panel {
  width: 900px;
  margin-top: 50px;

  /* Flexbox */
  display: flex;
  justify-content : space-around;
  text-align: center;
  align-items: baseline;

}

/* SECTION */
section{
  width : 200px;
  height : 400px;
  background: grey;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: blueviolet 0.1em 0.1em 0.5em;

  text-align : start ;
  //align-items: baseline;
  margin-bottom: 80px;
  display:flex;
  flex-direction: column;

}

/* MAIN TITLE */
h1 {
  font-size: 50px;
  color: #fff;
  animation: pulsateLightBlue 0.11s ease-in-out infinite alternate;
  margin-top: 50px;
}

/* CHARACTERS NAMES */
h4 {
  margin-top: 6px;
  margin-bottom: 4px;
  font-size: 22px;
  color: #efefef;
  animation: pulsateBlue 0.01s ease-in-out infinite alternate;
  text-align:center;
}

/* PARAGRAPHS */
section p {
  font-size: 11px;
  margin-bottom: 4px;
  margin-left:15px;
  margin-right:15px;

}

/* PICTURES : box */
.photo {
  width: 200px;
  height: 200px;
  background: #848484;
  opacity: 1;
  border-radius: 20px 20px 20px 20px;
  margin-bottom: 4px;
  box-shadow: #707070 0.1em 0.1em 0.5em;
}

/* PICTURES : box and size */
.photo img {
  width: 100%;
  height: 100%;
  opacity: 1;
  border-radius: 20px 20px 20px 20px;
}

/* BUTTON */
.btn {
  font-size: 40px;
  color: #fff;
  animation: pulsateLightBlue 0.11s ease-in-out infinite alternate;
}

/* KEYFRAMES */
@keyframes pulsateBlue {
  100% {
    /* Larger blur radius */
    text-shadow:
        0 0 4px #05f,
        0 0 11px #05f,
        0 0 19px #05f,
        0 0 40px #05d,
        0 0 80px #05d,
        0 0 90px #05d,
        0 0 100px #05d,
        0 0 150px #05d;
  }
  0% {
    /* A slightly smaller blur radius */
    text-shadow:
        0 0 4px #05f,
        0 0 10px #05f,
        0 0 18px #05f,
        0 0 38px #05d,
        0 0 73px #05d,
        0 0 80px #05d,
        0 0 94px #05d,
        0 0 140px #05d;
  }
}
@keyframes pulsateLightBlue {
  100% {
    /* Larger blur radius */
    text-shadow:
        0 0 4px #0ff,
        0 0 11px #0ff,
        0 0 19px #0ff,
        0 0 40px #0fd,
        0 0 80px #0fd,
        0 0 90px #0fd,
        0 0 100px #0fd,
        0 0 150px #0fd;
  }
  0% {
    /* A slightly smaller blur radius */
    text-shadow:
        0 0 4px #0ff,
        0 0 10px #0ff,
        0 0 18px #0ff,
        0 0 38px #0fd,
        0 0 73px #0fd,
        0 0 80px #0fd,
        0 0 94px #0fd,
        0 0 140px #0fd;
  }
}
@keyframes pulsatePink {
  100% {
    /* Larger blur radius */
    text-shadow:
        0 0 4px #8400ff,
        0 0 11px #8400ff,
        0 0 19px #8400ff,
        0 0 40px #bf00ff,
        0 0 80px #bf00ff,
        0 0 90px #bf00ff,
        0 0 100px #bf00ff,
        0 0 150px #bf00ff;
  }
  0% {
    /* A slightly smaller blur radius */
    text-shadow:
        0 0 4px #8400ff,
        0 0 10px #8400ff,
        0 0 18px #8400ff,
        0 0 38px #bf00ff,
        0 0 73px #bf00ff,
        0 0 80px #bf00ff,
        0 0 94px #bf00ff,
        0 0 140px #bf00ff;
  }
}
</style>
