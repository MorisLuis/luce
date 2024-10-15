"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "../styles/ImageSlider.module.scss";

type image = {
    src: string;
    alt: string
}

interface ImageSliderInterface {
    images: image[]
}

export default function ImageSlider({
    images
} : ImageSliderInterface ) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar la imagen cada 5 segundos (5000ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia cada 5 segundos

        // Limpiar intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imageWrapper}>
                <Image
                    src={`/images/${images[currentIndex].src}`}
                    alt={images[currentIndex].alt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={styles.dot}
                        style={{
                            backgroundColor: currentIndex === index ? '#000' : '#bbb',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}