"use server";

import nodemailer from "nodemailer";

import { getPayloadClient } from "@/lib/payload";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function sendContactEmail(data: ContactFormData) {
    const payload = await getPayloadClient();
    const settings = await payload.findGlobal({ slug: "settings" });
    const emailSettings = settings.email; // Access the group

    if (!emailSettings?.host || !emailSettings?.username || !emailSettings?.password) {
        console.error("Missing SMTP configuration in Settings");
        throw new Error("SMTP configuration is missing on server.");
    }

    const transporter = nodemailer.createTransport({
        host: emailSettings.host,
        port: emailSettings.port,
        secure: emailSettings.port === 465, // Implicit secure for 465, otherwise STARTTLS
        auth: {
            user: emailSettings.username,
            pass: emailSettings.password,
        },
    });

    try {
        await transporter.verify();
    } catch (error) {
        console.error("SMTP Verify Failed", error);
        throw new Error("Failed to connect to email server.");
    }

    try {
        await transporter.sendMail({
            from: `"${data.name}" <${emailSettings.sender}>`, // Send via authenticated user
            to: emailSettings.sender, // Send TO the company email
            replyTo: data.email, // Reply to the visitor
            subject: `Nowa wiadomość ze strony: ${data.name}`,
            text: `Masz nową wiadomość od: ${data.name} \nEmail: ${data.email}\n\nWiadomość:\n${data.message}`,
            html: `
        <h3>Nowa wiadomość ze formularza kontaktowego</h3>
        <p><strong>Imię:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr />
        <p><strong>Wiadomość:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
        });
        return { success: true };
    } catch (error) {
        console.error("Send Mail Failed", error);
        throw new Error("Failed to send email.");
    }
}
