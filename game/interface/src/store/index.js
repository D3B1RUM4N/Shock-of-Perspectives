import { createStore } from 'vuex'

export default createStore({
  state: {
    nbInteractions: 5,
    player: {
      calm: 50,
      frustration: 50,
      resistance: 50,
      strength: 80,
    },
    npc: {
      calm: 0,
      frustration : 0,
      resistance: 40,
      strength: 40,
    },
    text: "altercation"
  },
  getters: {
  },
  mutations: {
    // interactions restantes
    changeNbInteractions(state, payload){
      state.nbInteractions += payload
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
