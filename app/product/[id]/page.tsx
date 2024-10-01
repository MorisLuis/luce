// app/product/[id]/page.tsx

import React from 'react';
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((prod) => prod.id === Number(params.id));

  return {
    title: product ? product.name : 'Luce',
    description: product ? product.seo.metaDescription : "",
    keywords: product ? product.seo.keywords.join(', ') : '',
  };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((prod) => prod.id === Number(params.id));

  return <ProductDetails product={product} />;
}
