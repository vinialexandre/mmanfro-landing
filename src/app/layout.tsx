import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Milena Manfro - Psicóloga | Curso de Comunicação Eficaz",
  description:
    "Transforme sua comunicação com a psicóloga Milena Manfro. Aprenda técnicas comprovadas para se expressar com clareza, confiança e autenticidade.",
  keywords: [
    "psicóloga",
    "comunicação eficaz",
    "curso online",
    "desenvolvimento pessoal",
    "Milena Manfro",
    "relacionamentos",
    "comunicação não-violenta",
    "inteligência emocional",
  ],
  authors: [{ name: "Milena Manfro" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Milena Manfro - Psicóloga | Curso de Comunicação Eficaz",
    description: "Transforme sua comunicação com técnicas comprovadas da psicologia",
    url: baseUrl,
    siteName: "Milena Manfro",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/mm.png",
        width: 1200,
        height: 630,
        alt: "Milena Manfro - Psicóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milena Manfro - Psicóloga | Curso de Comunicação Eficaz",
    description: "Transforme sua comunicação com técnicas comprovadas da psicologia",
    images: ["/images/mm.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Milena Manfro",
    jobTitle: "Psicóloga",
    url: baseUrl,
    sameAs: ["https://www.instagram.com/milenamanfropsi/"],
    image: `${baseUrl}/images/mm.png`,
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Milena Manfro",
    url: baseUrl,
    inLanguage: "pt-BR",
  };

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        {children}
      </body>
    </html>
  );
}
