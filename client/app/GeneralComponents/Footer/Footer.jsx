"use client"
import React from "react"
import Image from "next/image"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"
import Logo from "../Header/Icons/Logo.png"
import Link from "next/link"
import logosvg from "../Header/Icons/Asset2.svg"
import Phone from "../Header/Icons/Phone"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#1A1A16] text-gray-200 text-sm justify-center items-center z-10">
      <div className="flex w-[91.1%] max-w-[1440px] items-start justify-center text-start gap-[4%] mt-[60px]">
        <div className="flex w-[66%] items-start text-start">
          {/* SOL: 4 SÜTUN (QUICK MENU, TERMS, COMPANY, CONTACT) */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* QUICK MENU */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
                QUICK MENU
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">Service</li>
                <li className="hover:text-white cursor-pointer">Portfolio</li>
                <li className="hover:text-white cursor-pointer">Product</li>
                <li className="hover:text-white cursor-pointer"><Link href="/news">Blog</Link></li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
              </ul>
            </div>

            {/* TERM & CONDITIONS */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
                TERM & CONDITIONS
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Bookings & Cancellations</li>
                <li className="hover:text-white cursor-pointer">Website Terms</li>
                <li  className="hover:text-white cursor-pointer">Product</li>
                <li className="hover:text-white cursor-pointer"><Link href="/news">Blog</Link></li>
                <li className="hover:text-white cursor-pointer">FAQ</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
                COMPANY
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-6">
                <li className="hover:text-white cursor-pointer">About Company</li>
                <li className="hover:text-white cursor-pointer"><Link href="/connect">Contact</Link></li>
                <li className="hover:text-white cursor-pointer">Terms & Condition</li>
                <li className="hover:text-white cursor-pointer">Help Center</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="flex flex-col items-start justify-start text-start gap-[40px]">
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase ">
              <Link href="/connect">Contact</Link>
              </h4>
              <div className="flex flex-col gap-[24px]">
              <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] ">
                Phone: <span className="underline">+90 242 756 99 00</span>
              </p>
              <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px]">
                Email: info@lagohotels.com
              </p>
              <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px]">
                Address: Titreyengöl
                <br />
                Mevkii Sorgun Manavgat/
                <br />
                Antalya / TR
              </p>
              </div>
            </div>
          </div>

          
        </div>

        <div className="w-[30%] flex flex-col items-start border-l border-gray-400 pl-16 gap-[40px]">
            {/* Logo */}
            <div className="mb-10">
              <Image
                src={Logo}
                alt="Lago Logo"
                width={69}
                height={51}
                className="object-contain"
              />
            </div>

            {/* Sosyal ikonlar */}
            <div className="grid grid-cols-2 lg:flex items-center gap-[32px]">
              <FaInstagram className="w-[30px] h-[32px]" />
              <FaLinkedinIn className="w-[30px] h-[32px]" />
              <FaFacebook className="w-[30px] h-[32px]" />
              <FaTwitter className="w-[30px] h-[32px]" />
            </div>

            {/* Alt linkler */}
            <div className="flex flex-col lg:flex-row items-center gap-6 whitespace-nowrap text-lagoGray2">
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Privacy Notice</a>
              <a href="#" className="hover:underline">Sustainability</a>
            </div>
          </div>        
      </div>

      {/* tablet */}
      <div className="hidden  w-screen bg-lagoBlack h-auto py-[47px] gap-[50px] items-center justify-center">
         <div className="flex w-[92%] gap-[97px] items-center justify-between">
           <Image 
              src={logosvg}
              alt="Logo"
              width={114}
              height={83}
              className="object-contain items-center justify-center"

            />

            <div className="grid grid-cols-2 gap-[25px] items-start justify-start font-jost text-[12px] font-normal leading-[24px]">
              <div className="flex gap-[10px] items-center justify-center">
                <Phone className="flex" width={25} height={25} color="#A6A6A6"/>
                <div className="flex flex-col gap-[7px] items-start justify-start">
                  <span className="text-[#A6A6A6] ">Hotel Line</span>
                  <div className="flex h-[1px] w-full bg-[#D9D9D9]/50"></div>
                  <p className="text-[#FBFBFB]">+ 90 242 756 99 00</p>
                </div>
              </div>
            </div>
      </div>
      </div>




      {/* Alt ince çizgi */}
      <div className="w-full h-[1px] bg-gray-400 mt-[60px]" />
      <div className="flex text-center items-center justify-center text-[15px] font-normal leading-[26px]">
            Powered by DGTLFACE
        </div>
    </footer>
  )
}
