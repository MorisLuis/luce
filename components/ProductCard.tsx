import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from "../styles/Grid.module.scss";
import { brandsInterface } from '@/interface/brands';
import { Product } from '@/interface/product';
import { categories } from '@/interface/categories';

interface ProductCardInterface {
    product: brandsInterface | Product | categories;
    currentImageIndex: Record<number, number>;
    handleMouseEnter?: (arg: number) => void; // Opcional para mayor flexibilidad
    handleMouseLeave?: (arg: number) => void; // Opcional para mayor flexibilidad
    link: string;
}

export const ProductCard = ({
    product,
    currentImageIndex,
    handleMouseEnter,
    handleMouseLeave,
    link
}: ProductCardInterface) => {

    if (!product || !product.name || !product.mainImages?.length) {
        return null;
    };

    return (
        <Link
            key={product.id}
            href={link}
            aria-label={`Ir a la marca ${product.name}`}
            onMouseEnter={handleMouseEnter ? () => handleMouseEnter(product.id) : undefined}
            onMouseLeave={handleMouseLeave ? () => handleMouseLeave(product.id) : undefined}
        >
            <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                    {product.mainImages.map((image, index) => (
                        <Image
                            key={index}
                            src={`/images/${image}`}
                            alt={
                                'brand' in product && product.brand 
                                    ? `${product.brand} - ${product.name}` 
                                    : product.name
                            }
                            priority
                            width={100}
                            height={100}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder='blur'
                            blurDataURL="/images/bajacalidad.jpg" // Imagen de baja resolución

                            className={`
                                ${styles.image} 
                                ${currentImageIndex[product.id] === index ? styles.active : ''}
                            `}
                        />
                    ))}
                </div>
                <p className={styles.productName}>{product.name}</p>
            </div>
        </Link>
    );
};
