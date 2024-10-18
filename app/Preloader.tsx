import React from 'react';
import styles from '../styles/Preloader.module.scss';
import Image from 'next/image';

export const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.imageContainer}>
                <Image
                    src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                    alt={'LUCE'}
                    layout="fill"
                    objectFit="contain" // Asegúrate de que "contain" esté configurado
                />
            </div>
        </div>
    );
};
