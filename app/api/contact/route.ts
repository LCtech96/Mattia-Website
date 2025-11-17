import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  surname: z.string().min(2).max(50).optional(),
  email: z.string().email(),
  subject: z.string().min(3).max(100).optional(),
  phone: z.string().optional(),
  message: z.string().min(10).max(1000),
  honeypot: z.string().max(0).optional(),
});

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max 5 requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Troppe richieste. Riprova più tardi." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Dati non validi", details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { name, surname, email, subject, phone, message, honeypot } = validationResult.data;

    // Check honeypot (bot detection)
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { error: "Bot detected" },
        { status: 400 }
      );
    }

    // Initialize Resend (you'll need to set RESEND_API_KEY in .env.local)
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fullName = surname ? `${name} ${surname}` : name;
    const emailSubject = subject || `Nuova richiesta di contatto da ${fullName}`;

    // Send email
    const emailContent = `
Nuova richiesta di contatto da mattiaorlando.com

Nome: ${fullName}
Email: ${email}
Telefono: ${phone || "Non fornito"}
Oggetto: ${subject || "Nessun oggetto specificato"}

Messaggio:
${message}

---
Inviato il: ${new Date().toLocaleString("it-IT")}
IP: ${ip}
    `;

    const { data, error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // Update with your verified domain
      to: ["info@mattiaorlando.com"],
      subject: emailSubject,
      text: emailContent,
      reply_to: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Errore nell'invio dell'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Messaggio inviato con successo" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}

