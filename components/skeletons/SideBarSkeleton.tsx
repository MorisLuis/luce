import React from 'react';
import styles from '../../styles/Skeletons.module.scss';

export default function SideBarSkeleton() {
    return (
        <div className={styles.SideBarSkeleton}>
            <div className={styles.goBack} >
                <p></p>
            </div>
            <h1></h1>
            <div className={styles.SideBarSkeletonContent}>
                <p style={{ width: "50%" }}></p>
                <p style={{ width: "60%" }}></p>
                <p style={{ width: "45%" }}></p>
            </div>
        </div>
    )
}
