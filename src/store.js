import Vuex from 'vuex'
import Vue from 'vue'

import { mutations } from './mutations'
import { actions } from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: Object.assign({}, mutations),
  actions: Object.assign({}, actions),
  getters: {
    getCounter: state => {
      return state.counter
    }
  }
})

export default store
