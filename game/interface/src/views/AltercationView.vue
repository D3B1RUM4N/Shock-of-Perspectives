<script>
import router from "@/router";
import AltercationButton from "@/views/component/AltercationButton.vue";

export default {
  name: "AltercationView",
  components: {AltercationButton},
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
      <AltercationButton class="btn" buttonText="91"></AltercationButton>
      <AltercationButton class="btn" buttonText="82"></AltercationButton>
      <AltercationButton class="btn" buttonText="73"></AltercationButton>
      <AltercationButton class="btn" buttonText="64"></AltercationButton>
    </div>
    <div class="perso"></div>
    <div class="enemi"></div>
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
      max-height: 170px;
      overflow: hidden;
    }
      .text p {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        //white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        //letter-spacing: .15em; /* Adjust as needed */
        animation:
            typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
      }
      /* The typing effect */
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }

      /* The typewriter cursor effect */
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange; }
      }

    .interaction {
      position: absolute;
      top:200px;

      display: flex;
      flex-direction: column;
    }
      .btn{
        margin-top: 5px;
      }

    .perso {
      position: absolute;
      top: 400px;
      right: 750px;
      width: 150px;
      height: 250px;
      background-color: red;
      text-align: center;
      line-height: 100px;
      font-size: 50px;
      color: white;
    }

    .enemi {
      position: absolute;
      top: 300px;
      right: 150px;
      width: 150px;
      height: 250px;
      background-color: pink;
      text-align: center;
      line-height: 100px;
      font-size: 50px;
      color: white;
    }
</style>