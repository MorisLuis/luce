"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/page.module.scss";
import Link from "next/link";
import { products } from "@/data/products";
import { Suspense, useState } from "react";
import LayoutRight from "@/components/LayoutRight";

interface Category {
  id: number;
  value: string;
}

interface Product {
  id: number;
  name: string;
  categories: string[];
  category: string;
  images: {
    src: string;
    alt: string;
  }[];
}

const categories: Category[] = [
  { id: 1, value: "Todos" },
  { id: 2, value: "Schwung Design" },
  { id: 3, value: "Colección Globe" },
  { id: 4, value: "Candiles" },
  { id: 5, value: "Lámparas arbotante" },
];

function ProductList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Todos"; // Obtener el parámetro de la URL

  const ProductRender = products.filter((product: Product) =>
    category === "Todos" ? true : product.categories.includes(category)
  );

  // Estado para manejar el fade y el índice de la imagen actual
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
        {ProductRender.map((product: Product) => (
          <div key={product.id} className={styles.productCard}>
            <Link href={`/categories/${product.category}`} className={styles.productLink}>
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
        <ul>
          {categories.map((item) => (
            <li
              key={item.id}
              style={
                item.value === category ? { textDecoration: "underline" } : {}
              }
            >
              <Link href={`/categories/?category=${item.value}`}>{item.value}</Link>
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
