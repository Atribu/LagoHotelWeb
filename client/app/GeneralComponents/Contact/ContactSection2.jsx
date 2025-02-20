"use client"
import React,{ useEffect, useRef } from "react";
import Image from 'next/image'
import minigallery from "./images/minigallery2.png"
import Link from 'next/link'
import { PiInstagramLogoLight,PiMetaLogoLight,PiFacebookLogoLight, PiYoutubeLogoLight} from "react-icons/pi";

const ContactDetails = () => {

  return (
    <div className="flex flex-col justify-center items-center w-[40%] ">
      <div className='flex flex-col w-[313px] items-start justify-center gap-[30px]'>
      <span className="font-jost text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
        CONTACT US FOR MORE
      </span>
      <h2 className="font-marcellus text-[48px] leading-[57.6px] capsizedText2">@LagoHotels</h2>
      <p className="font-jost text-[16px] leading-[24px]  underline-offset-2 flex flex-col gap-2">
        <span>Titreyengol, Sorgun / Manavgat/ Antalya / TR</span>
        <span >Phone: <Link  href="" className='underline'>+90 242 756 99 00</Link></span>
        <span >Call Center: <Link href="" className='underline'>+90 242 524 57 87</Link></span>
        <span>Email: <Link  href="" className='underline'>sales@lagohotel.com</Link></span>
      </p>
      <div className="flex gap-[20px] whitespace-nowrap">
        <div className="flex items-center justify-center gap-[18px]">
          <PiInstagramLogoLight size={28} />
          {/* <PiMetaLogoLight size={30} /> */}
          <PiFacebookLogoLight size={28} />
          <PiYoutubeLogoLight size={28} />
        </div>
        <div className="flex bg-black h-[20px] w-[1px] self-center"></div>
        <span className="text-lagoBrown font-marcellus underline underline-offset-[6px] text-[16px] font-normal leading-[30px] uppercase">
          BOOK NOW
        </span>
      </div>
      </div>
    </div>
  )
}

const GallerySection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1; // Daha yavaş kayma için 1px
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollContainer.scrollTop += scrollSpeed;

        // Eğer en sona geldiyse, biraz bekleyip başa dön
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          setTimeout(() => {
            scrollContainer.scrollTop = 0; // Baştan başlat (ani sıçrama yapmadan)
          }, 500); // 0.5 saniye bekleyip baştan başlat
        }
      }, 30); // Daha smooth kayma için 30ms
    };

    startScrolling();

    return () => clearInterval(scrollInterval); // Component unmount olursa temizle
  }, []);

  return (
    <div className="flex justify-end items-center w-[60%] ">
      <div style={{ scrollBehavior: "smooth" }} ref={scrollRef} className="w-full h-[27vh] min-h-[322px] max-w-[789px]  overflow-auto hover:overflow-scroll custom-scroll scroll-smooth mr-[4%]">
      <div className="flex flex-col">
          {[...Array(2)].flatMap((_, loopIndex) =>
            [minigallery].map((img, index) => (
              <Image
                key={`${loopIndex}-${index}`}
                src={img}
                height={img.height}
                width={img.width}
                alt="Minigallery"
                loading="lazy"
                className="xl:w-[100%] h-auto overflow-hidden"
              />
            ))
          )}
        </div>
       
      </div>
    </div>
  )
}

const ContactSection2 = () => {
  return (
    <div className="flex w-screen  max-w-[1440px] mb-[100px] justify-start ">
      <div className="flex justify-center items-center border-[1px] border-lagoBlack 2xl:min-w-[1401px] h-[34vh] min-h-[422px] ">
        <ContactDetails />
        <GallerySection />
      </div>
    </div>
  )
}

export default ContactSection2
