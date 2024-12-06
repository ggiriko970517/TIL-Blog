import React from 'react';
const ExampleCarouselImage = ({ text, src }) => {
  return (
    <div>
      <img
        className="d-block w-100"
        src={src || 'https://via.placeholder.com/800x400'}
        alt={text || 'Carousel slide'}
        style={{ height: '400px', objectFit:'cover' }}
      />
    </div>
  );
};
export default ExampleCarouselImage;