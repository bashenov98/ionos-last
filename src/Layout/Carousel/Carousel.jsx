import React, { useState } from 'react';
import './Carousel.css'; // Make sure to create a CSS file with the styles provided below

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <div className="carousel">
            <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className="carousel-image"
                        style={{ width: '100%' }}
                    />
                ))}
            </div>
            <button className="carousel-button prev" onClick={goToPrevious}>❮</button>
            <button className="carousel-button next" onClick={goToNext}>❯</button>
        </div>
    );
};

export default Carousel;
