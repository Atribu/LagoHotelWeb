"use client"

import React, { useState, useRef, useEffect } from 'react'
import { usePathname } from "next/navigation"; // Sayfa değişimini takip etmek için
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from './Icons/Hamburger'
import KidIcon from "./Icons/KidIcon.png"
import Phone from './Icons/Phone'
import TripAdvisor from './Icons/SocialMedia/TripAdvisor'
import Google from './Icons/SocialMedia/Google'
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"
import logosvg from "./Icons/Asset2.svg"
import gradient4 from "./Icons/header.png"
import DownArrow from './Icons/DownArrow';
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null);
  const pathname = usePathname(); // Şu anki sayfanın yolunu al

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const [isRoomsOpen, setIsRoomsOpen] = useState(false);

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
    <div className="flex w-screen">
      <header className="absolute right-0 top-0 left-0 w-full z-[999] items-center justify-center">
        <div
          className="
            relative
            h-[144px]
            flex
            items-center
      
            to-transparent
            w-full
          "
        >
          <div className='absolute flex -top-[6px] w-full'>
            <Image src={gradient4} width={gradient4.width} height={gradient4.header} className='w-full  h-[144px] ' alt='header'/>
          </div>

          {!isMenuOpen && (
            <div className="flex items-center justify-center ml-[75%] sm:ml-[80%] md:ml-[4%] ">
              <button className="flex z-20 " onClick={toggleMenu}>
              <Hamburger width={30} height={30} color="white" className="object-contain" />
            </button>
            <div className="flex items-center justify-center h-full gap-[4px] ml-[15px] z-[20]">
            <span className="text-white text-[16px] font-medium leading-[125%] uppercase -tracking-[0.352px] font-jost capsizedText4">EN</span>
            <DownArrow className="flex" width={12} height={12} color="#ffffff"/>
          </div>
            </div>
          )}

            {/* EN bar */}
            

          {/* Ortadaki Logo */}
          <div className="absolute left-[20%] sm:left-[15%] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
           <Link className='w-full items-center justify-center flex' href="/">
           <Image 
              src={logosvg}
              alt="Logo"

              className="object-contain w-[30%] items-center justify-center"

            /></Link>
          </div>

          {/* Sağ Contact & Book Now */}
          <div className="ml-auto flex items-center justify-center space-x-[5px] mr-[4%] z-20 h-full">
            <Link 
              href="/connect"
              className="
              hidden lg:flex
                text-white
                text-[16px]
                font-medium
                leading-normal
                uppercase
                 underline
                underline-offset-[5px]
                decoration-solid
                px-[30px]
                pb-[15px]
                pt-[8px]
                font-jost
                h-[41px]
              "
            >
              Contact
            </Link>
            <button
              className="
                hidden 
                md:flex
                px-[35px]
                py-[17px]
                text-white
                text-[16px]
                font-medium
                leading-normal
                uppercase
                bg-transparent
                border
                border-white
                border-solid
                 h-[42px]
                 w-auto
                 items-center justify-center
                 font-jost
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
          className="relative inset-0 z-[9999] "
        />
      )}

      {/* Menü paneli => lighten blend mode */}
      <div
        ref={menuRef} // **Referans atadık**
        className={`
          fixed top-0 left-0
          w-full
          lg:w-[420px]
          h-[100vh]
          lg:h-[calc(100vh-84.2px)]
          lg:bg-[#1D1D1B] lg:    bg-opacity-50   
            bg-[rgba(29,29,27,0.85)] backdrop-blur-[10px]
          z-[9999]
          transform transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Menü kapatma butonu */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white text-3xl font-bold p-2 hover:text-gray-200 "
        >
          <div className='flex bg-black/50 items-center justify-center h-10 w-10 rounded-[4px] '>
          <div className='flex h-[2px] w-6 rotate-[-45deg] flex-shrink-0 bg-white'></div>
          <div className='flex absolute h-[2px] w-6 rotate-[45deg] flex-shrink-0 bg-white'></div>
          </div>
        </button>

        {/* MENÜ LİNKLERİ */}
        <nav className="mt-[21%] ml-7 px-4 w-full max-w-[392px] space-y-[22px] text-[18px] text-white font-jost uppercase">
          
          <Link href="/offers" className="block  font-normal leading-[26.667px] ">
            OFFERS
          </Link>
          <div className='relative'>
          <Link  onClick={() => setIsRoomsOpen(!isRoomsOpen)} href="/rooms" className="flex items-center font-normal leading-[26.667px] gap-[11.11px]">
            ACCOMODATION
            <IoMdArrowDropdown className={`w-4 h-4 transition-transform ${isRoomsOpen ? "rotate-180" : "rotate-0"}`} />
          </Link>

          <div  className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isRoomsOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          <div className="mt-2 space-y-2 pl-4 border-l border-white/30 font-jost">
            <Link href="/rooms/" className="block text-[14px] text-[#FBFBFB] leading-[29.639px] uppercase">Superior Room</Link>
            <Link href="/rooms/"  className="block text-[14px] text-[#FBFBFB] leading-[29.639px] uppercase">Family Room</Link>
            <Link href="/rooms/"  className="block text-[14px] text-[#FBFBFB] leading-[29.639px] uppercase">Swim-up Room</Link>
            <Link href="/rooms/subroom"  className="block text-[14px] text-[#FBFBFB] leading-[29.639px] uppercase">Family Swim-up Room</Link>
            <Link href="/rooms/"  className="block text-[14px] text-[#FBFBFB] leading-[29.639px] uppercase">Duplex Family Room</Link>
          </div>
          </div>

          </div>
          <Link href="/beachpools" className="block  font-normal leading-[26.667px]">
            BEACH & POOL
          </Link>
          <Link href="/restaurants" className="block font-normal leading-[26.667px]">
            RESTAURANTS
          </Link>
          <Link href="/barcafes" className="block font-normal leading-[26.667px]">
            BARS AND CAFÉS
          </Link>
          <Link href="/entertainment" className="block font-normal leading-[26.667px]">
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
          <Link href="/spawellness" className="block text-white  font-normal leading-normal">
            SPA & WELLNESS
          </Link>
          <Link href="/gallery" className="block text-white  font-normal leading-normal">
            GALLERY
          </Link>
          <Link href="/about" className="block text-white font-normal leading-normal">
            OUR HOTEL
          </Link>
        </nav>

        {/* TELEFON + BUTON ALANI */}
        <div className="ml-2 px-4 w-full max-w-[392px]  mt-[38%] flex flex-col items-center font-jost">
          <div className="flex items-center justify-center gap-[15px] text-white">
            <Phone className="flex" width={18} height={18} color="#ffffff"/>
            <span className="text-[15px] font-normal leading-[24px]">+90 123 459 67 89</span>
          </div>

          <Link
          href="/connect"
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
          </Link>

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
              <FaFacebookF className="w-6 h-6" color='#505050'/>
            </Link>
            <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <FaYoutube className="w-6 h-6" color='#505050'/>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="bg-white h-[42.412px] w-[42.412px] rounded-[4px] shadow-custom flex items-center justify-center"
            >
              <FaInstagram className="w-6 h-6" color='#505050'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
