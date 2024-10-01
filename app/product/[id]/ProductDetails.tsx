"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import styles from "../../../styles/productDetails.module.scss";
import { Subtitle } from '@/components/Subtitle';

export default function ProductDetails({ product }: any) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false); // Estado para la transición de opacidad

    useEffect(() => {
        setFade(true); // Activa la transición cuando cambia el índice
        const timeout = setTimeout(() => setFade(false), 500); // Espera que termine la transición
        return () => clearTimeout(timeout); // Limpia el timeout al desmontar
    }, [currentImageIndex]);

    if (!product) {
        return <div>Cargando...</div>; // Manejo de carga si el producto no está disponible
    }

    return (
        <div className={styles.ProductDetails}>
            <Title title={`${product.name}`} />
            <div className={styles.imageBannerContent}>
                <div 
                    className={`${styles.imageBanner} ${fade ? styles.fade : ''}`}
                    onMouseEnter={() => setCurrentImageIndex(1)}
                    onMouseLeave={() => setCurrentImageIndex(0)}
                >
                    <Image
                        src={`/images/${product.images[currentImageIndex].src}`}
                        alt={product.images[currentImageIndex].alt}
                        layout="fill" // Hace que la imagen ocupe todo el contenedor
                        objectFit="cover" // Mantiene la imagen dentro del contenedor
                    />
                </div>
            </div>
            <div>
                <Subtitle title={`Marca: ${product.brand}`} />
                <p>{product.shortDescription}</p>
                <h3>Descripción extensa:</h3>
                <p>{product.longDescription}</p>
                <h3>Especificaciones:</h3>
                <ul>
                    <li>Fuente de luz: {product.specifications.lightSource}</li>
                    <li>Potencia máxima: {product.specifications.maxPower}</li>
                    <li>Lúmenes totales: {product.specifications.lumens}</li>
                    <li>Temperatura de color: {product.specifications.colorTemperature}</li>
                    <li>Peso: {product.specifications.weight}</li>
                </ul>
                <h3>Categorías:</h3>
                <p>{product.categories.join(', ')}</p>
                <Button
                    title='Descargar PDF'
                    onClick={() => window.open(`/pdf/${product.pdf}`, '_blank')}
                />
            </div>
        </div>
    );
}
