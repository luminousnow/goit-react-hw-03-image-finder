import React, { Component } from 'react';
import s from './ImageGallery.module.css';

export class ImageGallery extends Component {
  render() {
    return <ul className={s.imageGallery}></ul>;
  }
}

export default ImageGallery;
