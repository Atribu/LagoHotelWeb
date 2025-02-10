"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from 'next/image'
import Link from "next/link";

const OtherOptions4 = ({span,header,text, images}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  return (
    <div className='flex w-screen h-auto items-center justify-center mb-[100px]'>
      <div className='flex flex-col w-[76.8%] items-start justify-center gap-[50px]'>
        <div className='flex flex-col items-start justify-center w-[65.5%] text-black gap-[35px]'>
            <span className='text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px] font-jost'>{span}</span>
            <h2 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>{header}</h2>
            <p className="text-[16px] font-normal leading-[24px] font-jost">{text}</p>
        </div>

{/* embla carousel */}
<div className="overflow-hidden w-full" ref={emblaRef}>
      <div className="flex ">
        {images.map((room) => (
          <div
            key={room.id}
            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] xl:flex-[0_0_23.5%] min-w-0 mr-[1.5%]"
          >
            <div className="flex flex-col w-full items-start text-start justify-center gap-[15px] font-jost text-black ">
              <Image src={room.img} alt={room.title} width={room.img.width} height={room.img.height}  />
              <span className="text-[12px] font-medium leading-normal tracking-[0.48px] uppercase">
                {room.description}
              </span>
              <h3 className="text-[26px] leading-normal font-normal font-marcellus">{room.title}</h3>
             
              <p className="text-[14px] leading-normal font-normal w-[98%]">
               {room.text}
              </p>
              <Link href={room.link} className="flex text-lagoBrown font-marcellus leading-[30px] uppercase font-normal text-[14px] text-start hover:bg-black hover:text-white underline">
                DISCOVER MORE
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

export default OtherOptions4
