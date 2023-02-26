import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
 
const divGalleryRef = document.querySelector('div.gallery')
const markup = createMarkup(galleryItems);

// Додаємо в DOM потрібну розмітку
divGalleryRef.insertAdjacentHTML('beforeend', markup) ;

// Функція перебирає масив - додаючи розмітку шаблонного варіанту з потрібними атрибутами, та повертаємо рядок
function createMarkup(items) {
    return items.map(({preview, original, description}) => {
  return `
  <a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
</a>
`}).join('');
};

divGalleryRef.addEventListener('click',createBasicBox);
  
// Функція прибирає дефолтні налаштування браузера; перевіряє чи в потрібне місце клікнув користувач; створює модалку з потрібним зображенням; виконує закриття модалки кнопкою Escape;
function createBasicBox (event){
  event.preventDefault();
  if(event.target.nodeName !== 'IMG'){
  return
 }

const instance = basicLightbox.create(
  `<img src="${event.target.dataset.source}" width="800" height="600">`,
  {
    onShow: () => {
      divGalleryRef.addEventListener("keydown", onEscapeClose);
    },
    onClose: () => {
      divGalleryRef.removeEventListener("keydown", onEscapeClose);
    },
  }
);

instance.show();


function onEscapeClose(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
}
