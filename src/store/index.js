import Vue from 'vue'
import Vuex from 'vuex'
import Footer from './modules/Footer'
import HotMale from './modules/HotMale'
import OneplusZone from './modules/OneplusZone'
import OppoContent from './modules/OppoContent'
import OppoContent2 from './modules/OppoContent2'
import OppoHeader from './modules/OppoHeader'
import OppoZone from './modules/OppoZone'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Footer,
    HotMale,
    OneplusZone,
    OppoContent,
    OppoContent2,
    OppoHeader,
    OppoZone
  }
})
