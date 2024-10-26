import React from 'react';
import styles from '../../styles/Skeletons.module.scss';

export const GridSkeletons = () => {
    return (
        <div className={styles.GridSkeletons}>
            <div className={styles.gridContainer}>
                <h2></h2>
                {Array.from({ length: 6 }, (_, i) => (
                    <div key={i} className={styles.productCard}>
                        <div className={styles.productLink}>
                            <div className={`${styles.imageWrapper}`}>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}