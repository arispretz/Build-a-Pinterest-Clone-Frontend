import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageCard from './ImageCard';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="container">
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map(image => (
          <ImageCard key={image._id} image={image} />
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGrid;
