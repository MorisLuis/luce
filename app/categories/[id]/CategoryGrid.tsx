"use client";

import LayoutRight from '@/components/LayoutRight';
import React, { useState } from 'react'
import styles from "../../../styles/Grid.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Product } from '@/interface/product';
import products from "../../../data/products.json"
import { categoriesData } from '@/data/categories';

export function CategoryGrid() {
    const params = useParams();

    const id = params.id;
    const category = decodeURIComponent(id as string);
    const categoryData = categoriesData.find((item) => category === item.name);

    const typedProducts: Product[] = products as Product[];
    const ProductRender = typedProducts.filter((product: Product) =>
        category === "Todos" ? true : product.categories.includes(category)
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
                    <h2>{categoryData?.name}</h2>
                    {ProductRender.map((product: Product) => (
                        <div key={product.id} className={styles.productCard}>
                            <Link
                                className={styles.productLink}
                                href={`/product/${product.id}?from=categories`}
                            >
                                <div
                                    className={`${styles.imageWrapper} ${fadeStates[product.id] ? styles.fade : ''}`}
                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                    onMouseLeave={() => handleMouseLeave(product.id)}
                                >
                                    {
                                        product.mainImages.length === 0 ?
                                            <div className={styles.notImage}></div>
                                            :
                                            <Image
                                                src={`/images/${product.mainImages[currentImageIndex[product.id]]}`}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority
                                            />
                                    }
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
                    <h2>{categoryData?.name}</h2>
                    <p>{categoryData?.description}</p>
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