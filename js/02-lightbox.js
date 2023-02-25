import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const ulRef = document.querySelector('ul.gallery');
const liMarkup = createLiImageMarkup (galleryItems)
ulRef.innerHTML = liMarkup; 


 function createLiImageMarkup (items) {
    return items.map(({preview, original, description}) => {
     return   `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
 };

 const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });