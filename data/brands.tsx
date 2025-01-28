import { brandsInterface } from "@/interface/brands";

export const brandsData: brandsInterface[] = [
    {
        id: 0,
        name: "Todos",
        description: "",
        images: [],
        mainImages:[
            "armstrong-linear/Candil_schwung_armstronglinear_apagado.jpg",
            "armstrong-linear/Candil_schwung_armstronglinear_encendido.jpg"
        ],
        seo: {
            keywords: ["lámparas decorativas", "lámparas Apliques", "schwung design"],
            metaDescription: "Descubre nuestra elegante lámpara de pared con pantalla de vidrio opalino satinado...",
        }
    },
    {
        id: 1,
        name: "Schwung Design",
        description: "Schwung is a creative studio with the heart of a collector and the hands of a maker. We imagine, design, build and gather an endlessly evolving family of desirable objects that bring energy, warmth and pleasure to personal spaces of every kind. We’re obsessive accumulators – of objects, stories and people.",
        images: [
            {
                "src": "ODYSSEYLG/Arbotante_schwung_odysseylg_apagado.jpg",
                "alt": "odysseylg_apagado"
            },
            {
                "src": "ODYSSEYLG/Arbotante_schwung_odysseylg_encendido.jpg",
                "alt": "odysseylg_encendido"
            }
        ],
        mainImages:[
            "ODYSSEYLG/Arbotante_schwung_odysseylg_apagado.jpg",
            "ODYSSEYLG/Arbotante_schwung_odysseylg_encendido.jpg"
        ],

        seo: {
            keywords: ["lámparas decorativas", "lámparas Apliques", "schwung design"],
            metaDescription: "Descubre nuestra elegante lámpara de pared con pantalla de vidrio opalino satinado...",
        }
    }
]
