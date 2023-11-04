
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
document.body.style.backgroundColor = 'rgba(90, 99, 174, 0.47)';

const galleryImage = document.querySelector('.gallery');
const itemsMarkup = createGalleryImageMarkup(galleryItems);
galleryImage.insertAdjacentHTML('beforeend', itemsMarkup);
galleryImage.addEventListener('click', onImgClick);

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

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600" style= "border-radius: 5%; box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    10px 10px 20px 0px rgba(70, 79, 157, 0.51), 5px 5px 5px 0px rgba(0, 0, 0, 0.1)">`,

    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );

  const onKeydownEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  // window.addEventListener('keydown', onKeydownEsc);
  // window.removeEventListener('keydown', onKeydownEsc);
  instance.show();
}
/*const instance = basicLightbox.create(
  `<img width="800" height="600" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);
function onImgClick(element) {
  element.preventDefault();
  const datasetSource = element.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}
function onEscKeyPress(e) {
  if (element.code !== 'Escape') return;
  instance.close();
}*/

console.log(galleryItems);
