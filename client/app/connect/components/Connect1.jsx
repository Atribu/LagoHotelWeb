import React from 'react'
import Image from "next/image"
import image1 from "../Image/HeaderPage.webp"
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

// Divider bileşeni: md ve üzeri ekranlarda görünür, responsive negatif margin ile sola kayar.
const Divider = () => (
  <div className='hidden md:flex items-center justify-start'>
    <div className='bg-black w-[1px] h-20 md:-ml-12 lg:-ml-16 xl:-ml-8 2xl:-ml-24 3xl:-ml-30' />
  </div>
);

// İletişim sütunu bileşeni: ikon, başlık ve açıklama alanını içerir.
const ContactColumn = ({ icon, title, children }) => (
  <div className='flex flex-col items-start gap-4 p-4'>
    <span className='flex flex-row items-center gap-2 font-marcellus text-[24px] leading-[32px] text-lagoBlack2'>
      {icon}
      {title}
    </span>
    <p className='text-left font-jost text-[18px] leading-[26px] tracking-[0.72px] underline underline-offset-4 text-lagoGray'>
      {children}
    </p>
  </div>
);

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-[4%] w-full'>
      {/* Resim ve overlay container */}
      <div className='relative flex w-full max-h-[80vh]'>
        <Image 
          src={image1} 
          width={1000} 
          height={3000} 
          className='w-full h-full object-cover' 
          alt="Header Image" 
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center gap-4 md:gap-[11%]'>
          <h1 className="font-jost text-[12px] md:text-[15px] font-medium leading-[14px] tracking-[0.6px] uppercase text-white">
            LAGO HOTEL CONTACT
          </h1>
          <p className="font-jost text-[40px] md:text-[80px] font-medium leading-[48px] md:leading-[64px] tracking-[-1.6px] text-white">
            Connect with Us
          </p>
        </div>
      </div>
      
      {/* İletişim bilgileri: Özel grid yapısı */}
      <div className='grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center w-full md:w-7/12 mt-8 gap-y-8 md:gap-x-8'>
        
        <ContactColumn icon={<CiLocationOn />} title="Our Address:">
          Sorgun, Titreyengöl Mevkii <br /> 07600 Manavgat/Antalya
        </ContactColumn>
        
        <Divider />
        
        <ContactColumn icon={<FiPhone />} title="Phone Number:">
          +90 242 756 99 00<br />+90 242 524 57 87
        </ContactColumn>
        
        <Divider />
        
        <ContactColumn icon={<CiLocationOn />} title="Email Address:">
          sales@lagohotel.com<br />info@lagohotel.com
        </ContactColumn>
      </div>
    </div>
  )
}

export default Page
