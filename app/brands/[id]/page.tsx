import React, { Suspense } from 'react'
import { BrandGrid } from './BrandGrid';
import { brandsData } from '@/data/brands';
import LayoutRightSkeleton from '@/components/skeletons/LayoutRightSkeleton';
import { GridSkeletons } from '@/components/skeletons/GridSkeletons';
import SideBarSkeleton from '@/components/skeletons/SideBarSkeleton';

export async function generateMetadata({ params }: { params: { id: string } }) {
    const brand = brandsData.find((brand) => brand.name === decodeURIComponent(params.id));

    return {
        title: brand ? `Marca / ${brand.name}` : 'Luce',
        description: brand ? brand.seo.metaDescription : "",
        keywords: brand ? brand.seo.keywords.join(', ') : '',
    };
};

export default function ProductFromCategory() {
    return (
        <Suspense fallback={
            <LayoutRightSkeleton
                contentSkeleton={() => <GridSkeletons />}
                sideBarSkeleton={() => <SideBarSkeleton />}
            />
        }>
            <BrandGrid />
        </Suspense>
    );
}
