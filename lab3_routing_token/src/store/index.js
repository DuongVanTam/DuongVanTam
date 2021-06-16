import Vue from 'vue'
import Vuex from 'vuex'
import data from './modules/products'
import art from './modules/articles'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    data,
    art
  },
  state: {},
  getters: {},
  mutations: {}
})
