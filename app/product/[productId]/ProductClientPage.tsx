"use client";

import React, { useState } from 'react';
import ProductDetails from './ProductDetails';
import { Product } from '@/interface/product';
import LayoutRight from '@/components/LayoutRight';
import ImageSlider from '@/components/ImageSlider';
import { Modal } from '@/components/Modal';
import { ContactScreen } from '@/app/contact/ContactScreen';
import { useRouter, useSearchParams } from 'next/navigation';
import { ProductSpecs } from './ProductSpecs';
import products from "../../../data/products.json"

export default function ProductClientPage({ params }: { params: { productId: string, id: string } }) {

    const [contactModal, setContactModal] = useState(false);
    const [specsModal, setSpecsModal] = useState(false)
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get('from');

    const typedProduct: Product[] = products as Product[];
    const product: Product | undefined = typedProduct.find(
        (prod) => prod.id === Number(params.productId)
    );

    const handleOpenContact = () =>  setContactModal(!contactModal);
    const handleOpenSpecs = () =>  setSpecsModal(!specsModal);


    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    console.log({ima: product.images})

    const renderContent = () => {
        return <ImageSlider images={product.images} />
    };

    const goToNextProduct = () => {
        const currentProductId = Number(params.productId);

        let filteredProducts;

        if (from === 'categories') {
            filteredProducts = products
                .filter((prod) => prod.categories.some(category => product.categories.includes(category)))
                .sort((a, b) => b.id - a.id);
        } else {
            filteredProducts = products
                .filter((prod) => prod.brand === product.brand)
                .sort((a, b) => b.id - a.id);
        };

        const productsLen = filteredProducts.length;
        const currentIndex = filteredProducts.findIndex(prod => prod.id === currentProductId);
        if (productsLen === currentIndex + 1) {
            router.push(`/product/${filteredProducts[0].id}${from && `?from=${from}`}`)
        } else {
            router.push(`/product/${filteredProducts[currentIndex + 1].id}${from && `?from=${from}`}`)
        }
    };

    const goToBackProduct = () => {
        const currentProductId = Number(params.productId);
        let filteredProducts;
        if (from === 'categories') {
            filteredProducts = products
                .filter((prod) => prod.categories.some(category => product.categories.includes(category)))
                .sort((a, b) => b.id - a.id);
        } else {
            filteredProducts = products
                .filter((prod) => prod.brand === product.brand)
                .sort((a, b) => b.id - a.id);
        };

        const currentIndex = filteredProducts.findIndex(prod => prod.id === currentProductId);
        if (currentIndex === 0) {
            router.push(`/product/${filteredProducts[filteredProducts.length - 1].id}${from && `?from=${from}`}`)
        } else {
            router.push(`/product/${filteredProducts[currentIndex - 1].id}${from && `?from=${from}`}`)
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
                        handleOpenSpecs={handleOpenSpecs}
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

            <Modal
                visible={specsModal}
                onClose={handleOpenSpecs}
                headerTitle="Especificaciones"
            >
                <ProductSpecs
                    product={product}
                />
            </Modal>
        </>
    );
}
