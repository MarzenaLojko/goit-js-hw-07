import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryPictures = document.querySelector('.gallery');

// console.log(galleryPictures);

const newGalery = galleryItems
    .map(({preview, original, description}) => 
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" alt="${description}" />
        </a>`)
        .join('');

galleryPictures.insertAdjacentHTML("afterbegin",newGalery);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    canimationSpeed: 250,
    captionPosition: 'bottom',
});
galleryPictures.addEventListener("click",lightbox);