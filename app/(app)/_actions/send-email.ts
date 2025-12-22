"use server";

import { getPayloadClient } from "@/lib/payload";
import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    message: z.string().min(1),
});

export async function sendEmailAction(data: { name: string; email: string; message: string }) {
    const result = formSchema.safeParse(data);

    if (!result.success) {
        return { error: "Invalid form data" };
    }

    const { name, email, message } = result.data;

    try {
        const payload = await getPayloadClient();
        const settings = await payload.findGlobal({
            slug: "settings",
        });

        if (!settings.email?.host) {
            return { error: "SMTP settings not configured" };
        }

        // Use settings.publicEmail as recipient, fallback to sender or hardcoded if missing
        // Cast to any because publicEmail might not satisfy TS global config types if not regenerated
        const recipient = (settings as any).publicEmail || settings.email.sender || "kontakt@dggpiece.pl";

        const transporter = nodemailer.createTransport({
            host: settings.email.host,
            port: settings.email.port,
            secure: settings.email.port === 465, // true for 465, false for other ports
            auth: {
                user: settings.email.username,
                pass: settings.email.password,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: `"${name}" <${settings.email.sender}>`, // Send FROM the configured SMTP sender to avoid spoofing blocks
            replyTo: email, // Reply to the user's email
            to: recipient,
            subject: `Nowa wiadomość od: ${name}`,
            text: `
        Imię: ${name}
        Email: ${email}
        
        Wiadomość:
        ${message}
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Email send error:", error);
        return { error: "Failed to send email" };
    }
}
