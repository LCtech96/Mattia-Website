# Sito Web Mattia Orlando - Consulente Patrimoniale

Sito web professionale per Mattia Orlando, consulente patrimoniale, costruito con Next.js 15, TailwindCSS e TypeScript.

## 🚀 Stack Tecnologico

- **Framework:** Next.js 15 con App Router
- **Styling:** TailwindCSS
- **Form:** React Hook Form + Zod
- **Email:** Resend (SMTP)
- **TypeScript:** Full type safety
- **SEO:** next-seo + Metadata API

## 📦 Installazione

1. Installa le dipendenze:
```bash
pnpm install
```

2. Copia il file `.env.example` e crea `.env.local`:
```bash
cp .env.example .env.local
```

3. Configura le variabili d'ambiente in `.env.local`:
   - `RESEND_API_KEY`: Chiave API di Resend per l'invio email
   - `NEXT_PUBLIC_GA_ID`: ID Google Analytics (opzionale)
   - `NEXT_PUBLIC_META_PIXEL_ID`: ID Meta Pixel (opzionale)
   - `NEXT_PUBLIC_CALENDLY_URL`: URL del tuo Calendly (opzionale)
   - `NEXT_PUBLIC_SITE_URL`: URL del sito

4. Aggiungi l'immagine del profilo:
   - Crea la cartella `public/assets/`
   - Aggiungi `mattia-profile.jpg` (o `.webp`) in `public/assets/`

5. Avvia il server di sviluppo:
```bash
pnpm dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## 📁 Struttura del Progetto

```
/
├── app/                    # App Router di Next.js
│   ├── api/               # API routes
│   │   └── contact/       # Endpoint per form contatto
│   ├── chi-sono/          # Pagina Chi Sono
│   ├── servizi/           # Pagina Servizi
│   ├── contatti/          # Pagina Contatti
│   ├── privacy-policy/    # Privacy Policy
│   ├── cookie-policy/     # Cookie Policy
│   ├── layout.tsx         # Layout principale
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Stili globali
│   ├── sitemap.ts         # Sitemap dinamica
│   └── robots.txt         # Robots.txt
├── components/            # Componenti riutilizzabili
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   └── CalendlyEmbed.tsx
├── sections/              # Sezioni della homepage
│   ├── HeroSection.tsx
│   ├── ChiSonoSection.tsx
│   ├── ServiziSection.tsx
│   ├── PercheFidarmiSection.tsx
│   └── ContattoSection.tsx
└── public/               # File statici
    └── assets/          # Immagini
```

## 🔧 Configurazione

### Email (Resend)

1. Crea un account su [Resend](https://resend.com)
2. Ottieni la tua API key
3. Aggiungila a `.env.local` come `RESEND_API_KEY`
4. Aggiorna l'indirizzo email nel file `app/api/contact/route.ts` (riga con `from:`)

### Calendly

1. Ottieni il tuo URL Calendly
2. Aggiorna `NEXT_PUBLIC_CALENDLY_URL` in `.env.local`
3. Aggiorna anche il componente `CalendlyEmbed.tsx` con il tuo URL

### Google Analytics & Meta Pixel

1. Ottieni i tuoi ID da Google Analytics e Meta Business
2. Aggiungili in `.env.local`
3. Aggiorna gli script in `app/layout.tsx` con i tuoi ID reali

## 🚢 Deploy su Vercel

1. Pusha il codice su GitHub
2. Connetti il repository a Vercel
3. Aggiungi le variabili d'ambiente in Vercel
4. Deploy automatico!

## 📝 Note

- Il form di contatto include protezione honeypot anti-bot
- Rate limiting implementato sull'endpoint `/api/contact` (5 richieste ogni 15 minuti per IP)
- Immagini ottimizzate con Next.js Image component
- SEO completo con metadata, OpenGraph e Schema.org
- Sitemap e robots.txt generati automaticamente

## 📄 Licenza

Tutti i diritti riservati © 2025 Mattia Orlando

