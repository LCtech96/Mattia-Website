import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattia Orlando - Consulente Patrimoniale | Pianificazione e Protezione del Tuo Futuro",
  description: "Consulente patrimoniale dedicato. Pianificazione patrimoniale, protezione assicurativa, investimenti e strategia successoria. Affiancamento strategico per proteggere e far crescere il tuo futuro.",
  keywords: "consulente patrimoniale, pianificazione patrimoniale, investimenti, protezione assicurativa, successione, Mattia Orlando",
  authors: [{ name: "Mattia Orlando" }],
  openGraph: {
    title: "Mattia Orlando - Consulente Patrimoniale",
    description: "Il tuo consulente dedicato per la pianificazione e protezione del patrimonio",
    url: "https://www.mattiaorlando.com",
    siteName: "Mattia Orlando",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattia Orlando - Consulente Patrimoniale",
    description: "Il tuo consulente dedicato per la pianificazione e protezione del patrimonio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mattia Orlando",
              jobTitle: "Consulente Patrimoniale",
              email: "info@mattiaorlando.com",
              url: "https://www.mattiaorlando.com",
              sameAs: [],
              worksFor: {
                "@type": "Organization",
                name: "Gruppo Vitanuova",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Consulenza Patrimoniale Mattia Orlando",
              provider: {
                "@type": "Person",
                name: "Mattia Orlando",
              },
              areaServed: "IT",
              serviceType: "Pianificazione Patrimoniale",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

