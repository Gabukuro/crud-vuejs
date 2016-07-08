import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    breweries: {
      list: [],
      selected: {}
    },
    beers: {
      list: [],
      selected: {}
    }
  },
  mutations: {
    SET_BREWERIES(store, obj) {
      store.breweries.list = obj
    },
    SET_BREWERY(store, obj) {
      store.breweries.selected = obj
    },
    SET_BEERS(store, obj) {
      store.beers.list = obj
    },
    SET_BEER(store, obj) {
      store.beers.selected = obj
    },
    SHOW_LOADING(store) {
      store.loading = true;
    },
     HIDE_LOADING(store) {
      store.loading =false;
    },
  }
})