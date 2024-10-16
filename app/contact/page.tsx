"use client";
import React, { Suspense } from 'react';
import LayoutRight from '@/components/LayoutRight';
import { ContactScreen } from './ContactScreen';

function ContactPage() {

    return (
        <LayoutRight
            content={() => ContactScreen({ center: true, secondaryDesign: true })}
        />
    );
};

export default function Contact() {
    return (
        <Suspense fallback={<div>Cargando contacto...</div>}>
            <ContactPage />
        </Suspense>
    );
}
