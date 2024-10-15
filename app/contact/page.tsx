"use client";
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import React, { Suspense, useEffect, useState } from 'react';
import { sendEmail } from '@/services/sendEmail';
import { products } from '@/data/products';
import { useSearchParams } from 'next/navigation';
import LayoutRight from '@/components/LayoutRight';
import styles from "../../styles/Contact.module.scss";

function ContactScreen() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const searchParams = useSearchParams();
    const productId = searchParams.get("productId")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await sendEmail({
                email,
                subject,
                message
            });

            if (res.ok) {
                setResponse('Correo enviado exitosamente!');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                const errorData = await res.json();
                setResponse(`Error al enviar el correo: ${errorData.message || 'Inténtalo de nuevo.'}`);
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            setResponse('Error al enviar el correo. Inténtalo de nuevo.');
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.closest('form');  // Encuentra el formulario más cercano
        if (form) {
            form.requestSubmit(); // Envia el formulario
        }
    };

    const ProductRender = products.find((product) => product.id == parseInt(productId ?? "0"));

    const getDataOfProduct = () => {
        if (ProductRender) {
            setSubject(`Estoy interesad@ en ${ProductRender.name}`)
            setMessage(`Estoy interesad@ en ${ProductRender.name}`);
        }
    };

    useEffect(() => {
        getDataOfProduct()
    }, [productId]);

    const renderContent = () => {
        return (
            <div className={styles.Contact}>
                <div className={styles.ContactContent}>
                    <Title title='Contacto' styles={{ textAlign: 'center' }} />
                    <form onSubmit={handleSubmit} className={styles.ContactForm}>
                        <div className={styles.inputContainer}>
                            <label htmlFor="email">Tu Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='input'
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="subject">Asunto:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className='input'
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className='input'
                            />
                        </div>

                        <Button
                            title='Enviar'
                            onClick={handleButtonClick}
                        />
                    </form>
                    {response && <p>{response}</p>}
                </div>
            </div>
        )
    }

    return (
        <LayoutRight
            content={renderContent}
        />
    );
};

export default function Contact() {
    return (
        <Suspense fallback={<div>Cargando contacto...</div>}>
            <ContactScreen />
        </Suspense>
    );
}
