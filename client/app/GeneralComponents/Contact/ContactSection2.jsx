import React from 'react'
import Image from 'next/image'
import InstagramSvg from './icons/InstagramSvg'
import FacebookSvg from './icons/FacebookSvg'
import YoutubeSvg from './icons/YoutubeSvg'
import minigallery from "./images/minigallery.webp"

const ContactDetails = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[40%] ">
      <div className='flex flex-col w-[313px] items-start justify-center gap-[35px]'>
      <span className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
        CONTACT US FOR MORE
      </span>
      <h2 className="font-marcellus text-[48px] leading-[57.6px] capsizedText2">@LagoHotels</h2>
      <p className="font-jost text-[16px] leading-[24px] underline underline-offset-2 flex flex-col gap-2">
        <span>Titreyengol, Sorgun / Manavgat/ Antalya / TR</span>
        <span>Phone: +90 242 756 99 00</span>
        <span>Call Center: +90 242 524 57 87</span>
        <span>Email: sales@lagohotel.com</span>
      </p>
      <div className="flex gap-[20px] whitespace-nowrap">
        <div className="flex items-center justify-center gap-[18px]">
          <InstagramSvg width={31} height={31} />
          <FacebookSvg width={30} height={30} />
          <YoutubeSvg width={31} height={31} />
        </div>
        <div className="flex bg-black h-[20px] w-[1px] self-center"></div>
        <span className="text-lagoBrown underline underline-offset-4 text-[16px] font-normal leading-[30px] uppercase">
          BOOK NOW
        </span>
      </div>
      </div>
    </div>
  )
}

const GallerySection = () => {
  return (
    <div className="flex justify-end items-center w-[60%]">
      <div className="w-full h-[27vh] min-h-[322px] max-w-[789px] overflow-y-auto scroll-smooth mr-[4%]">
        <Image src={minigallery} height={700} width={1200} alt="Minigallery" />
      </div>
    </div>
  )
}

const ContactSection2 = () => {
  return (
    <div className="flex w-screen  max-w-[1440px] mb-[100px] justify-start ">
      <div className="flex justify-center items-center border-[1px] border-lagoBlack min-w-[1401px] h-[35vh] min-h-[422px] ">
        <ContactDetails />
        <GallerySection />
      </div>
    </div>
  )
}

export default ContactSection2
