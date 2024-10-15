import { Product } from "@/interface/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Odyssey LG",
        brand: "Schwung Design",
        shortDescription: "La lámpara arbotante Schwung Odyssey Large cuenta con una pantalla en forma de campana...",
        longDescription: "La lámpara arbotante Odyssey de Schwung cuenta con una base de latón satinado que...",
        specifications: {
            glass: "Vidrio Opal Triplex (grabado ácido en el exterior)",
            finishes: ["LBB / Latón Bronceado Lacado", "BGM / Metal Negro", "PN / Níquel Pulido (costo adicional de 25%)"],
            lightSource: "Bombilla LED (incluida) de 4 W",
            maxPower: "15W",
            lumens: "220 lm",
            colorTemperature: "2200-3000 K",
            weight: "2.4 kg / 5.3 lb",
        },
        categories: ["Productos", "Schwung Design", "Lámparas arbotante"],
        category: "Schwung Design",
        mainImage: "odyssey-lg/lampara_schwung_odysseylg_apagada.jpg",
        images: [
            { src: "odyssey-lg/lampara_schwung_odysseylg_apagada.jpg", alt: "Vista lateral de la lámpara arbotante apagada." },
            { src: "odyssey-lg/lampara_schwung_odysseylg_encendida.jpg", alt: "Vista lateral de la lámpara arbotante encendida." },
            { src: "armstrong-linear/Candil_schwung_armstronglinear_encendido.jpg", alt: "Vista frontal del candil encendido." },
        ],
        //pdf: "Lampara_schwung_odysseylg_fichatecnica.pdf",
        seo: {
            keywords: ["lámparas decorativas", "lámparas arbotantes", "schwung design"],
            metaDescription: "Descubre nuestra elegante lámpara de pared con pantalla de vidrio opalino satinado...",
        }
    },
    {
        id: 2,
        name: "Armstrong Linear",
        brand: "Schwung Design",
        shortDescription: "El candil Armstrong Linear de la colección Globes de Schwung...",
        longDescription: "El candil Armstrong Linear de la colección Globes de Schwung, captura una sensación de movimiento...",
        specifications: {
            glass: ["Vidrio Opalino Mate (Soda Lime Triplex)", "Vidrio Mármol Mate (Soda Lime)", "Vidrio Transparente (Ribbon de Borosilicato)"],
            weight: "18.6 kg / 41.0 lb",
            lightSource: "Bombilla LED (incluida) 10 x 4-5 W",
            maxPower: "10 x 10 W",
            lumens: "2200 lm",
            colorTemperature: "2200-3000 K",
        },
        categories: ["Productos", "Schwung Design", "Colección Globe", "Candiles"],
        category: "Colección Globe",
        mainImage: "armstrong-linear/Candil_schwung_armstronglinear_apagado.jpg",
        images: [
            { src: "armstrong-linear/Candil_schwung_armstronglinear_apagado.jpg", alt: "Vista frontal del candil apagado." },
            { src: "armstrong-linear/Candil_schwung_armstronglinear_encendido.jpg", alt: "Vista frontal del candil encendido." },
            { src: "odyssey-lg/lampara_schwung_odysseylg_encendida.jpg", alt: "Vista lateral de la lámpara arbotante encendida." },
            // Más imágenes...
        ],
        pdf: "candil_schwung_armstronglinear_fichatecnica.pdf",
        seo: {
            keywords: ["lámparas decorativas", "candiles", "schwung design", "colección globes"],
            metaDescription: "Descubre nuestro elegante candil con pantallas de vidrio y base de latón en tres acabados sofisticados...",
        }
    }
    // Más productos...
];
