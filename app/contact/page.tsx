"use client";
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import React, { useState } from 'react';
import styles from "../../styles/Contact.module.scss";
import { sendEmail } from '@/services/sendEmail';

export default function Contact() {
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
        const form = e.currentTarget.closest('form');  // Encuentra el formulario más cercano
        if (form) {
            form.requestSubmit(); // Envia el formulario
        }
    };

    return (
        <div className={styles.Contact}>
            <Title title='Contacto' />
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
                    onClick={handleButtonClick} // Ahora usamos la función handleButtonClick
                />
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}
