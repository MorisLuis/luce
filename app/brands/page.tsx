
import { Suspense } from "react";
import { BrandsCategory } from "./BrandsGrid";
import { brandsData } from "@/data/brands";
import LayoutRightSkeleton from "@/components/skeletons/LayoutRightSkeleton";
import { GridSkeletons } from "@/components/skeletons/GridSkeletons";
import SideBarSkeleton from "@/components/skeletons/SideBarSkeleton";

export async function generateMetadata() {
  return {
    title: "Luce - Marcas",
    description: "La luz que define el arte de vivir.",
    keywords: brandsData.map((brands) => brands.name)
  };
}

export default function Brands() {
  return (
    <Suspense fallback={
      <LayoutRightSkeleton
        contentSkeleton={() => <GridSkeletons />}
        sideBarSkeleton={() => <SideBarSkeleton />}
      />
    }>
      <BrandsCategory />
    </Suspense>
  );
}