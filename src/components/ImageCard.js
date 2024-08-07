import React from 'react';

const ImageCard = ({ image }) => {
  const handleBrokenImage = (event) => {
    event.target.src = '/placeholder-image.png';
  };

  return (
    <div className="image-card">
      <img
        src={image.url}
        alt="User content"
        onError={handleBrokenImage}
      />
      <div className="image-card-overlay">
      </div>
    </div>
  );
};

export default ImageCard;
