import { INCREMENT } from './mutation-types'

export const mutations = {
  [INCREMENT] (state) {
    state.counter++
  }
}
