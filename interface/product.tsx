
export interface Product {
    id: number;
    name: string;
    images: { src: string; alt: string }[];
    brand: string;
    shortDescription: string;
    longDescription: string;
    specifications: {
        glass?: string | string[];
        lightSource: string;
        maxPower: string;
        lumens: string;
        colorTemperature: string;
        weight: string;
        finishes?: string[]
    };
    categories: string[];
    category: string;
    mainImage: string;
    pdf?: string;
    seo: {
        keywords: string[],
        metaDescription: string;
    }
}
