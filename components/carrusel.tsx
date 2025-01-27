import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

interface CarouselProps {
    images: string[]; // Lista de URLs de las imágenes
    interval?: number; // Intervalo de cambio (en milisegundos)
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {

    // Configuración para el carrusel infinito hacia la derecha
    const settings = {
        infinite: true,       // Permite un movimiento infinito
        speed: interval,      // Velocidad del desplazamiento
        slidesToShow: 2,      // Mostrar una sola imagen a la vez
        slidesToScroll: 1,    // Desplazar una imagen a la vez
        autoplay: true,       // Activar la reproducción automática
        autoplaySpeed: interval, // Control del intervalo de cambio
        arrows: false,        // Desactivar las flechas de navegación
        dots: false,
        responsive: [
            {
                breakpoint: 768, // Ancho máximo de pantalla para dispositivos móviles (puedes ajustar este valor)
                settings: {
                    slidesToShow: 1, // En dispositivos móviles, mostrar una sola imagen
                },
            },
            {
                breakpoint: 1024, // Ancho máximo de pantalla para tablets y pantallas más grandes
                settings: {
                    slidesToShow: 2, // En dispositivos desktop, mostrar dos imágenes
                },
            },
        ],
    };

    return (
        <div className={styles.HomeCarrusel}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className={styles.HomeCarrusel__content} key={index}>
                        <Image
                            key={index}
                            src={`/${image}`}
                            alt={`carousel-image-${index}`}

                            width={100}
                            height={100}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
