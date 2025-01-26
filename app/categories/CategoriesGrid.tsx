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
                        <Link
                            key={category.id}
                            href={`/categories/${category.name}`}
                            onMouseEnter={() => handleMouseEnter(category.id)}
                            onMouseLeave={() => handleMouseLeave(category.id)}
                        >
                            <div
                                className={styles.productCard}
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
                                            width={100}
                                            height={100}
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                }
                                <p className={styles.productName}>{category.name}</p>
                            </div>
                        </Link>
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