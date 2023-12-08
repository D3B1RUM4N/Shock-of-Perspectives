import { createStore } from 'vuex'

export default createStore({
  state: {
    nbInteractions: 5,
    player: {
      calm: 50,
      frustration: 50,
      strength: 50,
    },
    npc: {
      calm: 0,
      resistance: 40,
    }
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
      state.npc.calm = payload.calm
      state.npc.resistance = payload.resistance
    }
  },
  actions: {
  },
  modules: {
  }
})
