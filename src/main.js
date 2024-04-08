import { fetchImages } from './js/pixabay-api.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  const text = searchInput.value.trim();

  if (text === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search images',
      position: 'topRight',
    });
    return;
  }
  fetchImages(text);
}
const lightbox = new SimpleLightbox('gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
lightbox.refresh();
