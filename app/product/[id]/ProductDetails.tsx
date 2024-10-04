"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // Cambiar de next/router a next/navigation
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import { Subtitle } from '@/components/Subtitle';
import { Product } from '@/interface/product';
import styles from "../../../styles/productDetails.module.scss";

export default function ProductDetails({ product }: { product: Product }) {
    const router = useRouter();

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
                    <div className={`${styles.imageBanner}`}>
                        <Image
                            src={`/images/${product.images[1].src}`}
                            alt={product.images[1].alt}
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
