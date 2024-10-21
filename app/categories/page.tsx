import { Suspense } from "react";
import { CategoriesGrid } from "./CategoriesGrid";
import { categoriesData } from "@/data/categories";

export async function generateMetadata() {
  return {
    title: "Luce - Categorias",
    description: "La luz que define el arte de vivir.",  
    keywords: categoriesData.map((category) => category.name)
  };
}

export default function Categories() {
  return (
    <Suspense fallback={<div>Cargando categorias...</div>}>
      <CategoriesGrid />
    </Suspense>
  );
}
