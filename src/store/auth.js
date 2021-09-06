import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        userInfo: null
    },
    mutations: {
    },
    actions: {
        async signIn(_, credentials) {
            let response = await axios.post('http://127.0.0.1:8000/api/auth/login', credentials)

            console.log(response.data);
        }
    }
}