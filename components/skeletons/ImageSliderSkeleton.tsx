import React from 'react';
import styles from '../../styles/Skeletons.module.scss';

export default function ImageSliderSkeleton() {
    return (
        <div className={styles.sliderContainerSkeleton}>
            <div className={styles.imageWrapper}>
            </div>

            <div className={styles.dotsContainer}>

            </div>
        </div>
    )
}
