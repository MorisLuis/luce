import { products } from '@/data/products';
import ProductClientPage from './ProductClientPage';
import { Suspense } from 'react';
import LayoutRightSkeleton from '@/components/skeletons/LayoutRightSkeleton';
import ProductDetailsSkeleton from '@/components/skeletons/ProductDetailsSkeleton';
import ImageSliderSkeleton from '@/components/skeletons/ImageSliderSkeleton';

export async function generateMetadata({ params }: { params: { productId: string } }) {
  const product = products.find((prod) => prod.id === Number(params.productId));

  return {
    title: product ? product.name : 'Luce',
    description: product ? product.seo.metaDescription : "",
    keywords: product ? product.seo.keywords.join(', ') : '',
  };
}



export default function ProductPage({ params }: { params: { productId: string, id: string } }) {

  const renderContent = () => {
    return <ImageSliderSkeleton />
  };

  return (
    <Suspense fallback={
      <LayoutRightSkeleton
        contentSkeleton={renderContent}
        sideBarSkeleton={() => <ProductDetailsSkeleton />}
        secondaryDesign={true}
      />
    }>
      <ProductClientPage params={params} />
    </Suspense>
  )

}
