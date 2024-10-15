"use client";

import React from 'react';
import { Button } from '@/components/Button';
import { Subtitle } from '@/components/Subtitle';
import { Product } from '@/interface/product';
import styles from "../../../styles/productDetails.module.scss";
import { Title } from '@/components/Title';

export default function ProductDetails({ product }: { product: Product }) {

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className={styles.ProductDetails}>
            <div className={styles.ProductDetailsHeaderContainer}>
                <Title title={`${product.name}`}/>
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
                    <h3>Especificaciones:</h3>
                    <ul className={styles.specifications}>
                        <li>Fuente de luz: {product.specifications.lightSource}</li>
                        <li>Potencia máxima: {product.specifications.maxPower}</li>
                        <li>Lúmenes totales: {product.specifications.lumens}</li>
                        <li>Temperatura de color: {product.specifications.colorTemperature}</li>
                        <li>Peso: {product.specifications.weight}</li>
                    </ul>
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
