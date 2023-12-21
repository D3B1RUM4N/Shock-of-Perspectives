import axios from 'axios'
import router from '@/router'
import { createStore } from 'vuex'
import { randomString } from '@/assets/js/utils/strings.utils'
import { Reaction } from '@/assets/js/models/altercation.model'
import { GameController, Resume } from '@/assets/js/controllers/game.controller'
import { Character, CharacterOptions } from '@/assets/js/models/character.model'

export default createStore({
  state: {
    controller: new GameController(),
    resume: undefined
  },
  getters: {},
  mutations: {
    storeCharacters (state, payload) {
      state.controller.storeCharacters(payload.map(c => {
        const { gender, skin, csp, name } = c
        const options = new CharacterOptions(gender, skin, csp)
        return new Character(name, options)
      }))
    },
    storeCriteria (state, payload) {
      const { genders, skins, csps } = payload

      state.controller.storeGenders(genders)
      state.controller.storeSkins(skins)
      state.controller.storeCsps(csps)
    },
    storeReactions (state, payload) {
      state.controller.storeReactions(payload.map(r => new Reaction(r)))
    },
    setNewAltercation (state, payload) {
      state.controller.setAltercation(payload)
    },
    storeSession (state, payload) {
      state.controller.storeSession(payload)
    },
    storeResume (state, payload) {
      const { stats, history } = payload
      state.resume = new Resume(
          stats,
          history
      )
    }
  },
  actions: {
    async askCriteria (state) {
      try {
        const { data, status } = await axios.get('/characters/criteria')
        if (status === 204) return console.error('No criteria found!')
        state.commit('storeCriteria', data)
      } catch (e) {
        console.error(e)
      }
    },
    async askCharacters (state) {
      try {
        const { data, status } = await axios.get('/characters')
        if (status === 204) return console.error('No characters found!')
        state.commit('storeCharacters', data)
      } catch (e) {
        console.error(e)
      }
    },
    async askReactions (state) {
      try {
        const { data, status } = await axios.get('/reactions')
        if (status === 204) return console.error('No reactions found!')
        state.commit('storeReactions', data)
      } catch (e) {
        console.error(e)
      }
    },
    async nextAltercation (state) {
      await router.push('/loading')
      try {
        const { data } = await axios.get('/altercations')
        state.commit('setNewAltercation', data)
        setTimeout(() => router.push('/altercation'), 2000)
      } catch (e) {
        console.error(e)
        await router.push('/')
      }
    },
    async createSession (state, options) {
      try {
        const { data } = await axios.post('/session', {
          name: randomString(Math.floor(Math.random() * 15) + 1),
          ...options
        })
        state.commit('storeSession', data)
        state.dispatch('nextAltercation')
      } catch (e) {
        console.error(e)
      }
    },
    async askResume (state, sessionCode) {
      await router.push('/loading')
      const { code } = state.state.controller.session

      try {
        const resSessionStats = await axios.get(`/session/${code}`)
        const resGameHistory  = await axios.get(`/game/resume/${code}`)
        if (resSessionStats.status === 204) console.warn('No stats found for the current session!')
        if (resGameHistory.status === 204) console.warn('No history found for the current session!')

        state.commit('storeResume', {
          stats: resSessionStats.data,
          history: resGameHistory.data
        })
        setTimeout(() => router.push('/stats'), 1000)
      } catch (e) {
        console.error(e)
        await router.push('/')
      }
    },
    async react (state, payload) {
      const { code } = state.state.controller.session
      console.log(code)
      const { altercation, reaction } = payload

      try {
        const { status } = await axios.post('/game/react', {
          session: code,
          altercation: altercation,
          reaction: reaction
        })
        setTimeout(() => {
          if (status === 300) return state.dispatch('askResume')
          state.dispatch('nextAltercation')
        }, 500)
      } catch (e) {
        console.error(e)
        await router.push('/')
      }
    },
  },
  modules: {}
})
