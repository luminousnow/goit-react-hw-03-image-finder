import React, { Component } from 'react';
import s from './Button.module.css';

export class Button extends Component {
  state = {
    page: 0,
  };
  render() {
    return (
      <div className={s.button__box}>
        <button className={s.button} type="button">
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
