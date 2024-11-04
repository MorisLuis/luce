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
}: ImageSliderInterface) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);
    
        return () => clearInterval(interval);
    }, [images.length]);
    

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imageWrapper}>
                {
                    images.length < 1 ?
                        <div className={styles.notImage}></div>
                        :
                        <Image
                            src={`/images/${images[currentIndex].src}`}
                            alt={images[currentIndex].alt}
                            fill
                            priority
                            quality={100}
                        />
                }
            </div>

            <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={
                            currentIndex === index ? `${styles.dot} ${styles.dotActive}` : styles.dot
                        }
                    />
                ))}
            </div>
        </div>
    );
}