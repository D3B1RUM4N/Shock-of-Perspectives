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
      <AltercationButton @click.prevent="fight" class="btn" buttonText="Fight" ImageAlter="/images/buttons/ButtonFight.png"></AltercationButton>
      <AltercationButton class="btn" buttonText="Talk" ImageAlter="/images/buttons/ButtonTalk.png"></AltercationButton>
      <AltercationButton class="btn" buttonText="Insult" ImageAlter="/images/buttons/ButtonInsult.png"></AltercationButton>
      <AltercationButton class="btn" buttonText="Leave" ImageAlter="/images/buttons/ButtonLeave.png"></AltercationButton>
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
    <div class="ennemi"></div>
  </div>
</template>

<style scoped lang="scss">
.ecran {
  position: absolute;
  width: 100%;
  height: 720px;
  background-image: url("../../public/images/backgrounds/NightBackgroundNightClub.png");
  background-size: cover;
  background-position-y: -300px;
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
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  //letter-spacing: .15em; /* Adjust as needed */
  animation:
    typing 1.5s steps(40, end);
}
      /* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
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
.ennemi {
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
