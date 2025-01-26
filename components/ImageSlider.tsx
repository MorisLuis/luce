"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/ImageSlider.module.scss";

type image = {
    src: string;
    alt: string;
};

interface ImageSliderInterface {
    images: image[];
}

export default function ImageSlider({ images }: ImageSliderInterface) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);
    };

    const clearExistingInterval = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startInterval();
        return () => clearExistingInterval();
    }, [images.length]);

    const handleDotClick = (index: number) => {
        clearExistingInterval();
        setCurrentIndex(index);
        startInterval();
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.imageWrapper}>
                {images.length < 1 ? (
                    <div className={styles.notImage}></div>
                ) : (
                    <Image
                        src={`/images/${images[currentIndex].src}`}
                        alt={images[currentIndex].alt}
                        quality={100}
                        width={100}
                        height={100}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,..."
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
            </div>

            <div className={styles.dotsContainer}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={
                            currentIndex === index
                                ? `${styles.dot} ${styles.dotActive}`
                                : styles.dot
                        }
                    />
                ))}
            </div>
        </div>
    );
}
