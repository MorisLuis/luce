"use client";

import React, { useState } from 'react';
import { sendEmailProduct } from '@/services/sendEmail';
import { Button } from '@/components/Button';
import { Product } from '@/interface/product';
import styles from "../../../styles/Navigation.module.scss";

export const ContactNav = ({ product }: { product: Product }) => {


    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [sendingEmail, setSendingEmail] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSendingEmail(true)

        try {
            const res = await sendEmailProduct({
                email,
                product
            });

            if (res.ok) {
                setResponse('Correo enviado exitosamente!');
                //setEmail('');
            } else {
                const errorData = await res.json();
                setResponse(`Error al enviar el correo: ${errorData.message || 'Inténtalo de nuevo.'}`);
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            setResponse('Error al enviar el correo. Inténtalo de nuevo.');
        } finally {
            setSendingEmail(false);
        }
    };

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.closest('form');  // Encuentra el formulario más cercano
        if (form) {
            form.requestSubmit(); // Envia el formulario
        }
    };

    return (
        <nav className={styles.ContactNavNavigation}>
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

                <Button
                    title='Enviar'
                    onClick={handleButtonClick}
                />
                {
                    sendingEmail &&
                    <div>Enviando correo...</div>
                }
                {
                    response &&
                    <div>Información enviada exitosamente a {email}</div>
                }
            </form>
        </nav>
    );
}
