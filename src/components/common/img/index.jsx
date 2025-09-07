import React, { useState } from 'react';
import './stylesheet.css';

const Img = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  width,
  height,
  style = {},
  onClick,
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const getImageSrc = () => {
    if (imageError && fallbackSrc) {
      return fallbackSrc;
    }
    return src;
  };

  return (
    <div className={`img-container ${className}`} style={style}>
      {imageLoading && (
        <div className="img-loading">
          <div className="loading-spinner"></div>
        </div>
      )}
      
      <img
        src={getImageSrc()}
        alt={alt}
        className={`img-element ${imageLoading ? 'img-loading' : ''} ${imageError ? 'img-error' : ''}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        onClick={onClick}
        style={{ width, height }}
        {...props}
      />
      
      {imageError && !fallbackSrc && (
        <div className="img-fallback">
          <span className="fallback-text">{alt || 'Image'}</span>
        </div>
      )}
    </div>
  );
};

export default Img;
