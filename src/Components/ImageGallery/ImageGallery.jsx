import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  render() {
    const imgGallery = this.props.imgGallery;
    console.log(imgGallery);

    return (
      <ul className={s.imageGallery}>
        {imgGallery.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            smlImg={webformatURL}
            lrgImg={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
