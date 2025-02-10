"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import Image from 'next/image'
import aromatic from "../images/aromatic.webp"
import oriental from "../images/oriental.webp"
import clasmassage from "../images/clasmassage.webp"
import facial from "../images/masagefaci.webp"

const images=[aromatic, oriental, clasmassage, facial,]
const headers=["Aromatherapy Massage","Oriental Massage","Classic Massage","FacialSpecai Massage"]

const MassageCarousel = () => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align: "start",
        startIndex: 0,
      });
    
      const [selectedIndex, setSelectedIndex] = useState(0);
    
      const scrollPrev = useCallback(() => {
        if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
      }, [emblaApi]);
    
      const scrollNext = useCallback(() => {
        if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
      }, [emblaApi]);
    
      useEffect(() => {
        if (emblaApi) {
          emblaApi.on("select", () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
          });
          setSelectedIndex(emblaApi.selectedScrollSnap());
        }
      }, [emblaApi]);

  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[50px] my-[100px]'>
      <div className='flex flex-col items-start justify-start gap-[35px] text-black font-jost ml-[11.6%]'>
        <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>RELAX AND FORGET</span>
        <h3 className='text-[48px] font-marcellus font-normal leading-[57.6px]'>Massage Options</h3>
        <p className='text-[16px] leading-[24px] font-normal w-[52%]'>Lorem ipsum dolor sit amet consectetur. Consectetur lorem nibh ultrices quis sit. Ac amet mollis erat enim. Velit venenatis lectus orci viverra dis turpis. Tempor vehicula risus massa sed vestibulum dui nulla vulputate.</p>
      </div>

      <div className="flex flex-col w-[100%] justify-end items-end">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full lg:w-[88.4%] h-full flex-col justify-end items-end" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative flex w-full md:w-[calc(92%-1rem)] mx-2 flex-[0_0_auto] border-[2px] border-gray-100 shadow-lg lg:w-[calc(30%-1.2rem)] xl:w-[calc(29%-1.2rem)] xl:mr-[10px] " key={index}>
              <Image
                src={image.src}
                layout="contain"
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex h-[383px] md:h-auto lg:h-[540px] xl:h-auto  w-full"
              />
              <div className="absolute inset-0 text-center top-[9%]  w-full items-center justify-center">
                <div className="w-[100%] flex flex-col items-center justify-center text-center">
                <p className="text-[30px] -tracking-[0.66px] font-normal font-marcellus text-white w-[43%] leading-[36px] mb-[23px]">{headers[index]}</p>
                <div className="flex w-[50%] h-[1px] bg-white"></div>
                <p className="text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px] font-jost text-white mt-[10px]">DURATION: 60 MIN</p>
                </div>
              </div>
            
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex items-start justify-start w-[88.4%] mt-[50px] relative">
  {images.map((_, i) => (
    <div
      key={i}
      className={`transition-all mt-[20px] lg:mt-[30px] w-[25%] h-[2px] bg-[#24292C] rounded-full ${
        selectedIndex === i ? "p-[2px]" : "bg-[#848383] "
      }`}
      onClick={() => handleJump(i)}
    />
  ))}
</div>
        </div>
    </div>
  )
}

export default MassageCarousel
