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
  title: "Varullo | Marketing Digital Sin Bullshit",
  description: "Convertimos el caos en un sistema que se entiende. Agencia de marketing y consultoría digital española. Estrategia, diseño y resultados medibles.",
  keywords: ["marketing digital", "consultoría digital", "estrategia digital", "diseño web", "publicidad online", "Varullo", "agencias de marketing España"],
  authors: [{ name: "Varullo" }],
  openGraph: {
    title: "Varullo | Marketing Digital Sin Bullshit",
    description: "Convertimos el caos en un sistema que se entiende. Agencia de marketing y consultoría digital española.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
