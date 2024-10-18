import React from 'react';
import styles from '../styles/Modal.module.scss';

interface ModalInterface {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    headerTitle: string;
}

export const Modal = ({
    visible,
    onClose,
    children,
    headerTitle
}: ModalInterface) => {
    return (
        <div className={`${styles.Modal} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.modalBackground} onClick={onClose}></div>
            <div className={`${styles.modalContent} ${visible ? styles.visible : ''}`}>
                <div className={styles.header}>
                    <p>{headerTitle}</p>
                    <p onClick={onClose} className={styles.modalClose}>Cerrar</p>
                </div>
                <div className={styles.modalChildren}>{children}</div>
            </div>
        </div>
    );
};
