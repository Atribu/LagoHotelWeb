"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import PandaSvg from './PandaSvg'
import img1 from "../images/Flavours.webp"
import img2 from "../images/childactivite.webp"
import img3 from "../images/babyroom.webp"
import img5 from "../images/amphitheater.webp"
import img7 from "../images/childactivite-1.webp"
import img4 from "../images/ballpool.webp"
import img6 from "../images/Trambolin.webp"
import img8 from "../images/kids3.webp"
import img9 from "../images/gamerooms.webp"
import panda from "../images/Panda.png"
import Image from "next/image";

const images=[img1,img2,img3,img4,img5,img6,img7,img8,img9] 
const headers=["Lego Rooms","Children's Activities","Baby Rooms","Ball Pool","Children's Amphitheater","Trampoline","Playground","Playstation Rooms","Game Rooms"]

const KidsclubCarousel = () => {
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
    <div className='flex flex-col w-screen items-center justify-center gap-[30px]  lg:gap-[50px] pb-[30px] '>
      <div className='flex flex-col w-[87.79%] md:w-[91.4%] lg:w-[76.8%] items-center justify-center max-w-[1106px] '>
        <div className='flex flex-col gap-[17px] items-center justify-center font-jost text-black'>
            <PandaSvg className="flex" width={99} height={54}/>
           <div className='flex flex-col gap-[35px] items-center justify-center text-center'>
           <span className='text-[14px] lg:text-[18px] font-medium uppercase leading-[26px] tracking-[0.72px]'>Welcome to LAGO Kids Club</span>
            <h2  className='text-[28px] md:text-[32px] lg:text-[48px] font-normal leading-[26px] font-marcellus'>Where Fun and Education Meet</h2>
            <p className='text-[14px] lg:text-[16px] font-normal leading-[18px] lg:leading-[26px]'>LAGO Kids Club, her yaş grubundan çocuğa hitap eden eğitici ve eğlenceli aktiviteler sunar. <br></br> Çocuğunuzun yaratıcılığını geliştirecek ve hayallerini gerçekleştirecek bir ortam hazırladık.</p>
           </div>
        </div>
      </div>


      <div className="flex flex-col w-[93.89%] md:w-[95.7%] lg:w-[87.4%] ml-[6.1%] md:ml-[4.3%] lg:ml-[11.6%] justify-end items-end">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full h-full flex-col justify-end items-end" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative flex w-auto lg:h-[540px] flex-[0_0_auto] mx-[7px]  shadow-lg  " key={index}>
              <Image
                src={image.src}
                layout="contain"
                width={360}
                height={540}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex h-[383px] md:h-auto lg:h-[540px] xl:h-auto  w-full"
              />
              <div className="absolute inset-0 text-center top-[9%] w-full items-center justify-center">
                <div className="w-[100%] flex items-center justify-center text-center">
                <p className="text-[30px] lg:text-[40px] -tracking-[0.88px] font-normal font-marcellus text-white w-[50%]">{headers[index]}</p>
                </div>
              </div>
            
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex items-end justify-end w-full mt-[50px] relative">
  {images.map((_, i) => (
    <div
      key={i}
      className={`transition-all w-[11.11%] h-[2px] bg-[#24292C] rounded-full ${
        selectedIndex === i ? "p-[2px]" : "bg-[#848383] "
      }`}
      onClick={() => handleJump(i)}
    />
  ))}

  {/* Panda'nın index değiştikçe hareket etmesi */}
  <Image
    src={panda}
    alt="bamboo"
    width={81}
    height={110}
    className="absolute -bottom-4 transition-all duration-900"
    style={{
      left: `calc(${selectedIndex * 11}% + 0%)`, // Aktif index'e göre sola kaydır
    }}
  />
</div>
        </div>
    </div>
  )
}

export default KidsclubCarousel
