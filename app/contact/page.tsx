"use client";
import { Button } from '@/components/Button';
import { Title } from '@/components/Title';
import React, { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, subject, message }),
        });

        if (res.ok) {
            setResponse('Correo enviado exitosamente!');
            setEmail('');
            setSubject('');
            setMessage('');
        } else {
            setResponse('Error al enviar el correo. Inténtalo de nuevo.');
        }
    };

    return (
        <div>
            <Title title='Contacto'/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Tu Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="subject">Asunto:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>

                <Button
                    title='Enviar'
                    onClick={handleSubmit}
                />
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}
