"use client";

import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';
import { Product } from '@/interface/product';
import LayoutRight from '@/components/LayoutRight';
import ImageSlider from '@/components/ImageSlider';
import { Modal } from '@/components/Modal';
import { ContactScreen } from '@/app/contact/ContactScreen';
import { useRouter } from 'next/navigation';

export default function ProductClientPage({ params }: { params: { productId: string, id: string } }) {

    const [contactModal, setContactModal] = useState(false);
    const router = useRouter();

    const product: Product | undefined = products.find(
        (prod) => prod.id === Number(params.productId)
    );

    const handleOpenContact = () => {
        setContactModal(!contactModal);
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const renderContent = () => {
        return <ImageSlider images={product.images} />
    };

    const goToNextProduct = () => {
        const currentProductId = Number(params.productId);
        const filteredProducts = products
            .filter((prod) => prod.categories.some(category => product.categories.includes(category)))
            .sort((a, b) => b.id - a.id);
        const productsLen = filteredProducts.length;
        const currentIndex = filteredProducts.findIndex(prod => prod.id === currentProductId);
        if (productsLen === currentIndex + 1) {
            router.push(`/product/${filteredProducts[0].id}`)
        } else {
            router.push(`/product/${filteredProducts[currentIndex + 1].id}`)
        }
    };

    const goToBackProduct = () => {
        const currentProductId = Number(params.productId);
        const filteredProducts = products
            .filter((prod) => prod.categories.some(category => product.categories.includes(category)))
            .sort((a, b) => b.id - a.id);
        const currentIndex = filteredProducts.findIndex(prod => prod.id === currentProductId);
        if (currentIndex === 0) {
            router.push(`/product/${filteredProducts[filteredProducts.length - 1].id}`)
        } else {
            router.push(`/product/${filteredProducts[currentIndex - 1].id}`)
        }
    };

    return (
        <>
            <LayoutRight
                content={renderContent}
                sideBar={() =>
                    <ProductDetails
                        product={product}
                        handleOpenContact={handleOpenContact}
                        next={goToNextProduct}
                        back={goToBackProduct}
                    />
                }
                bottom={true}
                secondaryDesign={true}
            />

            <Modal
                visible={contactModal}
                onClose={handleOpenContact}
                headerTitle="Contacto"
            >
                <ContactScreen
                    productId={product.id}
                />
            </Modal>
        </>
    );
}
