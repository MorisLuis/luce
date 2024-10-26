import React from 'react';
import styles from '../../styles/Skeletons.module.scss';

export default function ImageSliderSkeleton() {
    return (
        <div className={styles.sliderContainerSkeleton}>
        <div className={styles.imageWrapper}>
            {/* <Image
                src={`/images/${images[currentIndex].src}`}
                alt={images[currentIndex].alt}
                layout="fill"
                objectFit="cover"
            /> */}
        </div>

        <div className={styles.dotsContainer}>
            
        </div>
    </div>
    )
}
