"use client";

import LayoutRight from '@/components/LayoutRight';
import React, { useState } from 'react'
import styles from "../../../styles/page.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Product } from '@/interface/product';
import { products } from '@/data/products';
import { categoriesData } from '@/data/categories';

export function CategoryGrid() {
    const params = useParams();

    const id = params.id;
    const category = decodeURIComponent(id as string);
    const categoryData = categoriesData.find((item) => category === item.name);

    const ProductRender = products.filter((product: Product) =>
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
        )
    };

    const renderSideBar = () => {
        return (
            <nav className={styles.CategoriesNavigation}>
                {/*  <div
                    className={styles.goBack}
                    onClick={() => router.push('/categories')}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Volver</p>
                </div> */}
                <h2>{categoryData?.name}</h2>
                <p>{categoryData?.description}</p>
            </nav>
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