import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/productDetails.module.scss';
import Image from 'next/image';

interface ImageData {
    alt: string;
    src: string;
}

interface CarouselProps {
    images: ImageData[]; // Lista de objetos que contienen alt y src
    interval?: number; // Intervalo de cambio (en milisegundos)
}

const CarouselProduct: React.FC<CarouselProps> = ({ images, interval = 6000 }) => {

    const settings = {
        infinite: true,
        speed: interval,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: interval,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
        ],
    };

    return (
        <div className={styles.HomeCarrusel}>
            <Slider {...settings} className={styles.HomeCarrusel__content}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <Image
                            src={`/images/${image.src}`}
                            alt={image.alt}
                            width={100} // Valores temporales o placeholder (no se usan si se utiliza `fill`)
                            height={100} // Valores temporales
                            quality={100}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselProduct;
