<script>
import router from "@/router";
import AltercationButton from "@/views/component/AltercationButton.vue";
import {Enum as Enum} from "../../public/Model/Enum";
import { interact } from "../../public/Model/InteractionReact";
import {altercation, newNPC} from "../../public/Model/InteractionCreate";
import Character from "../../public/Model/Character";
import store from "@/store";

export default {
  name: "AltercationView",
  components: {AltercationButton},

  computed: {
    player() {
      return store.state.player;
    },
    npc() {
      return newNPC();
    },
    text() {
      return this.$store.state.text;
    }
  },


  methods:{
    arriere(){
      router.push('/')
    },

    fight(){
      console.log("fight")
      interact(this.player, this.npc, Enum.FIGHT)
    },
    talk(){
      console.log("talk")
      interact(this.player, this.npc, Enum.TALK)
    },
    insult(){
      /*console.log("insult")
      interact(this.player, this.npc, Enum.INSULT)*/
    },
  }
}
</script>

<template>
  <div class="ecran">
    <h1>AltercationView</h1>
    <div class="text">
      <p>{{ text }}</p>
    </div>
    <div class="interaction">
      <AltercationButton @click.prevent="fight" class="btn" buttonText="Fight"></AltercationButton>
      <AltercationButton @click.prevent="talk" class="btn" buttonText="Talk"></AltercationButton>
      <AltercationButton class="btn" buttonText="89"></AltercationButton>
      <AltercationButton @click.prevent="arriere" class="btn" buttonText="64"></AltercationButton>
    </div>
    <div class="stats">
      <table>
        <tr>
          <th>Stat</th>
          <th>Player</th>
          <th>NPC</th>
        </tr>
        <tr>
          <td>calm</td>
          <td>{{ player.calm }}</td>
          <td>{{ npc.calm }}</td>
        </tr>
        <tr>
          <td>frustration</td>
          <td>{{ player.frustration }}</td>
          <td>{{ npc.frustration }}</td>
        </tr>
        <tr>
          <td>Strength</td>
          <td>{{ player.strength }}</td>
          <td>{{ npc.strength }}</td>
        </tr>
        <tr>
          <td>Resistance</td>
          <td>{{ player.resistance }}</td>
          <td>{{ npc.resistance }}</td>
        </tr>
      </table>
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

    .stats {
      position: absolute;
      top: 125px;
      right: 0;
    }
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
      th, td {
        padding: 5px;
        text-align: left;
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