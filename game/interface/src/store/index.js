import { createStore } from 'vuex'
import Character from "../../public/Model/Character";

export default createStore({
  state: {
    Controller: null
  },
  getters: {
  },
  mutations: {
    // set Controller
    setController(state, controller) {
      state.Controller = controller;
    },
  },
  actions: {
  },
  modules: {
  }
})
