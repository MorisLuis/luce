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

    const category = decodeURIComponent(params.id as string);
    const product: Product | undefined = products.find(
        (prod) => prod.id === Number(params.productId) && prod.categories.includes(category)
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
        const nextProduct: Product | undefined = products.find(
            (prod) => prod.categories.includes(category) && prod.id !== Number(params.productId)
        );

        if (!nextProduct) return;
        router.push(`/categories/${params.id}/product/${nextProduct.id}`)
    };

    const goToBackProduct = () => {
        const currentProductId = Number(params.productId);

        // Filtrar los productos que pertenecen a la categoría
        const filteredProducts = products
            .filter((prod) => prod.categories.includes(category) && prod.id < currentProductId)
            .sort((a, b) => b.id - a.id);

        const nextProduct = filteredProducts[0];

        if (!nextProduct) {
            const filteredProducts = products
                .filter((prod) => prod.categories.includes(category) && prod.id > currentProductId)
                .sort((a, b) => b.id - a.id);
            const nextProduct = filteredProducts[0];
            if (!nextProduct) return;
            return router.push(`/categories/${params.id}/product/${nextProduct.id}`);
        };

        router.push(`/categories/${params.id}/product/${nextProduct.id}`);
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
                        category={category}
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
