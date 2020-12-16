import React, { Component } from 'react';
import s from './ImageGallery.module.css';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    // KEY: '19092084-bc4ccb70eacd908f2d855c18b',
    // URL: 'https://pixabay.com/api/',
    // imgCollection: null,
    // pageNum: 1,
    // perPage: 12,
    showLoader: false,
  };

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {
  //   const prevImgName = prevProps.imgName;
  //   const newImgName = this.props.imgName;
  //   const { KEY, URL, perPage } = this.state;
  //   let { pageNum } = this.state;

  //   if (prevImgName !== newImgName) {
  //     pageNum = 1;

  //     this.setState({ showLoader: true });
  //     fetch(
  //       `${URL}?q=${newImgName}&page=${pageNum}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  //     )
  //       .then(res => res.json())
  //       .then(imgCollection =>
  //         this.setState({ imgCollection: imgCollection.hits }),
  //       )
  //       .finally(() => this.setState({ showLoader: false }));
  //   }
  // }

  render() {
    console.log(this.state.imgCollection);
    const newImgName = this.props.imgName;
    const { imgCollection, showLoader } = this.state;

    return (
      <>
        {imgCollection && (
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
