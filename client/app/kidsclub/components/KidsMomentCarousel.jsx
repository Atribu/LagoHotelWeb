"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import img1 from "../images/SRF_4307 (2).webp"
import img2 from "../images/SRF_3813.webp"
import img3 from "../images/SRF_4487.webp"
import Image from "next/image";

const images =[img1,img2,img3]

const KidsMomentCarousel = () => {
    const [emblaRef, emblaApi] = useCarousel({
        loop: true,
        align: "center",
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
    <div className='flex flex-col w-screen justify-center items-center my-[100px] text-center gap-[50px]'>
      <h2 className='text-[48px] text-black font-marcellus font-normal leading-[48px]'>Every Moment is Worth Sharing</h2>

      <div className="flex flex-col w-full justify-center items-center h-full">
           {/* carousel */}
           <div className="flex overflow-hidden relative w-full flex-col justify-center items-center " ref={emblaRef}>
        <div className="flex grid-flow-col">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_80%] xl:flex-[0_0_70.5%] min-w-0 mr-[1.8%] h-[66vh]" key={index}>
              <Image
                src={image.src}
                layout="cover"
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
                objectPosition="center"
                className="flex w-full"
              />
            
            </div>
          ))}
        </div>
       
      </div>
        </div>

    </div>
  )
}

export default KidsMomentCarousel
