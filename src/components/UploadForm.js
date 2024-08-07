import React, { useState } from 'react';

const UploadForm = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/images', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })
      .then(res => res.json())
      .then(data => {
        setUrl('');
        // Opcional: actualizar el estado de imágenes en el componente padre
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter image URL"
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
