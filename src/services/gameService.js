import axios from 'axios';

const baseUrl = 'http://localhost:8000/api';

export const gameService = {

    randomSound(id) {
        return axios.get(baseUrl + "/gameSound/" + id )
    },

    compareSounds(data) {
        return axios.post(baseUrl + "/compare", data)
    }
}
/* module.exports = {
    gameService,
  }; */