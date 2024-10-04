"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "../../styles/page.module.scss";
import Link from "next/link";
import { products } from "@/data/products";
import { Suspense } from "react"; // Importar Suspense

const categories = [
  { id: 1, value: "Todos" },
  { id: 2, value: "Schwung Design" },
  { id: 3, value: "Colección Globe" },
  { id: 4, value: "Candiles" },
  { id: 5, value: "Lámparas arbotante" },
];

function ProductList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "Todos"; // Obtener el parámetro de la URL

  const ProductRender = products.filter((product) =>
    category === "Todos" ? true : product.categories.includes(category)
  );

  return (
    <div>
      <h1>Categorias</h1>

      <nav>
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

      <div className={styles.gridContainer}>
        {ProductRender.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link href={`/product/${product.id}`} className={styles.productLink}>
              <div className={styles.imageWrapper}>
                <Image
                  src={`/images/${product.mainImage}`} // Usar mainImage
                  alt={product.name}
                  width={300}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className={styles.productName}>{product.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <ProductList />
    </Suspense>
  );
}
