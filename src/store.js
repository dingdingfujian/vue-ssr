import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default function createStore() {
  let store =  new Vuex.Store({
    state: {
      homeInfo: '',
      animalInfo: ''
    },
    actions: {
      getHomeInfo({ commit }) {
        return axios.get('http://localhost:8080/api/getHomeInfo').then((res) => {
          commit('setHomeInfo', res.data)
        })
      },
      getAnimalInfo({ commit }) {
        return axios.get('http://localhost:8080/api/getAnimalInfo').then((res) => {
          commit('setAnimalInfo', res.data)
        })
      }
    },
    mutations: {
      setHomeInfo(state, res) {
        state.homeInfo = res
      },
      setAnimalInfo(state, res) {
        state.animalInfo = res
      }
    }
  })

  return store
}
