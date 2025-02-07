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
    <div className='flex flex-col w-screen items-center justify-center my-[75px] gap-[50px]'>
      <div className='flex flex-col w-[76.8%] items-center justify-center '>
        <div className='flex flex-col gap-[17px] items-center justify-center font-jost text-black'>
            <PandaSvg className="flex" width={99} height={54}/>
           <div className='flex flex-col gap-[35px] items-center justify-center text-center'>
           <span className='text-[18px] font-medium uppercase leading-[26px] tracking-[0.72px]'>Welcome to LAGO Kids Club</span>
            <h2  className='text-[48px] font-normal leading-[26px] font-marcellus'>Where Fun and Education Meet</h2>
            <p className='text-[16px] font-normal leading-[26px]'>LAGO Kids Club, her yaş grubundan çocuğa hitap eden eğitici ve eğlenceli aktiviteler sunar. <br></br> Çocuğunuzun yaratıcılığını geliştirecek ve hayallerini gerçekleştirecek bir ortam hazırladık.</p>
           </div>
        </div>
      </div>


           <div className="flex flex-col w-[100%] justify-end items-end">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full lg:w-11/12 h-full flex-col justify-end items-end" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="relative flex w-full md:w-[calc(92%-1rem)] mx-2 flex-[0_0_auto] border-[2px] border-gray-100 shadow-lg lg:w-[calc(30%-1.2rem)] xl:w-[calc(26%-1.2rem)] xl:mx-3 " key={index}>
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
                <div className="w-[100%] flex items-center justify-center text-center">
                <text className="text-[40px] -tracking-[0.88px] font-normal font-marcellus text-white w-[50%]">{headers[index]}</text>
                </div>
              </div>
            
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex items-end justify-end gap-1 w-full mt-[50px] relative">
  {images.map((_, i) => (
    <div
      key={i}
      className={`transition-all mt-[20px] lg:mt-[30px] w-[10%] h-[2px] bg-[#24292C] rounded-full ${
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
    className="absolute -bottom-4 transition-all duration-300"
    style={{
      left: `calc(${selectedIndex * 10}% + 7%)`, // Aktif index'e göre sola kaydır
    }}
  />
</div>
        </div>
    </div>
  )
}

export default KidsclubCarousel
