import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const newGalleryItems = [];

galleryItems.forEach(e => {
    const galleryItem = document.createElement("div");
    const galleryItemLink = document.createElement("a");
    const galleryItemImage = document.createElement("img");
    
    galleryItem.className = "gallery__item";
    galleryItemLink.className = "gallery__link";
    galleryItemImage.className = "gallery__image";

    galleryItemLink.href = e.original;
    galleryItemImage.src = e.preview;
    galleryItemImage.setAttribute("data-source", e.original);
    galleryItemImage.alt = e.description;
    
    galleryItem.append(galleryItemLink);
    galleryItemLink.append(galleryItemImage);
    newGalleryItems.push(galleryItem);
});

gallery.append(...newGalleryItems);

gallery.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") return;
    const imageDataSource = e.target.getAttribute("data-source");

    const instance = basicLightbox.create(
        `<img src="${imageDataSource}" width="800" height="600">`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", (e) => {
                    if (e.key === "Escape") instance.close();
                });
            }
        });
    
    instance.show();

});