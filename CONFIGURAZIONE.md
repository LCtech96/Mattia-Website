# Guida alla Configurazione

## 📋 Checklist Pre-Deploy

### 1. Variabili d'Ambiente

Crea un file `.env.local` nella root del progetto con:

```env
# Resend API Key per invio email
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Google Analytics (opzionale)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Meta Pixel (opzionale)
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID

# Calendly URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR_USERNAME/YOUR_EVENT_TYPE

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.mattiaorlando.com
```

### 2. Configurazione Email (Resend)

1. Vai su [https://resend.com](https://resend.com) e crea un account
2. Ottieni la tua API Key dalla dashboard
3. Aggiungila a `.env.local` come `RESEND_API_KEY`
4. **IMPORTANTE**: Aggiorna l'indirizzo email nel file `app/api/contact/route.ts`:
   - Riga ~60: Cambia `from: "Website Contact <onboarding@resend.dev>"` con il tuo dominio verificato
   - Esempio: `from: "Website Contact <noreply@mattiaorlando.com>"`

### 3. Immagine Profilo

1. Aggiungi l'immagine del profilo in `public/assets/mattia-profile.jpg` (o `.webp`)
2. Dimensioni consigliate: 800x1000px o proporzioni simili
3. Formato: JPG, PNG o WebP (WebP consigliato per performance)

### 4. Calendly

1. Ottieni il tuo URL Calendly dalla dashboard
2. Formato: `https://calendly.com/TUO_USERNAME/TIPO_EVENTO`
3. Aggiungilo a `.env.local` come `NEXT_PUBLIC_CALENDLY_URL`

### 5. Google Analytics

1. Crea un account Google Analytics 4
2. Ottieni il Measurement ID (formato: G-XXXXXXXXXX)
3. Aggiungilo a `.env.local` come `NEXT_PUBLIC_GA_ID`
4. Aggiorna lo script in `app/layout.tsx` (riga ~30) sostituendo `G-XXXXXXXXXX` con il tuo ID reale

### 6. Meta Pixel

1. Vai su Meta Business Manager
2. Crea un Pixel e ottieni l'ID
3. Aggiungilo a `.env.local` come `NEXT_PUBLIC_META_PIXEL_ID`
4. Aggiorna lo script in `app/layout.tsx` (riga ~40) sostituendo `YOUR_PIXEL_ID` con il tuo ID reale

### 7. URL del Sito

Aggiorna tutti i riferimenti a `https://www.mattiaorlando.com` con il tuo dominio reale:
- `app/layout.tsx` (metadata OpenGraph)
- `app/sitemap.ts`
- `public/robots.txt`

## 🚀 Deploy su Vercel

1. Pusha il codice su GitHub/GitLab/Bitbucket
2. Vai su [Vercel](https://vercel.com) e importa il progetto
3. Aggiungi tutte le variabili d'ambiente nella sezione "Environment Variables"
4. Vercel rileverà automaticamente Next.js e configurerà il build
5. Dopo il deploy, verifica che tutto funzioni correttamente

## ✅ Test Post-Deploy

- [ ] Homepage carica correttamente
- [ ] Form di contatto invia email
- [ ] Calendly si apre correttamente
- [ ] Tutte le pagine sono accessibili
- [ ] Immagini caricano correttamente
- [ ] SEO metadata sono presenti (verifica con strumenti SEO)
- [ ] Google Analytics traccia le visite
- [ ] Meta Pixel traccia gli eventi

## 🔒 Sicurezza

- ✅ Rate limiting implementato (5 richieste/15 min per IP)
- ✅ Honeypot anti-bot nel form
- ✅ Validazione input con Zod
- ✅ Sanitizzazione dati
- ✅ HTTPS obbligatorio su Vercel

## 📞 Supporto

Per domande o problemi, contatta: info@mattiaorlando.com

