"use client";

import React from 'react';
import { Button } from '@/components/Button';
import { Product } from '@/interface/product';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import styles from "../../../styles/productDetails.module.scss";

config.autoAddCss = false;


export default function ProductDetails({
    product,
    handleOpenContact,
    handleOpenSpecs,
    next,
    back
}: { product: Product, handleOpenContact: () => void, next: () => void, handleOpenSpecs: () => void, back: () => void }) {

    return (
        <div className={styles.ProductDetails}>
            <div className={styles.ProductDetailsHeaderContainer}>
                <h2>{product.name}</h2>
            </div>

            <div className={styles.ProductDetailsContent}>
                <div className={styles.information}>
                    <section>
                        <p>{product.shortDescription}</p>
                    </section>

                    <section  className={styles.brand}>
                        <p>Marca: {product.brand}</p>
                    </section>
                </div>

                <div className={styles.actions}>
                    <section className={styles.ProductDetailsNavigation}>
                        <p onClick={back}>Atrás</p>
                        <p onClick={next}>Siguiente</p>
                    </section>

                    <Button
                        title='Me interesa'
                        onClick={handleOpenContact}
                        extraStyles={{ marginBottom: "10px" }}
                    />

                    {
                        product.pdf &&
                        <Button
                            title='Descargar ficha técnica'
                            icon={faArrowLeftLong}
                            iconStyles={{
                                rotate: "135deg"
                            }}
                            onClick={() => {
                                const newWindow = window.open(`/pdf/${product.pdf}`, '_blank');
                                if (!newWindow) console.error('La ventana emergente fue bloqueada.');
                            }}
                            extraStyles={{ marginBottom: "10px" }}
                        />
                    }

                    <Button
                        title='Ver Especificaciones'
                        onClick={handleOpenSpecs}
                    />

                </div>
            </div>
        </div>
    );
}
