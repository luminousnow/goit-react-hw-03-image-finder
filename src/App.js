import React from 'react';
import { Component } from 'react';
import Searchbar from './Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    imgCollection: [],
    loader: false,
    page: 0,
  };

  getImgCollection = imgCollection => {
    this.setState({ imgCollection });
  };

  render() {
    return (
      <div className="app">
        <Searchbar onSubmit={this.getImgCollection} />
        <ToastContainer position="bottom-center" autoClose={2500} />
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
