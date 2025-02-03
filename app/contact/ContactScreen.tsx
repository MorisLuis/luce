"use client";

import { Button } from '@/components/Button';
import React, { useCallback, useEffect, useState } from 'react';
import { sendEmail } from '@/services/sendEmail';
import styles from "../../styles/Contact.module.scss";
import Link from 'next/link';
import products from '../../data/products.json';

interface ContactScreenInterface {
    center?: boolean
    secondaryDesign?: boolean;
    productId?: number;
}

export function ContactScreen({ center, secondaryDesign, productId }: ContactScreenInterface) {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const [sendingEmail, setSendingEmail] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendingEmail(true)
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
            setSendingEmail(false)
        } finally {
            setSendingEmail(false)
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.closest('form');
        if (form) {
            form.requestSubmit();
        }
    };

    const ProductRender = products.find((product) => product.id == productId);

    const getDataOfProduct = useCallback(() => {
        if (ProductRender) {
            setSubject(`Estoy interesad@ en ${ProductRender.name}`)
            setMessage(`Estoy interesad@ en ${ProductRender.name}`);
        }
    }, [ProductRender]);

    useEffect(() => {
        getDataOfProduct()
    }, [productId, getDataOfProduct]);

    return (
        <div className={center ? `${styles.Contact} ${styles.center}` : styles.Contact}>
            <div className={styles.ContactContent}>
                <div className={styles.ContactHeader}>
                    <h1>Contactenos</h1>
                </div>
                <form onSubmit={handleSubmit} className={secondaryDesign ? `${styles.ContactForm} ${styles.secondary}` : styles.ContactForm}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            id="name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={'input'}
                            placeholder='Nombre*'
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            id="email"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className={'input'}
                            placeholder='Email*'
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className={'input'}
                        />
                    </div>
                    <Button
                        title='Enviar'
                        onClick={handleButtonClick}
                        disabled={sendingEmail}
                        loading={sendingEmail}
                        titleLoading="Enviando..."
                        secondary={true}
                    />
                </form>
                <div
                    className={secondaryDesign ? `${styles.ContactFooter} ${styles.secondary}` : styles.ContactFooter}
                >
                    <Link href={'mailto: hola@luce.com.mx'}>
                        hola@luce.com.mx
                    </Link>
                    <Link href={'https://www.instagram.com/luce_mex/'}>
                        instagram
                    </Link>
                </div>
                {response && <p>{response}</p>}
            </div>
        </div>
    )
};