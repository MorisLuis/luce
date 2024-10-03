// app/product/[id]/page.tsx

import React from 'react';
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';
import { Product } from '@/interface/product';
import { ContactNav } from './contactNav';

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
    return <div>Producto no encontrado</div>; // O redirigir a otra página
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <ProductDetails product={product} />
      <ContactNav product={product}/>
    </div>
  );
}
