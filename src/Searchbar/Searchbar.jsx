import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    imgName: '',
    imgCollection: [],
    page: 0,
    loader: false,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  onNameChange = e => {
    this.setState({ imgName: e.currentTarget.value.toLowerCase() });
  };

  // При сабміті форми
  onSubmitPress = e => {
    e.preventDefault();

    // перевірка чи поле не є пустим
    if (this.state.imgName.trim() === '') {
      return toast.error('Введіть назву зображення');
    }

    // надсилає imgCollection у Арр
    this.props.onSubmit(this.state.imgCollection);

    // очищає поле пошуку Зображень
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.onSubmitPress} className={s.searchForm}>
          <button type="submit" className={s.searchForm__button}>
            <span className={s.searchForm__button__label}>Search</span>
          </button>

          <input
            value={this.state.imgName}
            onChange={this.onNameChange}
            className={s.searchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
