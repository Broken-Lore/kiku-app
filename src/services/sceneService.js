import axios from 'axios'
const baseUrl = "http://localhost:8000/api/scenes/"
export const sceneService = {
    getAll() {
        return axios.get(baseUrl)
    },

    getSoundsbyScene(id) {
        return axios.get(baseUrl + id + "/sounds")
    }
}


