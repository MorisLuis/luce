import nodemailer from 'nodemailer';

export async function POST(req: any) {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'moradoluisenrique@gmail.com',
            pass: process.env.PASSWORD_GMAIL, // Cambia esto por tu contraseña de aplicación
        },
    });

    // Definir el cuerpo del correo en HTML
    const mailOptions = {
        from: email,
        to: 'moradoluisenrique@gmail.com, moradoluisenrique@outlook.com',
        subject: subject,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="color: #333;">Bienvenido a LUCE!</h1>
                <p><strong>De:</strong> ${email}</p>
                <p><strong>Asunto:</strong> ${subject}</p>
                <p><strong>Mensaje:</strong></p>
                <p style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">
                    ${message}
                </p>
                <p style="font-size: 12px; color: #777;">Este es un mensaje automático, por favor no respondas.</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Correo enviado exitosamente!' }), { status: 200 });
    } catch (error: any) {
        console.error('Error al enviar el correo:', error);
        return new Response(JSON.stringify({ message: 'Error al enviar el correo.' }), { status: 500 });
    }
}
