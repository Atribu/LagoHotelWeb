import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./GeneralComponents/Header/Header";
import Footer from "./GeneralComponents/Footer/Footer";
import HeaderWhite from "./GeneralComponents/Header/HeaderWhite";
import BookNow from "./GeneralComponents/BookNow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <HeaderWhite/>
        <BookNow/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
