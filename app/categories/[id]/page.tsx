"use client";

import LayoutRight from '@/components/LayoutRight';
import React, { Suspense, useState } from 'react'
import styles from "../../../styles/page.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Product } from '@/interface/product';
import { products } from '@/data/products';
import { categoriesData } from '@/data/categories';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
config.autoAddCss = false;


function ProductList() {
    const params = useParams();
    const router = useRouter();

    const id = params.id;
    const category = decodeURIComponent(id as string);
    const categoryData = categoriesData.find((item) => category === item.name);

    const ProductRender = products.filter((product: Product) =>
        category === "Todos" ? true : product.categories.includes(category)
    );

    // Estado para manejar el fade y el índice de la imagen actual
    const [fadeStates, setFadeStates] = useState<Record<number, boolean>>({}); // Objeto para manejar los estados de fade
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
                {ProductRender.map((product: Product) => (
                    <div key={product.id} className={styles.productCard}>
                        <Link href={`/product/${product.id}`} className={styles.productLink}>
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
            <>
                <nav className={styles.CategoriesNavigation}>
                    <div
                        className={styles.goBack}
                        onClick={() => router.push('/categories')}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p>Volver</p>
                    </div>
                    <h2>{categoryData?.name}</h2>
                    <p>{categoryData?.description}</p>
                </nav>
            </>
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

export default function ProductFromCategory() {
    return (
        <Suspense fallback={<div>Cargando productos...</div>}>
            <ProductList />
        </Suspense>
    );
}
