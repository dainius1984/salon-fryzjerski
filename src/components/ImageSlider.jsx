import React from 'react';

function ImageSlider({ imagePaths }) {
  return (
    <div className="image-grid">
      {imagePaths.map((imagePath, index) => (
        <img key={index} src={imagePath} alt={`Gallery image ${index}`} className="grid-item" />
      ))}
    </div>
  );
}

export default ImageSlider;
