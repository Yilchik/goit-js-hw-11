import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');

const API_KEY = '43275871-c76d4a7895f35b3cf58095282';

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
  const params = new URLSearchParams({
    key: API_KEY,
    q: text,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  fetch(`https://pixabay.com/api?${params.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data =>
      gallery.insertAdjacentHTML('beforeend', createGallery(data.hits))
    )
    .catch(error =>
      iziToast.error({
        title: 'Error',
        message: `"Sorry, there are no images matching your search query. Please try again!"`,
        position: 'topRight',
      })
    );
}

function createGallery(arr) {
  return arr
    .map(
      ({ id, previewURL, tags }) => `
    <li class="gallery-item" data-id = ${id}>
          <img
            class="gallery-image"
            src="${previewURL}"
            alt="${tags}" />
      </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('gallery', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
