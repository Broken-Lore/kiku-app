import axios from 'axios'

export default {
    namespaced: true,
    state: {
        access_token: null,
        user: null,
        authenticated: false
    },
    getters: {
        authenticated (state) {
            return state.access_token && state.user
        },
        user (state) {
            return state.user
        }
    },
    mutations: {
      SET_TOKEN (state, access_token) {
        state.access_token = access_token
        },
      SET_USER (state, data) {
          state.user = data
      }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials)

           return dispatch('attempt', response.data.access_token)
            console.log(response.data.access_token)
           
        },

        async attempt({ commit, state }, access_token) {

            if(access_token){
                commit("SET_TOKEN", access_token)
                console.log(access_token);
            }
            if(!state.access_token){
            return
            }
            try {
                let response = await axios('http://127.0.0.1:8000/api/auth/userInfo')
                
                commit("SET_USER", response.data)
                console.log(response.data)
               
            } catch(e) {
                commit("SET_TOKEN", null)
                commit("SET_USER", null)
            }

        },
        signOut ( { commit } ) {
            return axios.post('http://127.0.0.1:8000/api/auth/logout').then(() => {
                commit("SET_TOKEN", null)
                commit("SET_USER", null)
            })
        }

    }
}