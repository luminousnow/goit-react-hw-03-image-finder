import React, { Component } from 'react';
import s from './ImageGalleryItem.molule.css';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={s.imageGalleryItem}>
        <img src="" alt="" className={s.imageGalleryItem__image} />
      </li>
    );
  }
}

export default ImageGalleryItem;
