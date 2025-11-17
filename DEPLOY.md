# 🚀 Guida al Deploy su Vercel

## Metodo 1: Deploy tramite Dashboard Vercel (Consigliato)

### Passo 1: Connetti il Repository
1. Vai su [https://vercel.com](https://vercel.com) e accedi con il tuo account GitHub
2. Clicca su **"Add New Project"** o **"Import Project"**
3. Seleziona il repository **"LCtech96/Mattia-Website"**
4. Vercel rileverà automaticamente Next.js

### Passo 2: Configurazione del Progetto
Vercel dovrebbe rilevare automaticamente:
- **Framework Preset:** Next.js
- **Root Directory:** `./`
- **Build Command:** `pnpm build` (o `npm run build`)
- **Output Directory:** `.next`
- **Install Command:** `pnpm install` (o `npm install`)

### Passo 3: Variabili d'Ambiente
Aggiungi queste variabili nella sezione **"Environment Variables"**:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=YOUR_PIXEL_ID
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/YOUR_USERNAME/YOUR_EVENT_TYPE
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

**IMPORTANTE:** 
- Aggiungi le variabili per tutti gli ambienti (Production, Preview, Development)
- Sostituisci i valori placeholder con i tuoi valori reali

### Passo 4: Deploy
1. Clicca su **"Deploy"**
2. Attendi che il build completi (circa 2-3 minuti)
3. Una volta completato, avrai un URL tipo: `https://mattia-website.vercel.app`

### Passo 5: Dominio Personalizzato (Opzionale)
1. Vai su **Settings** → **Domains**
2. Aggiungi il tuo dominio (es: `www.mattiaorlando.com`)
3. Segui le istruzioni per configurare i DNS

---

## Metodo 2: Deploy tramite CLI Vercel

### Installazione CLI
```bash
npm i -g vercel
# oppure
pnpm add -g vercel
```

### Login
```bash
vercel login
```

### Deploy
```bash
cd "C:\Users\luca\Desktop\repo\Mattia sito"
vercel
```

Segui le istruzioni interattive:
- Link to existing project? **No** (prima volta)
- Project name: **mattia-website** (o quello che preferisci)
- Directory: **./**
- Override settings? **No**

### Aggiungi Variabili d'Ambiente
```bash
vercel env add RESEND_API_KEY
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_META_PIXEL_ID
vercel env add NEXT_PUBLIC_CALENDLY_URL
vercel env add NEXT_PUBLIC_SITE_URL
```

### Deploy Production
```bash
vercel --prod
```

---

## ✅ Checklist Post-Deploy

Dopo il deploy, verifica:

- [ ] Il sito è accessibile all'URL fornito
- [ ] La homepage carica correttamente
- [ ] Tutte le pagine sono accessibili (`/chi-sono`, `/servizi`, `/contatti`)
- [ ] Il form di contatto funziona (testa l'invio di una email)
- [ ] Calendly si apre correttamente
- [ ] Le immagini caricano (se hai aggiunto l'immagine profilo)
- [ ] Google Analytics traccia le visite (verifica nella dashboard GA)
- [ ] Meta Pixel traccia gli eventi (verifica nella dashboard Meta)

---

## 🔧 Troubleshooting

### Build Fallisce
- Verifica che tutte le dipendenze siano nel `package.json`
- Controlla i log di build su Vercel per errori specifici

### Form Email Non Funziona
- Verifica che `RESEND_API_KEY` sia configurata correttamente
- Controlla che l'indirizzo email in `app/api/contact/route.ts` sia verificato su Resend
- Verifica i log di Vercel per errori API

### Immagini Non Caricano
- Assicurati che le immagini siano in `public/assets/`
- Verifica i percorsi delle immagini nei componenti

### Errori 404
- Verifica che tutte le pagine siano nella cartella `app/`
- Controlla che i nomi dei file siano corretti

---

## 📞 Supporto

Per problemi con Vercel:
- Dashboard: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- Documentazione: [https://vercel.com/docs](https://vercel.com/docs)

Per problemi con il codice:
- Controlla i log su Vercel → Project → Deployments → Logs

