import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "./GeneralComponents/Header/Header";
import Footer from "./GeneralComponents/Footer/Footer";
import HeaderWhite from "./GeneralComponents/Header/HeaderWhite";
import BookNow from "./GeneralComponents/BookNow";
import CookiePopup from "./GeneralComponents/CookiePopup";
import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lago Hotel",
  description: "Lago Hotel Antalya",
  icons: {
    icon: '/favicon.ico',
   
  },
};



export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider>
        <Header />
        <HeaderWhite/>
       
        {children}
        
        <BookNow/>
        <CookiePopup/>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
