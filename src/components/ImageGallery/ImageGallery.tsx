import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';
import { ImageFromAPI } from '../../services/api';

interface ImageGalleryProps {
  images: ImageFromAPI[];
  onImageClick: (image: ImageFromAPI) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className="container">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1440: 5 }}>
        <Masonry className={s.masonryGrid}>
          {images.map((image) => (
            <div key={image.id} className={s.imageWrapper}>
              <ImageCard
                image={image}
                onClick={() => onImageClick(image)}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ImageGallery;
