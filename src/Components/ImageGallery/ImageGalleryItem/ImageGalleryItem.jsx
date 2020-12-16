import React, { Component } from 'react';
import s from './ImageGalleryItem.molule.css';

export class ImageGalleryItem extends Component {
  render() {
    const smlImg = this.props.smlImg;
    const lrgImg = this.props.lrgImg;
    return (
      <li className={s.imageGalleryItem}>
        <img src={smlImg} alt="" className={s.imageGalleryItem__image} />
      </li>
    );
  }
}

export default ImageGalleryItem;
