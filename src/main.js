import { fetchImages } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  nav: true,
  close: true,
});

const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', searchImages);

function searchImages(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const query = event.currentTarget.elements.search.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search images',
      position: 'topRight',
    });
    return;
  }
  fetchImages(query)
    .then(data => {
      console.log(data);
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        gallery.insertAdjacentHTML('beforeend', createGallery(data.hits));
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
      });
    });
}
