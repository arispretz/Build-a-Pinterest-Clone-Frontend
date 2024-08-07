import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import ImageCard from '../components/ImageCard';

const UserPage = ({ match }) => {
  const [images, setImages] = useState([]);
  const userId = match.params.id;

  useEffect(() => {
    fetch(`/api/images?user=${userId}`)
      .then(res => res.json())
      .then(data => setImages(data));
  }, [userId]);

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

export default UserPage;
