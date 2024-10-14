import React from 'react';
import styles from "../../styles/Navigation.module.scss";

interface HamburguerInterface {
    onClick: () => void;
    active: boolean;
}

export const Hamburguer = ({
    onClick,
    active
}: HamburguerInterface) => {

    return (
        <div className={styles.hamburguer} onClick={onClick}>
            <div className={`${styles.bar} ${active ? styles.activeBar1 : ''}`}></div>
            <div className={`${styles.bar} ${active ? styles.activeBar2 : ''}`}></div>
            <div className={`${styles.bar} ${active ? styles.activeBar3 : ''}`}></div>
        </div>
    );
};
