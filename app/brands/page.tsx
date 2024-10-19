"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import LayoutRight from "@/components/LayoutRight";
import styles from "../../styles/page.module.scss";
import { brandsData } from "@/data/brands";

function ProductList() {
  const searchParams = useSearchParams();
  const brand = searchParams.get("brand") || "Todos";

  const [fadeStates, setFadeStates] = useState<Record<number, boolean>>({});
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
    setFadeStates((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id: number) => {
    setCurrentImageIndex((prev) => ({ ...prev, [id]: 0 }));
    setFadeStates((prev) => ({ ...prev, [id]: false }));
  };

  const renderContent = () => {
    return (
      <div className={styles.Categories}>
        <div className={styles.gridContainer}>
          <h2>Marca</h2>
          {brandsData.slice(1).map((brand) => (
            <div key={brand.id} className={styles.productCard}>
              <Link href={`/brands/${brand.name}`} className={styles.productLink}>
                <div
                  className={`${styles.imageWrapper} ${fadeStates[brand.id] ? styles.fade : ''}`}
                  onMouseEnter={() => handleMouseEnter(brand.id)}
                  onMouseLeave={() => handleMouseLeave(brand.id)}
                >
                  <Image
                    src={`/images/${brand.images[currentImageIndex[brand.id]]?.src}`}
                    alt={brand.images[currentImageIndex[brand.id]]?.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                  <p className={styles.productName}>{brand.name}</p>
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
      <div className={styles.Categories}>
        <nav className={styles.CategoriesNavigation}>
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

export default function Brands() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <ProductList />
    </Suspense>
  );
}
