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
    <h1>Crédits</h1>
    <div class="credit">
      <section>
        <h4>Elies Mekhinini</h4>
        <div class="photo">
          <img src="">
        </div>
        <p></p>
      </section>
      <section>
        <h4>Simon Williams</h4>
        <div class="photo">
          <img src="">
        </div>
        <p></p>
      </section>
      <section>
        <h4>Eléa Menu</h4>
        <div class="photo">
          <img src="">
        </div>
        <p>Maquettes</p>
        <p>Design</p>
      </section>
      <section>
        <h4>Loïc Maes</h4>
        <div class="photo">
          <img src="">
        </div>
        <p></p>
      </section>
    </div>
    <div class="return">
      <button class="btn" @click.prevent="arriere()">Main menu</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page{
  height: 720px;
  width: 100%;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../../public/images/backgrounds/NightBackgroundMexicosAriba.png");
  background-size: cover;
  background-position: center;
  filter: brightness(1);
}

.credit {
  width: 900px;

  //  background: grey;
  //  opacity: 0.3;
  // border-radius: 10px;

  display: flex;
  justify-content : space-around;
  text-align: center;
  align-items: baseline;
  margin-top: 25px;
}

section{
  width : 200px;
  height : 400px;
  background: grey;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: blueviolet 0.1em 0.1em 0.5em;

  text-align : center;
  //align-items: baseline;
  margin-bottom: 80px;
}

h1 {
  font-size: 50px;
  color: #fff;
  animation: pulsateLightBlue 0.11s ease-in-out infinite alternate;
}
h4 {
  margin-top: 6px;
  margin-bottom: 4px;
  font-size: 26px;
  color: #efefef;
  animation: pulsateBlue 0.01s ease-in-out infinite alternate
}

p {
  font-size: 18px;
}

.photo {
  width: 200px;
  height: 200px;
  background: red;
  opacity: 0.7;
  border-radius: 20px 20px 20px 20px;
  margin-bottom: 4px;
}

.btn
{
  font-size: 40px;
  color: #fff;
  animation: pulsateLightBlue 0.11s ease-in-out infinite alternate;
}




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
