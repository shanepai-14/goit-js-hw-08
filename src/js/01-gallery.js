import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    AddImage(item.preview,item.original,item.description);
  });

  function AddImage(preview ,original,description){
    gallery.innerHTML += ` <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
  }

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
   });