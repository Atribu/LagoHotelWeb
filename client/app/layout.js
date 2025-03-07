import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./GeneralComponents/Header/Header";
import Footer from "./GeneralComponents/Footer/Footer";
import HeaderWhite from "./GeneralComponents/Header/HeaderWhite";
import BookNow from "./GeneralComponents/BookNow";
import CookiePopup from "./GeneralComponents/CookiePopup";

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
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <meta name="theme-color" content="#FBFBFBCC" />
        <Header />
        <HeaderWhite/>
       
        {children}
        <BookNow/>
        <CookiePopup/>
        <Footer />
      </body>
    </html>
  );
}
