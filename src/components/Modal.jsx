import React from 'react'
import { createPortal } from 'react-dom'
import '../assets/styles/components/Modal.css' 
import { AiOutlineClose } from 'react-icons/ai'

const Modal = (props) => (
  props.isOpen
    ? createPortal(
      <div className='modal-open'>
        <figure onClick={props.onClose} className="modal-close">
            <AiOutlineClose className='close' />
        </figure>
        <div>{props.children}</div>
      </div>,
      document.getElementById('modal'),
    ) :
    ""
);

export default Modal