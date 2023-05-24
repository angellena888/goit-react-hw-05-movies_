import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8c36e317d9a7f81a4ff072fff53940cf';

async function FetchSearchByKeyword (query) {
  const request = await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
  return request.data;
}

export default FetchSearchByKeyword;