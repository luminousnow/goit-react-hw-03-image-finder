import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';
import Searchbar from './Components/Searchbar/Searchbar';
import Modal from './Components/Modal/Modal';
import Button from './Components/Button';
import Loader from './Components/Loader';

class App extends Component {
  state = {
    imgCollection: [],
    showModal: false,
    loader: false,
    page: 0,
  };

  getImgCollection = imgCollection => {
    this.setState({ imgCollection });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { getImgCollection, toggleModal } = this;

    return (
      <div className={s.app}>
        <ToastContainer position="bottom-center" autoClose={2500} />
        <Searchbar onSubmit={getImgCollection} />
        {/* <Modal onClose={toggleModal} /> */}
        <Loader />
        <Button />
      </div>
    );
  }
}

// Архітектура АРР
// Searchbar https://youtu.be/xoG3l2PgiYY?t=1352
// Галерея
// Елемент Галереї
// Пошук зображення https://youtu.be/xoG3l2PgiYY?t=343
// Лодер
// Модалка https://www.youtube.com/watch?v=w6MW1szKuT4&feature=youtu.be&t=1383

export default App;
