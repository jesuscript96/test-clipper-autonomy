import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://varullo.com'),
  title: "Varullo | Consultoría de Sistemas de Marketing Sin Humo",
  description: "Convertimos el caos en un sistema que se entiende. Agencia de marketing y consultoría digital española. Ordenamos tu estrategia, medimos resultados y ejecutamos con precisión.",
  keywords: ["marketing digital", "consultoría digital", "estrategia digital", "sistemas de marketing", "ROI marketing", "Varullo", "agencia marketing Madrid"],
  authors: [{ name: "Varullo" }],
  openGraph: {
    title: "Varullo | Consultoría de Sistemas de Marketing Sin Humo",
    description: "Convertimos el caos en un sistema que se entiende. Orden, claridad y resultados reales para tu negocio.",
    type: "website",
    locale: "es_ES",
    siteName: "Varullo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Varullo - Ponemos Orden",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varullo | Consultoría de Sistemas de Marketing Sin Humo",
    description: "Convertimos el caos en un sistema que se entiende. Orden, claridad y resultados reales.",
    images: ["/og-image.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Varullo",
    "image": "https://varullo.com/logo.png",
    "@id": "https://varullo.com",
    "url": "https://varullo.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid",
      "postalCode": "",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.416775,
      "longitude": -3.703790
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://linkedin.com/company/varullo"
    ],
    "description": "Consultoría estratégica de marketing digital centrada en sistemas de ejecución y medición de ROI."
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
