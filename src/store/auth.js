import axios from 'axios'

export default {
    namespaced: true,
    state: {
        access_token: null,
        userInfo: null
    },
    mutations: {
      SET_TOKEN (state, access_token) {
        state.access_token = access_token
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials)

            dispatch('attempt', response.data.access_token)
            console.log(response.data.access_token)
           
        },

        async attempt({ commit }, access_token) {

           commit('SET_TOKEN', access_token)
           console.log(access_token)

          /*  try {
               let response = axios.get('http://127.0.0.1:8000/api/auth/userInfo')

           } catch (e) {

           } */
        }
    }
}