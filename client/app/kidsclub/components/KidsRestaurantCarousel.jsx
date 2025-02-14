"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import img from "../images/SRF_3469.webp"
import img2 from "../images/SRF_3456.webp"
import Image from "next/image";

const images =[img,img2]

const KidsRestaurantCarousel = () => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align: "end",
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
    <div className='flex flex-row-reverse w-screen justify-between items-center h-[436px] my-[75px] max-w-[1444px]'>
      <div className='flex flex-col w-[48%] font-jost text-lagoBlack gap-[35px] items-start justify-center'>
        <span className='text-[12px] font-medium uppercase tracking-[0.48px] leading-[14px]'>bamboo kıds club</span>
        <h2 className='text-[48px] leading-[57.6px] font-marcellus font-normal'>Magna Kids Restoran</h2>
        <p className='text-[14px] leading-[21px] font-normal text-[#24292C] '>Lorem ipsum dolor sit amet consectetur. Nisi urna felis accumsan auctor iaculis nibh diam. Id in phasellus ipsum in ullamcorper. Pharetra eu libero varius tempor viverra pulvinar quis mauris quam. Ipsum maecenas morbi at </p>
        <ul className="text-[14px] font-normal leading-[21px] list-disc pl-5 marker:text-xs marker:text-lagoBlack">
           <li> Breakfast: 07:00 - 10:30 </li>
          <li>  Lunch: 12:30 - 14:00</li>
           <li> Dinner: 18:30 - 21:30 </li>
          </ul>
      </div>

      <div className="flex flex-col w-[50%] justify-start items-start h-full">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full  h-full flex-col justify-start items-start" ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_80%] xl:flex-[0_0_75.5%] min-w-0 mr-[1.8%] " key={index}>
              <Image
                src={image.src}
                layout="cover"
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex h-full w-full"
              />
            
            </div>
          ))}
        </div>
       
      </div>
        </div>

    </div>
  )
}

export default KidsRestaurantCarousel
