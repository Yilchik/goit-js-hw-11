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
  fetchImages(text);
}

function fetchImages(text) {
  iziToast.info({
    title: 'Loading',
    message: 'Loading images, please wait...',
    position: 'topRight',
  });

  gallery.innerHTML = '';

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

function createGallery(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        id,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item" data-id = ${id}>
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}" />
                <figcaption>likes${likes}  views${views}  comments${comments}  downloads${downloads}</figcaption>
               
        </a>
    </li>`
    )
    .join('');
}

const lightbox = new SimpleLightbox('gallery a', {});

lightbox.refresh();
