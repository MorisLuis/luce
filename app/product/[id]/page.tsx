// Este archivo seguirá siendo un Server Component, sin "use client"
import { products } from '@/data/products';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = products.find((prod) => prod.id === Number(params.id));

  return {
    title: product ? product.name : 'Luce',
    description: product ? product.seo.metaDescription : "",
    keywords: product ? product.seo.keywords.join(', ') : '',
  };
}

import ProductClientPage from './ProductClientPage';

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductClientPage params={params} />;
}
