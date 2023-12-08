import { createStore } from 'vuex'

export default createStore({
  state: {
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
    // change player statistic
    changeCalm(state, payload){
      state.player.calm += payload
    },
    changeFrustration(state, payload){
      state.player.frustration += payload
    },
  },
  actions: {
  },
  modules: {
  }
})
