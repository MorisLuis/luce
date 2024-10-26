import React from 'react';
import styles from '../../styles/Skeletons.module.scss';

interface ContactScreenInterface {
    center?: boolean
}

export function ContactSkeleton({ center }: ContactScreenInterface) {
    return (
        <div className={center ? `${styles.ContactSkeleton} ${styles.center}` : styles.ContactSkeleton}>
            <div className={styles.ContactContent}>
                <div className={styles.ContactHeader}>
                    <h1></h1>
                </div>
                <form className={styles.ContactForm}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email"></label>
                        <div></div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="subject"></label>
                        <div></div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="message"></label>
                        <div></div>
                    </div>

                    <div className={styles.button}></div>

                    {/* <Button
                    title='Enviar'
                    onClick={handleButtonClick}
                    secondaryDesign={true}
                    extraStyles={{
                        width: "30%",
                    }}
                /> */}
                </form>
                <div className={styles.ContactFooter}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
