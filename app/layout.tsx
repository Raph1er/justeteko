// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ServiceWorkerRegister from './sw-register'; // 👈 on importe

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} - ${process.env.NEXT_PUBLIC_SITE_DESCRIPTION}`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#facc15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/images/favicon.svg" />
      </head>
      <body className={inter.className}>
        <ServiceWorkerRegister /> {/* 👈 important */}
        {children}
      </body>
    </html>
  );
}