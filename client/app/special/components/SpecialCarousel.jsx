"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import Image from "next/image";
import img1 from "../images/pool.webp";
import img2 from "../images/kadeh.webp";
import img3 from "../images/horse.webp";

const images = [img1, img2, img3];

const SpecialCarousel = () => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "center",
    startIndex:1,
    containScroll: "trimSnaps", // Yanlardaki resimlerin taşmasını engeller
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
    <div className="flex flex-col w-screen justify-center items-center text-center gap-[50px]">
      <div className="flex flex-col w-full justify-center items-center h-full">
        {/* Carousel */}
        <div className="overflow-hidden relative w-full" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] ml-[10px] h-[788px]">
                <Image
                  src={image.src}
                  layout="cover"
                  width={image.width}
                  height={788}
                  alt={`Slide ${index + 1}`}
                  objectPosition="center"
                  className="h-full flex"
                />
              </div>
            ))}  
          </div>

          <div className="bg-black/35 absolute inset-0"></div>
          <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-[48px] text-white font-marcellus font-normal leading-normal tracking-[0.48px] text-center w-[25%]">
            A Paradise in the Heart of the Mediterranean
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCarousel;
