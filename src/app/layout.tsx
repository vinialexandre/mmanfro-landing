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
  title: "Milena Manfro - Psicóloga | Curso de Comunicação Eficaz",
  description: "Transforme sua comunicação com a psicóloga Milena Manfro. Aprenda técnicas comprovadas para se expressar com clareza, confiança e autenticidade.",
  keywords: "psicóloga, comunicação, curso online, desenvolvimento pessoal, Milena Manfro",
  authors: [{ name: "Milena Manfro" }],
  openGraph: {
    title: "Milena Manfro - Psicóloga | Curso de Comunicação Eficaz",
    description: "Transforme sua comunicação com técnicas comprovadas da psicologia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
