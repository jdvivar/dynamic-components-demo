import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brand: '',
  },
  mutations: {
    changeBrandTo (state, newBrand) {
      state.brand = newBrand
    }
  },
  getters: {
    getBrand: state => state.brand
  }
})
