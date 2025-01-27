"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import LayoutRight from "@/components/LayoutRight";
import { categoriesData } from "@/data/categories";
import styles from "../../styles/Grid.module.scss";
import { ProductCard } from "@/components/ProductCard";

export function CategoriesGrid() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "Todos";

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
    };

    const handleMouseLeave = (id: number) => {
        setCurrentImageIndex((prev) => ({ ...prev, [id]: 0 }));
    };

    const renderContent = () => {
        return (
            <div className={styles.Grid}>
                <div className={styles.gridContainer}>
                    {categoriesData.slice(1).map((category) => (
                        <ProductCard
                        key={category.id}
                            product={category}
                            currentImageIndex={currentImageIndex}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            link={`/categories/${category.name}`}
                        />
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