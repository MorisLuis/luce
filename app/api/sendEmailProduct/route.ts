import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { email, product } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'hola@luce.com.mx',
            pass: process.env.PASSWORD_GMAIL, // Cambia esto por tu contraseña de aplicación
        },
    });

    // Definir el cuerpo del correo en HTML
    const mailOptions = {
        from: email,
        to: 'moradoluisenrique@gmail.com, hola@luce.com.mx',
        subject: `Te interesa el producto ${product.name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h1 style="color: #333;">Bienvenido a LUCE!</h1>
                <h2 style="color: #333;">Vimos que estas interesado en el producto: ${product.name}</h2>

                <p><strong>De:</strong> ${email}</p>
                <p><strong>Asunto:</strong>${product.name} información</p>
                <p><strong>Mensaje:</strong></p>
                <p style="border: 1px solid #ccc; padding: 10px; background-color: #f9f9f9;">
                    Te mostramos el detalle de ${product.name}.
                    ${product.shortDescription}
                </p>
                <p style="font-size: 12px; color: #777;">Este es un mensaje automático, por favor no respondas.</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Correo enviado exitosamente!' }), { status: 200 });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return new Response(JSON.stringify({ message: 'Error al enviar el correo.' }), { status: 500 });
    }
}
