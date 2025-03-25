import '@/app/globals.css';
import { Silkscreen, Pixelify_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';
import metadataConfig from '@/config/metadata';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-title',
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-text',
});

export const metadata = metadataConfig;

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-text antialiased flex flex-col',
          silkscreen.variable,
          pixelifySans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
