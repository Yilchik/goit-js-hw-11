export function createGallery(arr) {
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
                
               
        </a>
    </li>`
    )
    .join('');
}
