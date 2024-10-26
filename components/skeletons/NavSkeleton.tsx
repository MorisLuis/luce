import React from 'react'
import styles from '../../styles/Skeletons.module.scss';

export default function NavSkeleton() {
    return (
        <div className={styles.menu}>
            <div className={styles.hamburguer}>
            <div className={`${styles.bar}`}></div>
            <div className={`${styles.bar}`}></div>
            <div className={`${styles.bar}`}></div>
            </div>
        </div>
    )
}
