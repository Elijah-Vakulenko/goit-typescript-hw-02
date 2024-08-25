import React from 'react';
import Modal from "react-modal";
import s from './ImageModal.module.css';
import { ImageFromAPI } from '../../services/api';

const customStyles = {
  content: {
    padding: "0",
    background: "unset",
    overflow: "unset",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ImageModalProps {
  image: ImageFromAPI | null; 
  isOpen: boolean; 
  onRequestClose: () => void; 
}

const ImageModal: React.FC<ImageModalProps> = ({ image, isOpen, onRequestClose }) => {
  if (!image) {
    return null; 
  }

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={s.overlay}
      contentLabel="Image Modal"
      appElement={document.getElementById("root") as HTMLElement} 
    >
      <img src={image.urls.regular} alt={image.alt_description || 'Image'} /> 
    </Modal>
  );
};

export default ImageModal;
