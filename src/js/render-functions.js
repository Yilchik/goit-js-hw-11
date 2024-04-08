export function createGallery(arr) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
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
