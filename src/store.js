import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxItems: 10,
    totalCount: 0,
    pilotName: 'Trowa',
    mechName: 'Heavy Arms',
  },

  getters: {

  },

  mutations: {
    addCount(state) {
      state.totalCount++
    },

    deductCount(state) {
      state.totalCount--
    },

    updateName(state, name) {
      state.pilotName = name
    },

    updateMech(state, name) {
      state.mechName = name
    },
  },

  actions: {

  },
})