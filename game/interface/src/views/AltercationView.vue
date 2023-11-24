<script>
import router from "@/router";

export default {
  name: "AltercationView",
  methods:{
    arriere(){
      router.push('/')
    }
  }
}
</script>

<template>
  <div class="ecran">
    <h1>AltercationView</h1>
    <div class="text">
      <p>We're no strangers to love
        You know the rules and so do I (do I)
        A full commitment's what I'm thinking of
        You wouldn't get this from any other guy
        I just wanna tell you how I'm feeling
        Gotta make you understand
        Never gonna give you up
        Never gonna let you down
        Never gonna run around and desert you
        Never gonna make you cry
        Never gonna say goodbye
        Never gonna tell a lie and hurt you</p>
    </div>
    <div class="interaction">
      <button class="btn" @click.prevent="">1</button>
      <button class="btn" @click.prevent="">2</button>
      <button class="btn" @click.prevent="">3</button>
      <button class="btn" @click.prevent="">4</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .ecran {
    position: relative;
    width: 100%;
    margin-top: 50px;
  }

    .text {
      position: absolute;
      border: black 1px solid;
      inset-inline: 100px;
    }

    .interaction {
      position: absolute;
      top:200px;

      display: flex;
      flex-direction: column;
    }
      .btn {
        background-color: red;
        color: #ffffff;

        padding:10px;
        margin-top:10px;
      }



</style>