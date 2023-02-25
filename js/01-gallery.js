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

divGalleryRef.addEventListener('click',CreateBasicBox);
  
// Функція прибирає дефолтні налаштування браузера; перевіряє чи в потрібне місце клікнув користувач; створює модалку з потрібним зображенням; виконує закриття модалки кнопкою Escape;
function CreateBasicBox (event){
  event.preventDefault();
  if(event.target.nodeName !== 'IMG'){
  return
 }
 const instance = basicLightbox.create(`
  <img width="auto" src="${event.target.dataset.source}">
`)
  instance.show();

divGalleryRef.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      instance.close()
   } 
});
}
