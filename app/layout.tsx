import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "@next/font/google";
import "./globals.css";
import {cn} from '@/lib/utils'

const fontSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],

})

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: 'CareSync',
  description: 'A Healthcare Management System',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
