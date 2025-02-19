"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import Link from "next/link";

const CuisinesCarousel = ({span,header,text, cuisines}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <div className='flex w-screen h-auto items-center justify-center  max-w-[1444px]'>
      <div className='flex flex-col w-[76.8%] items-start justify-center gap-[50px]'>
        <div className='flex flex-col items-start justify-center w-[65.5%] text-black gap-[35px]'>
            <span className='text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px] font-jost'>{span}</span>
            <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px] capsizedText2'>{header}</h2>
            <p className="text-[16px] font-normal leading-[24px] font-jost capsizedText4">{text}</p>
        </div>

{/* embla carousel */}
<div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex ">
        {cuisines.map((room) => (
          <div
            key={room.id}
            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_31%] xl:flex-[0_0_31.5%] min-w-0 mr-[1.8%]"
          >
            <div className="flex flex-col w-full items-start text-start justify-center gap-[25px] font-jost text-black ">
              <Image src={room.img} alt={room.title} width={room.img.width} height={room.img.height}  />
              <span className="text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase">
                {room.description}
              </span>
              <h3 className="text-[30px] leading-[40px] font-normal font-marcellus capsizedText3">{room.title}</h3>
             
              <p className="text-[14px] leading-[21px] font-normal capsizedText4">
               {room.text}
              </p>
              <Link href={room.link} className="flex text-lagoBrown leading-[30px] uppercase font-medium text-[14px] px-[28px] py-[14px] border border-lagoBrown text-center justify-center items-center hover:bg-black hover:text-white h-[41px]">
                EXPLORE MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

        

      </div>
    </div>
  )
}

export default CuisinesCarousel
