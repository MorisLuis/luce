import React from 'react';
import styles from '../styles/Modal.module.scss';

interface ModalInterface {
    visible: boolean;
    onClose: () => void;
    children:  React.ReactNode;
    headerTitle: string;
}

export const Modal = ({
    visible,
    onClose,
    children,
    headerTitle
}: ModalInterface) => {
    return visible && (
        <div className={styles.Modal}>
            <div className={styles.modalBackground}></div>
            <div className={styles.modalContent}>
                <div onClick={onClose} className={styles.header}>
                    <p>{headerTitle}</p>
                    <p onClick={onClose}>Cerrar</p>
                </div>
                <div className={styles.modalChildren}>{children}</div>
            </div>
        </div>
    )
}
