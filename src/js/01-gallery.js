// Add imports above this line
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
// Change code below this line
// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryHTML = galleryItems
  .map(
    img =>
      `<li class = "gallery__item"><a class="gallery__link" href = ${img.original}><img src = ${img.preview} alt = "${img.description}"  class = "gallery__image"></a></li>`
  )
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryHTML);
// console.log(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
