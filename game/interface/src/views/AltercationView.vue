<script>
import router from "@/router";
import AltercationButton from "@/views/component/AltercationButton.vue";
import {Enum as Enum} from "../../public/Model/Enum";
import store from "@/store";

let controller = store.state.Controller;
if(controller == null)
  router.push('/')
if(controller.getType() !== "tuto") {
  refresh()
}

export function refresh() {
  controller.newAltercation();
}

export default {
  name: "AltercationView",
  components: {AltercationButton},

  computed: {
    player() {
      return controller.getCharacter();
    },
    npc() {
      return controller.getAltercation().getNPC();
    },
    text() {
      return controller.getAltercation().getText();
    },
    stringPlayer(){
      console.log(this.player.characterString())
      return "/images/characters/" + this.player.characterString() + "Right.png"
    },

    stringNPC(){
      console.log(this.npc.characterString())
      return "/images/characters/" + this.npc.characterString() + "Left.png"
    },


  },
  methods:{
    arriere(){
      router.push('/')
    },

    async fight() {
      console.log("fight")
      if(await controller.getAltercation().interact(Enum.FIGHT) === "end"){
        await router.push('/')
      }
      refresh()
    },
    async talk() {
      console.log("talk")
      if(await controller.getAltercation().interact(Enum.TALK) === "end"){
        await router.push('/')
      }
      refresh()
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
    <div class="backgroundText"></div>
    <div class="text">
      <p>{{text}}</p>
    </div>
    <div class="interaction">
      <AltercationButton @click.prevent="fight" class="btn" ImageAlter="/images/buttons/ButtonFight.png" TitleAlter="/images/buttons/TitleButtonFight.png"></AltercationButton>
      <AltercationButton @click.prevent="talk" class="btn" ImageAlter="/images/buttons/ButtonTalk.png" TitleAlter="/images/buttons/TitleButtonTalk.png"></AltercationButton>
      <AltercationButton class="btn" buttonText="Insult" ImageAlter="/images/buttons/ButtonInsult.png" TitleAlter="/images/buttons/TitleButtonInsult.png"></AltercationButton>
      <AltercationButton class="btn" buttonText="Leave" ImageAlter="/images/buttons/ButtonLeave.png" TitleAlter="/images/buttons/TitleButtonLeave.png"></AltercationButton>
    </div>
    <div class="stats">
      <table class="tableStats">
        <tr>
          <th>Stat</th>
          <th>Player</th>
          <th>NPC</th>
        </tr>
      </table>
      <table class="tableInteractions">
        <tr>
          <td>calm</td>
          <td>{{ player.statistics.calm }}</td>
          <td>{{ npc.statistics.calm }}</td>
        </tr>
        <tr>
          <td>frustration</td>
          <td>{{ player.statistics.frustration }}</td>
          <td>{{ npc.statistics.frustration }}</td>
        </tr>
        <tr>
          <td>Strength</td>
          <td>{{ player.statistics.strength }}</td>
          <td>{{ npc.statistics.strength }}</td>
        </tr>
        <tr>
          <td>Resistance</td>
          <td>{{ player.statistics.resistance }}</td>
          <td>{{ npc.statistics.resistance }}</td>
        </tr>
      </table>
    </div>
    <div class="perso">
      <img :src="stringPlayer" :alt="stringPlayer" class="showPlayer">
    </div>
    <div class="ennemi">
      <img :src="stringNPC" :alt="stringNPC" class="showNPC">
    </div>
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
  top: 25px;
  inset-inline: 100px;
  max-height: 130px;
  overflow: hidden;
}
.text p {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  //letter-spacing: .15em; /* Adjust as needed */
  font-family: 'Press Start 2P', cursive;
  opacity: 1;
  animation:
      typing 1.5s steps(40, end);
}
/* The typing effect */
@keyframes typing {
  from { width: 50% }
  to { width: 100% }
}
.backgroundText {
  position: absolute;
  width: 90%;
  height: 150px;
  left: 5%;
  top: 10px;
  overflow: hidden;
  background-color: white;
  opacity: 0.7;
  border-radius: 25px 25px 25px 25px;
  filter: blur(2px);
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
  top: 420px;
  right: 750px;
  width: 150px;
  height: 250px;
  //background-color: red;
  text-align: center;
  line-height: 100px;
  font-size: 50px;
  color: white;
}

.ennemi {
  position: absolute;
  top: 350px;
  right: 150px;
  width: 150px;
  height: 250px;
  //background-color: blue;
  text-align: center;
  line-height: 100px;
  font-size: 50px;
}

.tableStats {
  border-collapse: collapse;
  color: #ffffff;
  border: #ffffff 1px solid;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  opacity: 0;
}
.tableInteractions {
  border-collapse: collapse;
  color: #ffffff;
  border: #ffffff 1px solid;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  opacity: 0;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
