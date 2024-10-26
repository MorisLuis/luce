import React from 'react';
import styles from '../../styles/Skeletons.module.scss';

export default function ProductDetailsSkeleton() {


    return (
        <div className={styles.ProductDetailsSkeleton}>
            <div className={styles.goBack}>
                <p></p>
            </div>
            <div className={styles.ProductDetailsHeaderContainer}>
                <h2></h2>
            </div>

            <div className={styles.ProductDetailsContent}>
                <section>
                    <p></p>
                    <p></p>
                </section>
                <section>
                    <h3></h3>
                    <p></p>
                </section>

                <section>
                    <h3></h3>
                    <p></p>
                </section>

                <section className={styles.ProductDetailsNavigation}>
                    <p></p>
                    <p></p>
                </section>

                <div className={styles.button}></div>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
            </div>
        </div>
    );
}
