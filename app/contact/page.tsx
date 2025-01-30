import React, { Suspense } from 'react';
import LayoutRight from '@/components/LayoutRight';
import { ContactScreen } from './ContactScreen';
import LayoutRightSkeleton from '@/components/skeletons/LayoutRightSkeleton';
import SideBarSkeleton from '@/components/skeletons/SideBarSkeleton';
import { ContactSkeleton } from '@/components/skeletons/ContactSkeleton';

export async function generateMetadata() {
    return {
        title: "Luce - Contacto",
        description: "La luz que define el arte de vivir."
    };
}

function ContactPage() {
    return (
        <LayoutRight
            content={() => <ContactScreen center={true} />}
        />
    );
};

export default function Contact() {
    return (
        <Suspense fallback={
            <LayoutRightSkeleton
                contentSkeleton={() => <ContactSkeleton center={true}/>}
                sideBarSkeleton={() => <SideBarSkeleton />}
            />
        }>
            <ContactPage />
        </Suspense>
    );
}
