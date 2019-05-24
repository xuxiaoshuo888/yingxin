import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ''
    },
    getters: {
        token: state => state.token
    },
    mutations: {
        setToken(state, data) {
            state.token = data
            Cookies.set('setToken', data)
        }
    },
    actions: {}
})
