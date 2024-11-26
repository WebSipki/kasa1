import React, { useState } from "react";

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (images.length === 1) {
    return (
      <div className="gallery">
        <img src={images[0]} alt="Gallery" />
      </div>
    );
  }

  return (
    <div className="gallery">
      <button onClick={prevImage}>Précédent</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextImage}>Suivant</button>
    </div>
  );
};

export default Gallery;