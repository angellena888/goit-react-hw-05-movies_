import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8c36e317d9a7f81a4ff072fff53940cf';

async function FetchTrending() {
  const request = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  const response = await request.data.results
  return response;
};

export default FetchTrending;