import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products/products'
import articles from './modules/articles/articles'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    articles
  },
  state: {},
  getters: {},
  mutations: {}
})
