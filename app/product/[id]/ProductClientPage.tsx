"use client";  // Aquí indicamos que este componente es del cliente

import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductDetails from './ProductDetails';
import { Product } from '@/interface/product';
import LayoutRight from '@/components/LayoutRight';
import ImageSlider from '@/components/ImageSlider';
import { Modal } from '@/components/Modal';
import { ContactScreen } from '@/app/contact/ContactScreen';

export default function ProductClientPage({ params }: { params: { id: string } }) {
    const product: Product | undefined = products.find((prod) => prod.id === Number(params.id));
    const [contactModal, setContactModal] = useState(false);

    const handleOpenContact = () => {
        setContactModal(!contactModal);
    };

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const renderContent = () => {
        return <ImageSlider images={product.images} />
    };

    return (
        <>
            <LayoutRight
                content={renderContent}
                sideBar={() => <ProductDetails product={product} handleOpenContact={handleOpenContact} />}
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
