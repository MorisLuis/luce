"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Cambiar de next/router a next/navigation
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import { Product } from '@/interface/product';
import styles from "../../../styles/productDetails.module.scss";

export default function ProductDetails({ product }: { product: Product }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setFade(true); // Activa la transición cuando cambia el índice
        const timeout = setTimeout(() => setFade(false), 500); // Espera que termine la transición
        return () => clearTimeout(timeout); // Limpia el timeout al desmontar
    }, [currentImageIndex]);

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={styles.ProductDetails}>
            <button
                onClick={() => router.push("/categories")}
                style={{
                    borderWidth: 0,
                    padding: 10,
                    borderRadius: 5,
                    cursor: 'pointer'
                }}
            >Regresar</button>
            <div className={styles.ProductDetailsHeaderContainer}>
                <Title
                    title={`${product.name}`}
                    styles={{
                        width: "50%",
                        display: 'flex',
                        alignItems: 'flex-end'
                    }}
                />
                <div className={styles.imageBannerContent}>
                    <div
                        className={`${styles.imageBanner} ${fade ? styles.fade : ''}`}
                        onMouseEnter={() => setCurrentImageIndex(1)}
                        onMouseLeave={() => setCurrentImageIndex(0)}
                    >
                        <Image
                            src={`/images/${product.images[currentImageIndex].src}`}
                            alt={product.images[currentImageIndex].alt}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.ProductDetailsContent}>
                <Subtitle title={`Marca: ${product.brand}`} />
                <section>
                    <p>{product.shortDescription}</p>
                    <h3>Descripción extensa:</h3>
                    <p>{product.longDescription}</p>
                </section>
                <section>
                    <h3>Especificaciones:</h3>
                    <ul className={styles.specifications}>
                        <li>Fuente de luz: {product.specifications.lightSource}</li>
                        <li>Potencia máxima: {product.specifications.maxPower}</li>
                        <li>Lúmenes totales: {product.specifications.lumens}</li>
                        <li>Temperatura de color: {product.specifications.colorTemperature}</li>
                        <li>Peso: {product.specifications.weight}</li>
                    </ul>
                </section>
                <section>
                    <h3>Categorías:</h3>
                    <p>{product.categories.join(', ')}</p>
                </section>
                {
                    product.pdf &&
                    <Button
                        title='Descargar PDF'
                        onClick={() => {
                            const newWindow = window.open(`/pdf/${product.pdf}`, '_blank');
                            if (!newWindow) {
                                console.error('La ventana emergente fue bloqueada.');
                            }
                        }}
                    />
                }

            </div>
        </div>
    );
}
