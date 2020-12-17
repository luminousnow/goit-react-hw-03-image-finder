import React, { Component } from 'react';
import fetchGallery from '../../api/apiServise';
import Button from '../Button/Button';
import s from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    imgCollection: [],
    pageNum: 1,
    error: null,
    showLoader: false,
  };

  // Сабміт при новому пошуку
  componentDidUpdate(prevProps, prevState) {
    const prevImgName = prevProps.imgName;
    const currentImgName = this.props.imgName;
    const { pageNum } = this.state;

    if (prevImgName !== currentImgName) {
      // this.setState({ pageNum: 1 }); // сюди приходить перший проп сторінки від Арр
      this.setState({ showLoader: true });

      // Вирішити проблему з проставленням по дефолту pageNum: 1 і imgCollection: []
      fetchGallery(currentImgName, pageNum)
        .then(gallery => {
          this.setState(prevState => ({
            imgCollection: [...prevState.imgCollection, ...gallery.hits],
          }));
        })
        .catch(error => this.setState(error))
        .finally(() => {
          this.setState({ showLoader: false });
        });
    }
  }

  // клік на Лоад мо
  // fetchGallery = () => {
  //   apiServise()
  //     .then(apiImgCollection => {
  //       const hits = apiImgCollection.hits;

  //       this.props.onFetch(hits);
  //       this.setState(prevState => ({ pageNum: prevState.pageNum + 1 }));
  //     })
  //     .catch(error => this.setState(error))
  //     .finally(() => {
  //       this.props.switchLoader(false);
  //     });
  // };

  render() {
    const { imgCollection, error } = this.state;
    console.log(imgCollection);
    return (
      <>
        <ul className={s.imageGallery}>
          {imgCollection.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              smlImg={webformatURL}
              lrgImg={largeImageURL}
            />
          ))}
          {/* рендарить повідомлення помилки по умові */}
          {error && <h1>{error.message}</h1>}

          {/* рендерить Button по умові */}
        </ul>
        {imgCollection.length !== 0 && <Button />}
      </>
    );
  }
}

export default ImageGallery;
