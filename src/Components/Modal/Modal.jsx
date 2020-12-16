import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  //  закриває модалку по натисканню Escape
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  // закриває модалку по кліку на Backdrop
  hendleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.hendleBackdropClick}>
        <div className={s.modal}>
          <img src="" alt="" />
          <p>Це моя модалка</p>
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
