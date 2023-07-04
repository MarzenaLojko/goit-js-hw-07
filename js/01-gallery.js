import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const showOriginalSize = (event, imageSrc) => {
  event.preventDefault();
  const instance = window.basicLightbox.create(`
    <div class="modal">
        <img src=${imageSrc} />
    </div>
`);
  instance.show();
  const f = (event) => {
    const key = event.key;
    if (basicLightbox.visible() && key === 'Escape') {
      instance.close();
      console.log('closed');
      document.removeEventListener('keydown', f);
    }
  };
  document.addEventListener('keydown', f);
  document.removeEventListener('click', clickEventFunction);
};

galleryItems.forEach((item, index) => {
  gallery.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item"> 
  <a class="gallery__link" href=${item.original}> 
    <img 
      class="gallery__image" 
      src=${item.preview} 
      data-source=${item.original}
      alt=${item.description}
    /> 
  </a> 
</div> 
`
  );
  const galleryLink = document.querySelector(`a`);
  const clickEventFunction = (event) => {
    showOriginalSize(event, item.original);
  };

  galleryLink.addEventListener('click', clickEventFunction);
});

console.log(galleryItems);
