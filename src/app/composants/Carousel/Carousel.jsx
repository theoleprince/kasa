import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'

function CarouselLogement({ logement }) {
    // Initialisez l'état local pour stocker le numéro de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mettez à jour le numéro de l'image actuelle à chaque fois que l'utilisateur change d'image
  const handleSelect = (selectedIndex, e) => {
    setCurrentIndex(selectedIndex);
  };
  return (
    <Carousel
    activeIndex={currentIndex}
    onSelect={handleSelect}
    prevIcon={<span className="carousel-control-prev-icon custom-icon" />}
    nextIcon={<span aria-hidden="true" className="carousel-control-next-icon custom-icon" />}
    >
      {logement.pictures.map((item, index) => (
        <Carousel.Item key={item} className='carousel-item'>
          <img src={item} alt={item} className="d-block w-100 object-fit" />
          {index === currentIndex && (
            <Carousel.Caption>
              <p className="mt-3">
                {currentIndex + 1}/{logement.pictures.length}
              </p>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
    // <div id="demo" className="carousel slide dimension" data-bs-ride="carousel">
    //   <div className="carousel-indicators">
    //     {logement.pictures.map((item, index) =>
    //         <button key={item} type="button" data-bs-target="#demo" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
    //     )}
    //   </div>

    //   <div className="carousel-inner">
    //   {logement.pictures.map((item, index) =>
    //     <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={item}>
    //     <img src={item} alt={item} className="d-block w-100 object-fit" />
    //   </div>
    //   )}

    //   </div>

    //   <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    //     <span className="carousel-control-prev-icon"></span>
    //   </button>
    //   <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    //     <span className="carousel-control-next-icon"></span>
    //   </button>
    // </div>
  )
}

export default CarouselLogement
