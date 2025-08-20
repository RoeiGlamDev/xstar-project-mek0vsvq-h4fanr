'use client';

import React, { useState } from 'react';
import './Slider.css'; // Assuming there's a CSS file for styling

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { id: 1, image: '/images/slide1.jpg', caption: 'Luxury Living Room' },
        { id: 2, image: '/images/slide2.jpg', caption: 'Elegant Bedroom' },
        { id: 3, image: '/images/slide3.jpg', caption: 'Modern Kitchen' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slider">
            <div className="slider-content">
                <img src={slides[currentIndex].image} alt={slides[currentIndex].caption} />
                <div className="caption">{slides[currentIndex].caption}</div>
            </div>
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Slider;