import { Product } from "@/interface/product";

interface sendEmailInterface {
    email: string;
    subject: string;
    message: string;
}

const sendEmail = async ({
    email,
    subject,
    message
}: sendEmailInterface) => {
    try {
        const res = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, subject, message }),
        });

        if (!res.ok) {
            // Lanzamos un error con los detalles del problema
            const errorData = await res.json();
            throw new Error(errorData.message || 'Error desconocido');
        }

        return res;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

interface sendEmailProductInterface {
    email: string;
    product: Product
}

const sendEmailProduct = async ({
    email,
    product
}: sendEmailProductInterface) => {
    try {
        const res = await fetch('/api/sendEmailProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, product }),
        });

        if (!res.ok) {
            // Lanzamos un error con los detalles del problema
            const errorData = await res.json();
            throw new Error(errorData.message || 'Error desconocido');
        }

        return res;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};


export {
    sendEmail,
    sendEmailProduct
}