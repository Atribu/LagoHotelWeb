"use client"

import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from "next/navigation"; // Sayfa değişimini takip etmek için
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Icons/Logo.png'
import Hamburger from './Icons/Hamburger'
import KidIcon from "./Icons/KidIcon.png"
import Phone from './Icons/Phone'
import TripAdvisor from './Icons/SocialMedia/TripAdvisor'
import Google from './Icons/SocialMedia/Google'
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null);
  const pathname = usePathname(); // Şu anki sayfanın yolunu al

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    // **Sayfanın herhangi bir yerine tıklayınca kapansın**
    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
  
      if (isMenuOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isMenuOpen]);

    useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]); // pathname değiştiğinde sidebar kapanacak

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10">
        <div
          className="
            relative
            h-[144px]
            px-4
            flex
            items-center
            bg-gradient-to-b
            from-black/70
            to-transparent
          "
        >
          <div className="absolute inset-0 pointer-events-none" />

          {!isMenuOpen && (
            <button className="flex z-20 ml-5" onClick={toggleMenu}>
              <Hamburger width={40} height={40} color="white" className="object-contain" />
            </button>
          )}

          {/* Ortadaki Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image 
              src={Logo}
              alt="Logo"
              width={70}
              height={52}
              className="object-contain"
            />
          </div>

          {/* Sağ Contact & Book Now */}
          <div className="ml-auto flex items-center space-x-4 mr-5 z-20">
            <Link 
              href="/contact"
              className="
                text-white
                text-[16px]
                font-medium
                leading-normal
                uppercase
                hover:underline
                underline-offset-4
                decoration-solid
                px-[30px]
                py-[15px]
              "
            >
              Contact
            </Link>
            <button
              className="
                px-[30px]
                py-[15px]
                text-white
                text-[16px]
                font-medium
                leading-normal
                uppercase
                bg-transparent
                border
                border-white
                border-solid
              "
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Arkaya karartma (menü açıkken) */}
      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="relative inset-0 z-40 "
        />
      )}

      {/* Menü paneli => lighten blend mode */}
      <div
        ref={menuRef} // **Referans atadık**
        className={`
          absolute top-0 left-0
          w-[420px]
          h-[calc(100vh-16.6px)]
          bg-[#1D1D1B] bg-opacity-50      /* <-- EKLENDİ */
          z-50
          transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Menü kapatma butonu */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-3xl font-bold p-2 hover:text-gray-200"
        >
          x
        </button>

        {/* MENÜ LİNKLERİ */}
        <nav className="mt-[21%] ml-7 px-4 w-full max-w-[392px] space-y-[22px] text-[16px] text-white font-jost uppercase">
          <Link href="/offers" className="block  font-normal leading-[26.667px] ">
            OFFERS
          </Link>
          <Link href="/rooms" className="block  font-normal leading-[26.667px]">
            ACCOMODATION
          </Link>
          <Link href="/beachpool" className="block  font-normal leading-[26.667px]">
            BEACH & POOL
          </Link>
          <Link href="/restaurants" className="block font-normal leading-[26.667px]">
            RESTAURANTS
          </Link>
          <Link href="/bars" className="block font-normal leading-[26.667px]">
            BARS AND CAFÉS
          </Link>
          <Link href="/experiences" className="block font-normal leading-[26.667px]">
            EXPERIENCES
          </Link>
          <Link href="/kidsclub" className="font-normal leading-[26.667px] items-center gap-[6px] flex">
            KIDS CLUB
            <Image 
              src={KidIcon}
              alt="KidIcon"
              width={23}
              height={28}
            />
          </Link>
          <Link href="/spa" className="block text-white text-[20px] font-normal leading-normal">
            SPA & WELLNESS
          </Link>
          <Link href="/gallery" className="block text-white text-[20px] font-normal leading-normal">
            GALLERY
          </Link>
          <Link href="/hotel" className="block text-white text-[20px] font-normal leading-normal">
            OUR HOTEL
          </Link>
        </nav>

        {/* TELEFON + BUTON ALANI */}
        <div className="ml-2 px-4 w-full max-w-[392px]  mt-[38%] flex flex-col items-center font-jost">
          <div className="flex items-center justify-center gap-[15px] text-white">
            <Phone className="flex" width={18} height={18} />
            <span className="text-[15px] font-normal leading-[24px]">+90 123 459 67 89</span>
          </div>

          <button
            className="
             flex justify-center
             items-center
              mt-[20px]
              w-[253px]
              h-[42px]
              bg-[#181818]
              text-white
              uppercase
              text-center
              font-semibold
              hover:bg-gray-800
              leading-[24px]
              py-[15px]
              px-[19px]
            "
          >
            LET US CALL YOU
          </button>

          {/* Sosyal İkonlar */}
          <div className="flex items-center justify-center gap-4 mt-[18.79px]">
            <Link
              href="https://www.tripadvisor.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <TripAdvisor className="flex" width={34} height={34} />
            </Link>
            <Link
              href="https://www.google.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <Google className="flex" width={70} height={70} />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <FaFacebookF className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <FaYoutube className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
