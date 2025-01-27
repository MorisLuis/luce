"use client";

import LayoutRight from '@/components/LayoutRight';
import React, { useState } from 'react'
import styles from "../../../styles/Grid.module.scss";
import { useParams } from 'next/navigation';
import { Product } from '@/interface/product';
import products from "../../../data/products.json"
import { categoriesData } from '@/data/categories';
import { ProductCard } from '@/components/ProductCard';

export function CategoryGrid() {
    const params = useParams();

    const id = params.id;
    const category = decodeURIComponent(id as string);
    const categoryData = categoriesData.find((item) => category === item.name);

    const typedProducts: Product[] = products as Product[];
    const ProductRender = typedProducts.filter((product: Product) =>
        category === "Todos" ? true : product.categories.includes(category)
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
                    {ProductRender.map((product: Product) => (
                        <ProductCard
                        key={product.id}

                            product={product}
                            currentImageIndex={currentImageIndex}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            link={`/product/${product.id}?from=categories`}
                        />
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