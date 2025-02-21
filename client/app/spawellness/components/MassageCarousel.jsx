"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from 'next/image'

const MassageCarousel = ({span,header,text,headers=[],images=[]}) => {
  const imagesCombined = [...images,...images]
    const [emblaRef, emblaApi] = useCarousel({
      align: "start",
      loop: true,
      containScroll: false,
      slidesToScroll: 0,
      skipSnaps: false,
      },
      [
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
          playDirection: "forward",
        }),
      ]
    );
    
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
            setSelectedIndex(emblaApi.selectedScrollSnap() % slidesOriginal.length); // Index düzeltildi
          });
          setSelectedIndex(emblaApi.selectedScrollSnap());
        }
      }, [emblaApi]);

  return (
    <div className='flex flex-col w-screen items-center justify-center gap-[50px] '>
      <div className='flex flex-col items-start justify-start gap-[35px] text-black font-jost w-[76.8%]'>
        <span className='text-[12px] font-medium leading-[14px] tracking-[0.48px] uppercase'>{span}</span>
        <h3 className='text-[48px] font-marcellus font-normal leading-[57.6px] capsizedText2'>{header}</h3>
        <p className='text-[16px] leading-[24px] font-normal w-[52%] capsizedText4'>{text}</p>
      </div>

      <div className="flex flex-col w-[100%] justify-start items-start">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full lg:w-[88.6%] ml-[11.6%] h-full flex-col justify-start items-start" ref={emblaRef}>
        <div className="flex grid-flow-col h-[540px] w-auto">
          {imagesCombined.map((image, index) => (
            <div className="relative
        shrink-0
        flex 
        justify-center 
        items-center
       mr-4
        flex-[0_0_auto]
         min-h-[540px]
         w-[360px]" key={index}>
              <Image
                src={image.src}
                layout="contain"
                width={360}
                height={540}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex h-[383px] md:h-auto lg:h-[540px] xl:h-auto  w-full"
              />
              <div className="absolute inset-0 text-center top-[9%]  w-full items-center justify-center">
                <div className="w-[100%] flex flex-col items-center justify-center text-center">
                <h3 className="text-[30px] -tracking-[0.66px] font-normal font-marcellus text-white w-[46%] leading-[36px] mb-[23px]">{headers[index]}</h3>
                <div className="flex w-[50%] h-[1px] bg-white"></div>
                <p className="text-[12px] font-medium leading-[14px] uppercase tracking-[0.48px] font-jost text-white mt-[10px]">DURATION: 60 MIN</p>
                </div>
              </div>
            
            </div>
          ))}
        </div>
       
      </div>
      <div className="flex items-start justify-start ml-[11.6%] w-[88.4%] mt-[50px] relative">
  {imagesCombined.map((_, i) => (
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
