"use client";

import LayoutRight from '@/components/LayoutRight';
import React, { useState } from 'react'
import styles from "../../../styles/Grid.module.scss";
import { useParams } from 'next/navigation';
import { Product } from '@/interface/product';
import { config } from '@fortawesome/fontawesome-svg-core';
import products from "../../../data/products.json"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { brandsData } from '@/data/brands';
import { ProductCard } from '@/components/ProductCard';
config.autoAddCss = false;


export function BrandGrid() {
    const params = useParams();

    const id = params.id;
    const brand = decodeURIComponent(id as string);
    const brandData = brandsData.find((item) => brand === item.name);

    const ProductRender = products.filter((product: Product) =>
        brand === "Todos" ? true : product.brand.includes(brand)
    );

    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>(
        () => {
            const initialIndex: Record<number, number> = {};
            ProductRender.forEach((product) => {
                initialIndex[product.id] = 0;
            });
            return initialIndex;
        }
    );

    const handleMouseEnter = (id: number) => {
        setCurrentImageIndex((prev) => ({ ...prev, [id]: 1 }));
    };

    const handleMouseLeave = (id: number) => {
        setCurrentImageIndex((prev) => ({ ...prev, [id]: 0 }));
    };


    const renderContent = () => {
        return (
            <div className={styles.Grid}>
                <div className={styles.gridContainer}>
                    {ProductRender.slice(1).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            currentImageIndex={currentImageIndex}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            link={`/product/${product.id}?from=brands`}
                        />
                    ))}

                    {/* {ProductRender.map((product: Product) => (
                        <Link
                            key={product.id}
                            href={`/product/${product.id}?from=brands`}
                            aria-label={`Ir a la marca ${product.name}`}
                            onMouseEnter={() => handleMouseEnter(product.id)}
                            onMouseLeave={() => handleMouseLeave(product.id)}
                        >
                            <div className={styles.productCard}>
                                <div className={styles.imageWrapper}>
                                    {product.mainImages.length === 0 ? (
                                        <div className={styles.notImage}></div>
                                    ) : (
                                        product.mainImages.map((image, index) => (
                                            <Image
                                                key={index}
                                                src={`/images/${image}`}
                                                alt={`${product.brand} - ${product.name}`}
                                                width={100}
                                                height={100}
                                                priority
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className={`${styles.image} ${
                                                    currentImageIndex[product.id] === index ? styles.active : ''
                                                }`}
                                            />
                                        ))
                                    )}
                                </div>
                                <p className={styles.productName}>{product.name}</p>
                            </div>
                        </Link>
                    ))} */}
                </div>
            </div>
        )
    };

    const renderSideBar = () => {
        return (
            <div className={styles.Grid}>
                <nav className={styles.gridNavigation}>
                    <h2>{brandData?.name}</h2>
                    <p>{brandData?.description}</p>
                </nav>
            </div>
        )
    }

    return (
        <div className={styles.Categories}>
            <LayoutRight
                content={renderContent}
                sideBar={renderSideBar}
            />
        </div>
    );
};