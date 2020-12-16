import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import GetGallery from './api/GetGallery';

class App extends Component {
  state = {
    imgName: '',
    imgCollection: null,
    showModal: false,
  };

  // отримує і записує в imgName назву зображення
  getImgName = submitImgName => {
    this.setState({ imgName: submitImgName });
  };

  // отримує і записує в imgCollection масив зображень
  getImgCollection = apiImgCollection => {
    this.setState({ imgCollection: apiImgCollection });
  };

  // змінює стан showLoader на протилежний
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { getImgName, getImgCollection, toggleModal } = this;
    const { imgName, showModal } = this.state;

    return (
      <div className={s.app}>
        <ToastContainer position="bottom-center" autoClose={2500} />
        <Searchbar onSubmit={getImgName} />
        <GetGallery imgName={imgName} onFetch={getImgCollection} />
        <ImageGallery />

        {/* рендерить Modal по умові */}
        {showModal && <Modal onClose={toggleModal} />}
      </div>
    );
  }
}

// Архітектура АРР
// Searchbar https://youtu.be/xoG3l2PgiYY?t=1352
// Галерея
// Елемент Галереї
// Пошук зображення https://youtu.be/xoG3l2PgiYY?t=343
// Лодер https://youtu.be/xoG3l2PgiYY?t=2609
// Модалка https://www.youtube.com/watch?v=w6MW1szKuT4&feature=youtu.be&t=1383

export default App;
