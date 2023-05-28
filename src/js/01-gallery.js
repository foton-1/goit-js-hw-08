// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGaleryMarkup(galleryItems);
galleryEl.style.listStyle = 'none';

galleryEl.insertAdjacentHTML(`beforeend`, galleryMarkup);

function createGaleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join(``);
}

galleryEl.addEventListener(`click`, onGalleryElClick);

function onGalleryElClick(event) {
  if (!event.target.classList.contains(`gallery__image`)) {
    return;
  }
  //   event.preventDefault();
  console.log(event.target);
}

// Ініціалізація бібліотеки SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  /* options */
});
