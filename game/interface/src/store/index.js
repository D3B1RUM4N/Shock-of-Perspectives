import { createStore } from 'vuex'
import Character from "../../public/Model/Character";

export default createStore({
  state: {
    nbInteractions: 5,
    player: null,
    text: "altercation"
  },
  getters: {
  },
  mutations: {
    // interactions restantes
    changeNbInteractions(state, payload){
      state.nbInteractions += payload
    },
    setPlayerStat(state, payload){
      //set player to payload
      state.player = payload;
    },
    // change player statistic
    changePlayerCalm(state, payload){
      state.player.calm += payload
    },
    changePlayerFrustration(state, payload){
      state.player.frustration += payload
    },

    newNPC(state, payload){
      state.npc = payload
    },
    newAltercation(state, payload){
      state.text = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
