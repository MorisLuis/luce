import { Product } from "@/interface/product";

export const products: Product[] = [
    {
        id: 1,
        name: "PULSAR 150",
        brand: "Schwung Design",
        shortDescription: "",
        longDescription: "La lámpara Pulsar destaca por su globo de cristal opalino, soplado a mano, y su elegante base de latón. Con un diseño retro que realza la singularidad de cualquier ambiente, esta lámpara de la reconocida marca polaca Schwung emite una luz cálida y acogedora, creando una atmósfera elegante y envolvente.",
        specs:[
            "Tipo de foco: LED (Incluido) 4-5 W",
            "Color de temperatura: 2200-3000 K",
            "Potencia maxima: 10W",
            "Lumen: 220lm",
            "Peso: 1.3 kg",
            "IP: 20",
        ],
        categories: ["Productos", "Schwung Design", "Lámparas arbotante"],
        mainImages: ["odyssey-lg/lampara_schwung_odysseylg_apagada.jpg", "odyssey-lg/lampara_schwung_odysseylg_encendida.jpg"],
        images: [
            { src: "odyssey-lg/lampara_schwung_odysseylg_apagada.jpg", alt: "Vista lateral de la lámpara arbotante apagada." },
            { src: "odyssey-lg/lampara_schwung_odysseylg_encendida.jpg", alt: "Vista lateral de la lámpara arbotante encendida." },
            { src: "armstrong-linear/Candil_schwung_armstronglinear_encendido.jpg", alt: "Vista frontal del candil encendido." },
        ],
        seo: {
            keywords: ["lámparas decorativas", "lámparas arbotantes", "schwung design"],
            metaDescription: "Descubre nuestra elegante lámpara de pared con pantalla de vidrio opalino satinado...",
        }
    }
]
