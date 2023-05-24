import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8c36e317d9a7f81a4ff072fff53940cf';

async function FetchReviews(id) {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
}

export default FetchReviews;