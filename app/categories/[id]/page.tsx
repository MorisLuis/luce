import React, { Suspense } from 'react'
import { CategoryGrid } from './CategoryGrid';
import { categoriesData } from '@/data/categories';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const category = categoriesData.find((category) => category.name === decodeURIComponent(params.id));

    return {
        title: category ? `Categoria / ${category.name}` : 'Luce',
        description: category ? category.seo.metaDescription : "",
        keywords: category ? category.seo.keywords.join(', ') : '',
    };
};


export default function ProductFromCategory() {
    return (
        <Suspense fallback={<div>Cargando categorias...</div>}>
            <CategoryGrid />
        </Suspense>
    );
}
