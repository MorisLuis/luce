"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import LayoutRight from "@/components/LayoutRight";
import { categoriesData } from "@/data/categories";
import styles from "../../styles/page.module.scss";

function ProductList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Todos";

  // Estado para manejar el fade y el índice de la imagen actual
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
      <div className={styles.gridContainer}>
        {categoriesData.slice(1).map((category) => (
          <div key={category.id} className={styles.productCard}>
            <Link href={`/categories/${category.name}`} className={styles.productLink}>
              <div
                className={`${styles.imageWrapper} ${fadeStates[category.id] ? styles.fade : ''}`}
                onMouseEnter={() => handleMouseEnter(category.id)}
                onMouseLeave={() => handleMouseLeave(category.id)}
              >
                <Image
                  src={`/images/${category.images[currentImageIndex[category.id]]?.src}`}
                  alt={category.images[currentImageIndex[category.id]]?.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <p className={styles.productName}>{category.name}</p>
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
        <h2>Categoria</h2>
        <ul>
          {categoriesData.map((item) => (
            <li
              key={item.id}
              style={
                item.name === category ? { textDecoration: "underline" } : {}
              }
            >
              <Link href={`/categories/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
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
}

export default function Categories() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <ProductList />
    </Suspense>
  );
}
