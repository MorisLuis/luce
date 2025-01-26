"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LayoutRight from "@/components/LayoutRight";
import { brandsData } from "@/data/brands";
import styles from "../../styles/Grid.module.scss";

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
                    {brandsData.slice(1).map((brand) => {
                        if (!brand.name || !brand.images) return null;

                        const currentImage = brand.images?.[currentImageIndex[brand.id]] || {};

                        return (
                            <Link
                                key={brand.id}
                                href={`/brands/${brand.name}`}
                                aria-label={`Ir a la marca ${brand.name}`}
                                onMouseEnter={() => handleMouseEnter(brand.id)}
                                onMouseLeave={() => handleMouseLeave(brand.id)}
                            >
                                <div className={styles.productCard}>
                                    <Image
                                        src={`/images/${currentImage.src}`}
                                        alt={currentImage.alt || `Imagen de ${brand.name}`}
                                        width={100}
                                        height={100}
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <p className={styles.productName}>{brand.name}</p>
                                </div>
                            </Link>
                        );
                    })}
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
