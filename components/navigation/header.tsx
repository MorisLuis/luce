import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Navigation.module.scss'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div></div>
            <div className={styles.imageContainer}>
                <Image
                    src={`/logos/VERTICAL_COLOR PRINCIPAL.svg`}
                    alt={'LUCE'}
                    layout="fill"
                    objectFit="container"
                />
            </div>
        </div>
    )
}
