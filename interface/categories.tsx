export interface categories {
    id: number;
    name: string;
    description: string;
    images: { src: string, alt: string }[];
    seo: {
        keywords: string[],
        metaDescription: string;
    }
}