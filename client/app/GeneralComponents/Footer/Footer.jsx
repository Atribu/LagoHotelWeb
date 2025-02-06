"use client"
import React from "react"
import Image from "next/image"
import { FaInstagram, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa"
import Logo from "../Header/Icons/Logo.png"

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A16] text-gray-200 text-sm py-16 flex justify-center">
      <div className="w-full px-44">
        <div className="grid grid-cols-5 gap-12">
          {/* SOL: 4 SÜTUN (QUICK MENU, TERMS, COMPANY, CONTACT) */}
          <div className="col-span-4 grid grid-cols-4 gap-8">
            {/* QUICK MENU */}
            <div>
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase mb-7">
                QUICK MENU
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-4">
                <li>Home</li>
                <li>Service</li>
                <li>Portfolio</li>
                <li>Product</li>
                <li>Blog</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* TERM & CONDITIONS */}
            <div>
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase mb-7">
                TERM & CONDITIONS
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-4">
                <li>Privacy Policy</li>
                <li>Bookings & Cancellations</li>
                <li>Website Terms</li>
                <li>Product</li>
                <li>Blog</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase mb-7">
                COMPANY
              </h4>
              <ul className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] space-y-4">
                <li>About Company</li>
                <li>Contact</li>
                <li>Terms & Condition</li>
                <li>Privacy & Policy</li>
                <li>Help Center</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-[15px] text-white font-marcellus font-normal leading-[26px] tracking-[0.6px] uppercase mb-7">
                CONTACT
              </h4>
              <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] mb-4">
                Phone: +90 242 756 99 00
              </p>
              <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] mb-4">
                Email: info@lagohotels.com
              </p>
              <p className="text-lagoGray2 font-jost text-[16px] font-normal leading-[20px] mb-4">
                Address: Titreyengöl
                <br />
                Mevkii Sorgun Manavgat/
                <br />
                Antalya / TR
              </p>
            </div>
          </div>

          {/* SAĞ: LOGO + SOSYAL İKONLAR + LİNKLER */}
          {/* Burada border-l => dikey çizgi */}
          <div className="col-span-1 h-48 mt-4 flex flex-col items-start border-l border-gray-400 pl-6">
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
            <div className="flex items-center gap-7 mb-4">
              <FaInstagram className="w-[30px] h-[32px]" />
              <FaLinkedinIn className="w-[30px] h-[32px]" />
              <FaFacebook className="w-[30px] h-[32px]" />
              <FaTwitter className="w-[30px] h-[32px]" />
            </div>

            {/* Alt linkler */}
            <div className="flex items-center gap-6 whitespace-nowrap mt-6 text-lagoGray2">
              <a href="#" className="hover:underline">Terms of Use</a>
              <a href="#" className="hover:underline">Privacy Notice</a>
              <a href="#" className="hover:underline">Sustainability</a>
            </div>
          </div>
        </div>

        {/* Alt ince çizgi */}
        <div className="w-full h-[1px] bg-gray-400 mt-6" />
        <div className="flex text-center items-center justify-center mt-2">
            powerd by ecemon
        </div>
      </div>
    </footer>
  )
}
