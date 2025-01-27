"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import LayoutRight from "@/components/LayoutRight";
import { brandsData } from "@/data/brands";
import styles from "../../styles/Grid.module.scss";
import { ProductCard } from "@/components/ProductCard";

export function BrandsCategory() {
    const searchParams = useSearchParams();
    const brand = searchParams.get("brand") || "Todos";

    const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>(
        () => {
            const initialIndex: Record<number, number> = {};
            brandsData.forEach((product) => {
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
                    {brandsData.slice(1).map((brand) => (
                        <ProductCard
                            key={brand.id}
                            product={brand}
                            currentImageIndex={currentImageIndex}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
                            link={`/brands/${brand.name}`}
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
                    <h2>Marca</h2>
                    <ul>
                        {brandsData.map((item) => (
                            <li key={item.id} className={styles.option}>
                                <div
                                    className={
                                        item.name === brand
                                            ? `${styles.circle} ${styles.activeCircle}`
                                            : styles.circle
                                    }
                                ></div>
                                <Link
                                    href={item.name === "Todos" ? '/brands' : `/brands/${item.name}`}
                                >
                                    {item.name}
                                </Link>
                                <div
                                    className={item.name === brand ? `${styles.line} ${styles.lineactive}` : styles.line}
                                ></div>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    };


    return (
        <LayoutRight content={renderContent} sideBar={renderSideBar} />
    );
}
