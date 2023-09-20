import React, { useState } from 'react';
import './Carousel.css'

function CarouselLogement({ logement }) {
    // Initialisez l'état local pour stocker le numéro de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? logement.pictures.length - 1 : currentIndex - 1);
  };
  
  const handleNext = () => {
    setCurrentIndex(currentIndex === logement.pictures.length - 1 ? 0 : currentIndex + 1);
  };
  // Mettez à jour le numéro de l'image actuelle à chaque fois que l'utilisateur change d'image
  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };
  return (  <div 
    id="carouselExampleIndicators"
     class="carousel slide"
      data-bs-ride="carousel"
      onSlide={(event) => {
        const newIndex = parseInt(event.target.querySelector('.carousel-item.active').getAttribute('data-bs-slide-to'));
        handleSelect(newIndex, event);
      }}
      >
  <div class="carousel-indicators">
    {logement.pictures.map((item, index) => (
      <button
        key={index}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to={index}
        className={index === currentIndex ? 'active' : ''}
        aria-current={index === currentIndex ? 'true' : 'false'}
        aria-label={`Slide ${index + 1}`}
      ></button>
    ))}
  </div>
  <div class="carousel-inner">
    {logement.pictures.map((item, index) => (
      <div key={item} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
        <img src={item} alt={item} class="d-block w-100" />
        {index === currentIndex && (
          <div class="carousel-caption d-none d-md-block">
            <p className="mt-3">
              {currentIndex + 1}/{logement.pictures.length}
            </p>
          </div>
        )}
      </div>
    ))}
  </div>
  <button onClick={handlePrev} class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Previous</span> */}
  </button>
  <button onClick={handleNext} class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    {/* <span class="visually-hidden">Next</span> */}
  </button>
</div>
  )
}

export default CarouselLogement
