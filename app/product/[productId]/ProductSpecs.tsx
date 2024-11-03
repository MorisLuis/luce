import { Product } from '@/interface/product';
import React from 'react';
import styles from "../../../styles/productDetails.module.scss";

interface ProductSpecsInterface {
    product: Product
}

export const ProductSpecs = ({
    product
}: ProductSpecsInterface) => {
    return (
        <div className={styles.ProductSpecs}>
            <h1>{product.name}</h1>
            <h2>Especificaciones:</h2>
            <div className={styles.ProductContent}>
                {product.specs.map((item, index) => {
                    const [label, value] = item.split(':');
                    return (
                        <div className={styles.specItem} key={index}>
                            <strong>{label}:</strong> {value}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
