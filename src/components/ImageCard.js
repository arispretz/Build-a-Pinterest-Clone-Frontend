import React from 'react';

const ImageCard = ({ image }) => {
  const handleBrokenImage = (event) => {
    event.target.src = '/placeholder-image.png'; // Ruta a la imagen de placeholder
  };

  return (
    <div className="image-card">
      <img
        src={image.url}
        alt="User content"
        onError={handleBrokenImage}
      />
      <div className="image-card-overlay">
        {/* Opcional: agregar botones para eliminar la imagen si el usuario está autenticado */}
      </div>
    </div>
  );
};

export default ImageCard;
