import Image from "next/image";
import styles from "../styles/page.module.scss";
import Link from "next/link";
import { products } from "../data/products"; // Importar productos

export default function Home() {
  return (
    <div className={styles.gridContainer}>
      {products.map((product) => (
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
