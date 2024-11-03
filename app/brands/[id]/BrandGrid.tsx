"use client";

import LayoutRight from '@/components/LayoutRight';
import React, { useState } from 'react'
import styles from "../../../styles/Grid.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Product } from '@/interface/product';
import { products } from '@/data/products';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { brandsData } from '@/data/brands';
config.autoAddCss = false;


export function BrandGrid() {
    const params = useParams();

    const id = params.id;
    const brand = decodeURIComponent(id as string);
    const brandData = brandsData.find((item) => brand === item.name);

    const ProductRender = products.filter((product: Product) =>
        brand === "Todos" ? true : product.brand.includes(brand)
    );

    const [fadeStates, setFadeStates] = useState<Record<number, boolean>>({});
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
        setFadeStates((prev) => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id: number) => {
        setCurrentImageIndex((prev) => ({ ...prev, [id]: 0 }));
        setFadeStates((prev) => ({ ...prev, [id]: false }));
    };


    const renderContent = () => {
        return (
            <div className={styles.Grid}>
                <div className={styles.gridContainer}>
                    <h2>{brandData?.name}</h2>
                    {ProductRender.map((product: Product) => (
                        <div key={product.id} className={styles.productCard}>
                            <Link
                                className={styles.productLink}
                                href={`/product/${product.id}?from=brands`}
                            >
                                <div
                                    className={`${styles.imageWrapper} ${fadeStates[product.id] ? styles.fade : ''}`}
                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                    onMouseLeave={() => handleMouseLeave(product.id)}
                                >
                                    <Image
                                        src={`/images/${product.images[currentImageIndex[product.id]]?.src}`}
                                        alt={product.images[currentImageIndex[product.id]]?.alt}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <p className={styles.productName}>{product.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
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