import axios from 'axios';
const baseUrl = "http://localhost:8000/api/scenes/";

export const sceneService = {
    getAll() {
        return axios.get(baseUrl)
    },

    getSoundsbyScene(id) {
        return axios.get(baseUrl + id + "/sounds")
    },
}

/* const getAlbumsService = async (queryParams) => {
  try {
    const queryString = Object.keys(queryParams)
      .map((key) => `${key}=${queryParams[key]}`)
      .join('&');
    const URL = `https://itunes.apple.com/search?${queryString}`;
    console.log('this is the URL:' + URL);
    return await axios.get(URL);
  } catch (e) {
    throw new Error(e.message);
  }
}; */

/* module.exports = {
    sceneService,
  }; */
  