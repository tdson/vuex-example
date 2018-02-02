import { INCREMENT } from './mutation-types'

export const actions = {
  increment ({commit}) {
    commit(INCREMENT)
  }
}
