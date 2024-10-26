import { Suspense } from "react";
import { CategoriesGrid } from "./CategoriesGrid";
import { categoriesData } from "@/data/categories";
import { GridSkeletons } from "@/components/skeletons/GridSkeletons";
import LayoutRightSkeleton from "@/components/skeletons/LayoutRightSkeleton";
import SideBarSkeleton from "@/components/skeletons/SideBarSkeleton";

export async function generateMetadata() {
  return {
    title: "Luce - Categorias",
    description: "La luz que define el arte de vivir.",
    keywords: categoriesData.map((category) => category.name)
  };
}

export default function Categories() {
  return (
    <Suspense fallback={
      <LayoutRightSkeleton
        contentSkeleton={() => <GridSkeletons />}
        sideBarSkeleton={() => <SideBarSkeleton />}
      />
    }>
      <CategoriesGrid />
    </Suspense>
  );
}
