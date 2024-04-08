const API_KEY = '43275871-c76d4a7895f35b3cf58095282';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGallery } from './render-functions';

export function fetchImages(text) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  fetch(`https://pixabay.com/api?${params}`)
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
