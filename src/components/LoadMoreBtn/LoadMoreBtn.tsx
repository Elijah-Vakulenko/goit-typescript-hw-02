import React from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onClick: () => void; 
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={s.btn}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
