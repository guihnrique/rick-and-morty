import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/header';
import { useRouter } from 'next/router';

export const metadata: Metadata = {
  title: 'Rick and Morty',
  description: 'Criado por Guilherme Ferreira',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[url('/images/background.gif')] bg-cover bg-center bg-fixed h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
