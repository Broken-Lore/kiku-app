import axios from 'axios'
const baseUrl = "http://localhost:8000/api/"

export const sounds = {
    getAll(){
        return axios.get(baseUrl+"scenes/" + id + "/sounds")
    }
}

