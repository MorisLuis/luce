// components/ProductList.tsx
"use client"; // Necesario para usar useSearchParams

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/page.module.scss";
import { products } from "@/data/products";

export default function ProductList() {
    const searchParams = useSearchParams();
    const category = searchParams.get("category") || "Todos"; // Obtener parámetro de consulta

    const ProductRender = products.filter((product) =>
        category === "Todos" ? true : product.categories.includes(category)
    );

    return (
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
    );
}
