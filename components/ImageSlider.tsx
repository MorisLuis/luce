"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/ImageSlider.module.scss";

type ImageType = {
    src: string;
    alt: string;
};

interface ImageSliderInterface {
    images: ImageType[];
}

export default function ImageSlider({ images }: ImageSliderInterface) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startX = useRef<number | null>(null);
    const currentX = useRef<number | null>(null);
    const isDragging = useRef(false);

    const startInterval = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
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

    const handleStart = (clientX: number) => {
        startX.current = clientX;
        isDragging.current = true;
    };

    const handleMove = (clientX: number) => {
        if (!isDragging.current || startX.current === null) return;
        currentX.current = clientX;
    };

    const handleEnd = () => {
        if (!isDragging.current || startX.current === null || currentX.current === null) return;

        const diff = startX.current - currentX.current;

        if (diff > 2) {
            // Deslizar a la izquierda
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        } else if (diff < -2) {
            // Deslizar a la derecha
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
        }

        // Reiniciar valores
        startX.current = null;
        currentX.current = null;
        isDragging.current = false;

        // Reiniciar el intervalo
        clearExistingInterval();
        startInterval();
    };

    const handleMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const handleMouseUp = () => handleEnd();
    const handleMouseLeave = () => handleEnd(); // Finaliza si el mouse sale del área

    const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
    const handleTouchEnd = () => handleEnd();

    return (
        <div
            className={styles.sliderContainer}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onDragStart={(e) => e.preventDefault()}
        >
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
