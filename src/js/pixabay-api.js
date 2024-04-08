const API_KEY = '43275871-c76d4a7895f35b3cf58095282';
const BASE_URL = 'https://pixabay.com/api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGallery } from './render-functions';

export async function fetchImages(text) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}?${params}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
      });
    });
}
