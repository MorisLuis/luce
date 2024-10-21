"use client";
import { Button } from '@/components/Button';
import React, { useEffect, useState } from 'react';
import { sendEmail } from '@/services/sendEmail';
import { products } from '@/data/products';
import styles from "../../styles/Contact.module.scss";
import Link from 'next/link';

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
        const form = e.currentTarget.closest('form');
        if (form) {
            form.requestSubmit();
        }
    };

    const ProductRender = products.find((product) => product.id == productId);

    const getDataOfProduct = () => {
        if (ProductRender) {
            setSubject(`Estoy interesad@ en ${ProductRender.name}`)
            setMessage(`Estoy interesad@ en ${ProductRender.name}`);
        }
    };

    useEffect(() => {
        getDataOfProduct()
    }, [productId]);

    return (
        <div className={center ? `${styles.Contact} ${styles.center}` : styles.Contact}>
            <div className={styles.ContactContent}>
                <h1>Contactenos</h1>
                <form onSubmit={handleSubmit} className={styles.ContactForm}>
                    <div className={styles.inputContainer}>
                        <label htmlFor="email">Mail.</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={secondaryDesign ? 'input' : 'input'}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="subject">Asunto.</label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className={secondaryDesign ? 'input' : 'input'}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="message">Mensaje.</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className={secondaryDesign ? 'input' : 'input'}
                        />
                    </div>

                    <Button
                        title='Enviar'
                        onClick={handleButtonClick}
                        secondaryDesign={true}
                        extraStyles={{
                            width: "30%",
                        }}
                    />
                </form>
                <div className={styles.ContactFooter}>
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