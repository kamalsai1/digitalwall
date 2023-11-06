import React from 'react';
import './Modal.css';
const Modal = ({ isOpen, onClose, children,title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 style={{marginTop:"0px"}}>{title}</h2>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;