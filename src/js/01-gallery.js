import { galleryItems } from './gallery-items.js';
// Change code below this line

//2.Implementacja delegowania na div.gallery i otrzymanie url większego obrazu.
const galleryPictures = document.querySelector('div.gallery');
const newGalery = galleryItems
    .map(({preview, original, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image" 
                    src="${preview}" 
                    data-source="${original}"
                    alt="${description}" 
                    />
            </a>
        </div>`
    )
    .join('');
   
    galleryPictures.insertAdjacentHTML("afterbegin", newGalery);
    //console.log(galleryItems);
    //4.Otworzenie okna modalnego po kliknięciu w element galerii. Aby to zrobić, zapoznaj się z dokumentacją i przykładami.
    //5.Zmiana wartości atrybutu src elementu <img> w oknie modalnym przed otworzeniem. 
    //Użyj gotowego znacznika okna modalnego z obrazem z przykładów biblioteki basicLightbox.
const onClickPicture=(event) =>{
    event.preventDefault();
      if (event.target.nodeName !== `IMG`) {
        return;
      }
      const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
    `);
      instance.show();
      const modalEscape =  (e) => {
        if (e.code === 'Escape') {
        instance.close()
        }
          };
          window.addEventListener('keydown',modalEscape);
     }
     galleryPictures.addEventListener("click", onClickPicture);