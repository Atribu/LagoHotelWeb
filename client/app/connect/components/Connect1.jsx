import React from 'react'
import Image from "next/image"
import image1 from "../Image/HeaderPage.webp"
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center mb-[4%]'>
      {/* Resmi ve overlay yazıları içeren container */}
      <div className='relative flex w-full'>
        <Image 
          src={image1} 
          width={1000} 
          height={1000} 
          className='w-full h-[540px]' 
          alt="Header Image" 
        />
        {/* Overlay container */}
        <div className='absolute inset-0 flex flex-col justify-center items-center gap-[11%]'>
          <h1 className="font-jost text-[15px] font-medium leading-[14px] tracking-[0.6px] uppercase text-white">
            LAGO HOTEL CONTACT
          </h1>
          <p className="font-jost text-[80px] font-medium leading-[64px] tracking-[-1.6px] text-white">
            Connect with Us
          </p>
        </div>
      </div>
      {/* İletişim bilgileri: 3 eşit sütun */}
      <div className='grid grid-cols-3 justify-center items-center w-8/12 mt-[4%]'>
        <div className='flex flex-col items-center border-r border-black pr-4 gap-4'>
          <span className='flex flex-row items-center gap-4 font-marcellus text-[24px] leading-[32px] text-lagoBlack2 self-start ml-[10%]'>
            <CiLocationOn />
            Our Address:
          </span>
          <p className='text-center font-jost text-[18px] leading-[26px] tracking-[0.72px] underline underline-offset-4 text-lagoGray'>
            Sorgun, Titreyengöl Mevkii <br /> 07600 Manavgat/Antalya
          </p>
        </div>
        <div className='flex flex-col items-center border-r border-black px-4 gap-4'>
          <span className="flex flex-row items-center gap-4 font-marcellus text-[24px] leading-[32px] text-lagoBlack2 self-start ml-[13%]">
            <FiPhone />
            Phone Number:
          </span>
          <p className='text-center font-jost text-[18px] leading-[26px] tracking-[0.72px] underline underline-offset-4 text-lagoGray'>
            +90 242 756 99 00<br />
            +90 242 524 57 87
          </p>
        </div>
        <div className='flex flex-col items-center px-4 gap-4'>
          <span className="flex flex-row items-center gap-4 font-marcellus text-[24px] leading-[32px] text-lagoBlack2 self-start ml-[13%]">
            <CiLocationOn />
            Email Address:
          </span>
          <p className='text-center font-jost text-[18px] leading-[26px] tracking-[0.72px] underline underline-offset-4 text-lagoGray'>
            sales@lagohotel.com<br />
            info@lagohotel.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
