import '@/app/globals.css';
import { Silkscreen, Pixelify_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';
import AuthProvider from '@/components/providers/AuthProvider';

const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-title',
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-text',
});

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-text antialiased',
          silkscreen.variable,
          pixelifySans.variable,
        )}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
