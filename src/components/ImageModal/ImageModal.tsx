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
  isOpen: boolean;
  imageUrl: string | null;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, onRequestClose }) => {
  if (!isOpen || !imageUrl) return null;

  return (
    <div className="modal">
      <button onClick={onRequestClose}>Close</button>
      <img src={imageUrl} alt="Modal" />
    </div>
  );
};

export default ImageModal;
