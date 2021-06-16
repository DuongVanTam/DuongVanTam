import actions from './action'
import mutations from './mutations'
import getters from './getters'

const state = {
  articles: []
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
