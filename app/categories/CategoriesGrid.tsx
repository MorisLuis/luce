"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LayoutRight from "@/components/LayoutRight";
import { categoriesData } from "@/data/categories";
import styles from "../../styles/Grid.module.scss";

export function CategoriesGrid() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "Todos";

    const [fadeStates, setFadeStates] = useState<Record<number, boolean>>({});
    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>(
        () => {
            const initialIndex: Record<number, number> = {};
            categoriesData.forEach((product) => {
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
                    <h2>Categorías</h2>
                    {categoriesData.slice(1).map((category) => (
                        <div key={category.id} className={styles.productCard}>
                            <Link href={`/categories/${category.name}`} className={styles.productLink}>
                                <div
                                    className={`${styles.imageWrapper} ${fadeStates[category.id] ? styles.fade : ''}`}
                                    onMouseEnter={() => handleMouseEnter(category.id)}
                                    onMouseLeave={() => handleMouseLeave(category.id)}
                                >
                                    {
                                        category.images.length < 1 ?
                                        <div className={styles.notImage}></div>
                                        :
                                        <Image
                                            src={`/images/${category.images[currentImageIndex[category.id]]?.src}`}
                                            alt={category.images[currentImageIndex[category.id]]?.alt}
                                            fill
                                        />
                                    }
                                    <p className={styles.productName}>{category.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const renderSideBar = () => {
        return (
            <div className={styles.Grid}>
                <nav className={styles.gridNavigation}>
                    <h2>Categorías</h2>
                    <ul>
                        {categoriesData.map((item) => (
                            <li key={item.id} className={styles.option}>
                                <div
                                    className={
                                        item.name === category
                                            ? `${styles.circle} ${styles.activeCircle}`
                                            : styles.circle
                                    }
                                ></div>
                                <Link href={item.name === "Todos" ? '/categories' : `/categories/${item.name}`}>
                                    {item.name}
                                </Link>
                                <div
                                    className={
                                        item.name === category
                                            ? `${styles.circle} ${styles.activeCircle}`
                                            : styles.circle
                                    }
                                ></div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    };

    return (
        <LayoutRight
            content={renderContent}
            sideBar={renderSideBar}
        />
    );
}