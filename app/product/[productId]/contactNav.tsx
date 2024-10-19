"use client";

import React from 'react';
import { Product } from '@/interface/product';
import styles from "../../../styles/Navigation.module.scss";
import { useRouter } from 'next/navigation';

export const ContactNav = ({ product }: { product: Product }) => {

    const router = useRouter();
    const handleButtonClick = () => {
        router.push(`/contact?productId=${product.id}`);
    };


    return (
        <nav className={styles.ContactNavNavigation}>
            <div className={styles.ContactForm}>
                <h1
                    style={{ fontSize: 40, cursor: 'pointer' }}
                    onClick={handleButtonClick}
                >
                    Me interesa este producto  --{'>'}
                </h1>
            </div>
        </nav>
    );
}
