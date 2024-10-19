"use client";

import React from 'react';
import { Button } from '@/components/Button';
import { Product } from '@/interface/product';
import styles from "../../../../../styles/productDetails.module.scss";
import { Title } from '@/components/Title';
import { useRouter } from 'next/navigation';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false;


export default function ProductDetails({
    product,
    handleOpenContact,
    next,
    back,
    category
}: { product: Product, handleOpenContact: () => void, next: () => void, back: () => void, category: string }) {

    const router = useRouter();
    const handleGoBack = () => {
        router.push(`/categories/${category}`);
    };

    if (!product) return <div>Cargando...</div>;

    return (
        <div className={styles.ProductDetails}>
            <div
                className={styles.goBack}
                onClick={handleGoBack}
            >
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>Volver</p>
            </div>
            <div className={styles.ProductDetailsHeaderContainer}>
                <Title title={`${product.name}`} />
            </div>

            <div className={styles.ProductDetailsContent}>
                <section>
                    <label>Marca:</label>
                    <p>{product.brand}</p>
                    <p>{product.shortDescription}</p>
                </section>
                <section>
                    <label>Descripción extensa:</label>
                    <p>{product.longDescription}</p>
                </section>
                <section>
                    <label>Especificaciones:</label>
                    <ul className={styles.specifications}>
                        <li>Fuente de luz: {product.specifications.lightSource}</li>
                        <li>Potencia máxima: {product.specifications.maxPower}</li>
                        <li>Lúmenes totales: {product.specifications.lumens}</li>
                        <li>Temperatura de color: {product.specifications.colorTemperature}</li>
                        <li>Peso: {product.specifications.weight}</li>
                    </ul>
                </section>
                <section>
                    <label>Categorías:</label>
                    <p>{product.categories.join(', ')}</p>
                </section>

                <section className={styles.ProductDetailsNavigation}>
                    <p onClick={back}>ATRAS</p>
                    <p onClick={next}>SIGUIENTE</p>
                </section>

                {
                    product.pdf &&
                    <Button
                        title='Descargar PDF'
                        icon={faArrowLeftLong}
                        iconStyles={{
                            rotate: "135deg"
                        }}
                        onClick={() => {
                            const newWindow = window.open(`/pdf/${product.pdf}`, '_blank');
                            if (!newWindow) console.error('La ventana emergente fue bloqueada.');
                        }}
                        extraStyles={{
                            marginBottom: "10px"
                        }}
                    />
                }

                <Button
                    title='Contactar'
                    onClick={handleOpenContact}
                />
            </div>
        </div>
    );
}
