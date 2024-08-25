import React from 'react';
import s from './ImageCard.module.css';
import { ImageFromAPI } from '../../services/api'; 

interface ImageCardProps {
  image: ImageFromAPI;
  onClick: (image: ImageFromAPI) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image);
  };

  const getRandomHeight = (): number => {
    const heights = [200, 250, 300, 350, 400];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className={s.imageContainer} style={{ height: getRandomHeight() }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
        className={s.image}
      />
    </div>
  );
};

export default ImageCard;
