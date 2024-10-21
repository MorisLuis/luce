import { Suspense } from "react";
import { CategoryGrid } from "./CategoryGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luce - Categorias",
  description: "La luz que define el arte de vivir.",
};


export default function Categories() {
  return (
    <Suspense fallback={<div>Cargando productos...</div>}>
      <CategoryGrid />
    </Suspense>
  );
}
