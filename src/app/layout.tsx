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
  title: {
    default: "MIS ENERGIE 34 - Plombier, Chauffagiste, Climatisation Montpellier",
    template: "%s | MIS ENERGIE 34"
  },
  description: "Plombier professionnel à Montpellier et dans l'Hérault. Installation, réparation, dépannage 24h/24. Chauffage, climatisation, plomberie. Devis gratuit.",
  keywords: [
    "plombier Montpellier",
    "chauffagiste Hérault", 
    "climatisation 34",
    "dépannage plomberie",
    "installation chauffage",
    "débouchage canalisation",
    "plombier urgence",
    "chauffagiste certifié",
    "climatisation pompe à chaleur"
  ],
  authors: [{ name: "MIS ENERGIE 34" }],
  creator: "MIS ENERGIE 34",
  publisher: "MIS ENERGIE 34",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.msienergie34.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.msienergie34.fr',
    title: 'MIS ENERGIE 34 - Plombier, Chauffagiste, Climatisation Montpellier',
    description: 'Plombier professionnel à Montpellier et dans l\'Hérault. Installation, réparation, dépannage 24h/24. Chauffage, climatisation, plomberie. Devis gratuit.',
    siteName: 'MIS ENERGIE 34',
    images: [
      {
        url: '/logo2.png',
        width: 1200,
        height: 630,
        alt: 'MIS ENERGIE 34 - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MIS ENERGIE 34 - Plombier, Chauffagiste, Climatisation Montpellier',
    description: 'Plombier professionnel à Montpellier et dans l\'Hérault. Installation, réparation, dépannage 24h/24. Chauffage, climatisation, plomberie. Devis gratuit.',
    images: ['/logo2.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
