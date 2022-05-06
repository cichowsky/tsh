import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { overlayStyles, contentStyles, SCloseButton } from './Modal.styles';
import './Modal.styles.css';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{
        overlay: { ...overlayStyles },
        content: { ...contentStyles },
      }}
      closeTimeoutMS={200}
    >
      <SCloseButton type="button" onClick={() => setIsOpen(false)}>
        <CloseIcon />
      </SCloseButton>
      {children}
    </ReactModal>
  );
};

export default Modal;
