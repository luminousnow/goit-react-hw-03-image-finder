import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';

export class ImageGallery extends Component {
  state = {};

  render() {
    const newImgName = this.props.imgName;
    const imgGallery = this.props.imgGallery;
    const showLoader = this.props.showLoader;

    return (
      <>
        {imgGallery && (
          <div>
            <h1>{`Результати по: ${newImgName}`}</h1>
            <ul className={s.imageGallery}></ul>;
          </div>
        )}
        {/* рендерить Loader по умові */}
        {showLoader && (
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        )}
        <Button />
      </>
    );
  }
}

export default ImageGallery;
