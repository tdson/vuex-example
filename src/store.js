import Vuex from 'vuex'
import Vue from 'vue'

import { INCREMENT } from './mutation-types'
import { mutations } from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: Object.assign({}, mutations),
  actions: {
    increment ({commit}) {
      commit(INCREMENT)
    }
    // or
    // increment (context) {
    //   context.commit('INCREMENT')
    // }
  },
  getters: {
    getCounter: state => {
      return state.counter
    }
  }
})

export default store
