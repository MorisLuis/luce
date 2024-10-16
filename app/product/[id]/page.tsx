
import React from 'react';
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';
import { Product } from '@/interface/product';
import LayoutRight from '@/components/LayoutRight';
import ImageSlider from '@/components/ImageSlider';

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
      <ImageSlider images={product.images} />
    )
  }

  return (
    <LayoutRight
      content={renderContent}
      sideBar={() => <ProductDetails product={product} />}
      bottom={true}
      secondaryDesign={true}
    />
  );
}
