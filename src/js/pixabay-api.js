import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '56361798-f8b70e825b8ee5840492d6dfc';
  const BASE_URL = 'https://pixabay.com/api/';

  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}
