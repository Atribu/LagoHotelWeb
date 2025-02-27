import React from 'react'
import Image from "next/image"
import image1 from "../Image/HeaderPage.webp"
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

// Divider bileşeni: md ve üzeri ekranlarda görünür, responsive negatif margin ile sola kayar.
const Divider = () => (
  <div className='hidden lg:flex items-center justify-start'>
    <div className='bg-black w-[1px] h-20 md:-ml-12 lg:-ml-16 xl:-ml-8 2xl:-ml-24 3xl:-ml-30' />
  </div>
);

// İletişim sütunu bileşeni: ikon, başlık ve açıklama alanını içerir.
const ContactColumn = ({ icon, title, children }) => (
  <div className='flex flex-col items-start gap-[17px] '>
    <span className='flex flex-row items-center gap-[17px] font-marcellus text-[24px] leading-[32px] text-lagoBlack -ml-[40px]'>
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
    <div className='flex flex-col justify-center items-center mb-[4%] w-screen'>
      {/* Resim ve overlay container */}
      <div className='relative flex w-full h-[60vh]'>
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
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] justify-center items-center w-[60%] sm:w-[75%] lg:w-7/12 mt-8 gap-y-8 lg:gap-x-8'>
        
        <ContactColumn icon={<CiLocationOn />} title="Our Address:">
       <span className='text-[18px] font-normal leading-[26px] tracking-[0.72px] text-[#4B4E4F]'>Sorgun, Titreyengöl Mevkii <br /> 07600 Manavgat/Antalya</span>
        </ContactColumn>
        
        <Divider />
        
        <ContactColumn icon={<FiPhone />} title="Phone Number:">
         <span className='text-[18px] font-normal leading-[26px] tracking-[0.72px] text-[#4B4E4F]'>
         +90 242 756 99 00<br />+90 242 524 57 87
         </span>
        </ContactColumn>
        
        <Divider />
        
        <ContactColumn icon={<CiLocationOn />} title="Email Address:">
         <span className='text-[18px] font-normal leading-[26px] tracking-[0.72px] text-[#4B4E4F]'> sales@lagohotel.com<br />info@lagohotel.com</span>
        </ContactColumn>
      </div>
    </div>
  )
}

export default Page
