import { products } from '@/data/products';
import ProductClientPage from './ProductClientPage';

export async function generateMetadata({ params }: { params: { productId: string } }) {
  const product = products.find((prod) => prod.id === Number(params.productId));

  return {
    title: product ? product.name : 'Luce',
    description: product ? product.seo.metaDescription : "",
    keywords: product ? product.seo.keywords.join(', ') : '',
  };
}

export default function ProductPage({ params }: { params: { productId: string, id: string } })  {
  return <ProductClientPage params={params} />;
}
