import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT (state) {
      state.counter++
    }
  },
  actions: {
    increment ({commit}) {
      commit('INCREMENT')
    }
  },
  getters: {
    getCounter: state => {
      return state.counter
    }
  }
})

export default store
