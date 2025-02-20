"use client"
import React from "react"
import Image from "next/image"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"
import Logo from "../Header/Icons/Logo.png"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-[#1A1A16] text-gray-200 text-sm justify-center items-center z-10">
      <div className="flex w-[91.1%] max-w-[1440px] items-start justify-center text-start gap-[4%] mt-[60px]">
        
        <div className="flex w-[66%] items-start text-start">
          {/* SOL: 4 SÜTUN (QUICK MENU, TERMS, COMPANY, CONTACT) */}
          <div className="w-full grid grid-cols-4 gap-8">
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
            <div className="flex items-center gap-[32px]">
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
      {/* Alt ince çizgi */}
      <div className="w-full h-[1px] bg-gray-400 mt-[60px]" />
      <div className="flex text-center items-center justify-center text-[15px] font-normal leading-[26px]">
            Powered by DGTLFACE
        </div>
    </footer>
  )
}
