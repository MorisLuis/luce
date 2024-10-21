
import { Suspense } from "react";
import { BrandsCategory } from "./BrandsGrid";
import { brandsData } from "@/data/brands";

export async function generateMetadata() {
  return {
    title: "Luce - Marcas",
    description: "La luz que define el arte de vivir.",  
    keywords: brandsData.map((brands) => brands.name)
  };
}

export default function Brands() {
  return (
    <Suspense fallback={<div>Cargando marcas...</div>}>
      <BrandsCategory />
    </Suspense>
  );
}
