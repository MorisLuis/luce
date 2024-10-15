// app/product/[id]/page.tsx

import React from 'react';
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';
import { Product } from '@/interface/product';
import LayoutRight from '@/components/LayoutRight';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((prod) => prod.id === Number(params.id));

  return {
    title: product ? product.name : 'Luce',
    description: product ? product.seo.metaDescription : "",
    keywords: product ? product.seo.keywords.join(', ') : '',
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product: Product | undefined = products.find((prod) => prod.id === Number(params.id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  };

  const renderContent = () => {
    return (
      <div>
        <h1>Producto</h1>
        <p>{product.brand}</p>
      </div>
    )
  }

  return (
    <LayoutRight
      content={renderContent}
      sideBar={() => <ProductDetails product={product} />}
      bottom={true}
    />
  );
}
