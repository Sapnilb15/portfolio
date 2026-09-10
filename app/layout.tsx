import type { Metadata } from 'next';
import { Geist, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = Geist({ variable: '--font-sans', subsets: ['latin'] });
const display = Instrument_Serif({ variable: '--font-display', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Sapnil Basnet — AI & Software Developer',
  description: 'Portfolio of Sapnil Basnet, a computer science student building thoughtful AI products and trustworthy software.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
