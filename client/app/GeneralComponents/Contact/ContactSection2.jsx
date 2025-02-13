import React from 'react'
import InstagramSvg from './icons/InstagramSvg'
import FacebookSvg from './icons/FacebookSvg'
import YoutubeSvg from './icons/YoutubeSvg'
import Image from "next/image"
import minigallery from "./images/minigallery.webp"

const ContactSection2 = () => {
  return (
    <div className='flex w-full mt-[7%] h-[50vh]  mb-[7%] max-w-[1444px]'>
      <div className='flex w-11/12 flex-row justify-center items-center border-[1px] border-black'>
        <div className='flex flex-col justify-center items-center w-5/12 ml-[4%] gap-5'>
          <span className='font-jost ml-[2%] w-7/12 text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase self-center'>
            CONTACT US FOR MORE
          </span>
          <h2 className='font-marcellus text-[48px] leading-[57.6px] mr-[5%]'>@LagoHotels</h2>
          <p className='font-jost text-[16px] leading-[24px] underline underline-offset-2 flex flex-col gap-2'>
            <span>Titreyengol, Sorgun / Manavgat/ Antalya / TR</span>
            <span>Phone: +90 242 756 99 00</span>
            <span>Call Center: +90 242 524 57 87</span>
            <span>Email: sales@lagohotel.com</span>
          </p>
          <div className='flex w-8/12 ml-[7%] gap-[20px] whitespace-nowrap'>
            <div className='flex items-center justify-center gap-[18px]'>
              <InstagramSvg className="flex" width={31} height={31} />
              <FacebookSvg className="flex" width={30} height={30} />
              <YoutubeSvg className="flex" width={31} height={31} />
            </div>
            <div className='flex bg-black h-[20px] w-[1px] self-center'></div>
            <span className='text-lagoBrown underline underline-offset-4 text-[16px] font-normal leading-[30px] uppercase'>BOOK NOW</span>
          </div>
        </div>
        <div className='flex justify-end items-end'>
          {/* Sabit container, 300px yüksekliğinde, içinde dikey scroll aktif */}
          <div className='w-9/12 h-[400px] overflow-y-auto scroll-smooth mr-[4%]'>
            {/* Resmin yüksekliğini container yüksekliğinden büyük veriyoruz */}
            <Image src={minigallery} height={700} width={1200} alt="Minigallery" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection2
