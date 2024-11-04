
export interface Product {
    id: number;
    name: string;
    images: { src: string; alt: string }[];
    brand: string;
    shortDescription: string;
    longDescription: string;
    specs: string[];
    categories: string[];
    mainImages: string[];
    pdf?: string;
    seo: {
        keywords: string[],
        metaDescription: string;
    }
}
