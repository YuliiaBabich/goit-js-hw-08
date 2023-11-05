// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
document.body.style.backgroundColor = 'rgba(90, 99, 174, 0.47)';

const galleryImage = document.querySelector('.gallery');
const itemsMarkup = createGalleryImageMarkup(galleryItems);
galleryImage.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryImageMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"
      style= "border-radius: 5%; box-shadow: inset 2px 2px 2px 0px rgba(70, 79, 157, 0.51),
    10px 10px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)" >
  <a class="gallery__link" href="${original}" >  
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      style= "border-radius: 5%; box-shadow: inset 2px 2px 2px 0px rgba(70, 79, 157, 0.51),
    7px 7px 20px 0px rgba(70, 79, 157, 0.51), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)"
    />
  </a>
</div>`;
    })
    .join('');
};

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// use library SimpleLightbox
/*const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
});
*/
console.log(galleryItems);
