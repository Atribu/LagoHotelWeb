"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Varsayılan slaytlar
const DEFAULT_SLIDES = [
  {
    src: require("./Images/Accommodation.webp"),
    title: "Accommodation",
    span: "/rooms",
  },
  {
    src: require("./Images/BeachAndPool2.webp"),
    title: "Beach & Pools",
    span: "/beachpools",
  },
  {
    src: require("./Images/Entertainment.webp"),
    title: "Experiences",
    span: "/entertainment",
  },
  {
    src: require("./Images/Flavours2.webp"),
    title: "Flavours",
    span: "/restaurants",
  },
  {
    src: require("./Images/Kids.webp"),
    title: "Kids",
    span: "/kidsclub",
  },
];

// Tekil slayt bileşeni
function Slide({ slide, marginClass }) {


  return (
    <div
      className={`
        relative
        shrink-0
        flex 
        justify-center 
        items-center
        ${marginClass}
        flex-[0_0_auto]
         min-h-[540px]
         w-[360px]
        
      `}
    >
      <Image
        src={slide.src}
        alt={slide.title}
        width={360}
        height={540}
        className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col text-white left-1/2 -translate-x-1/2 -translate-y-[10%] items-center justify-center text-center top-[10%] gap-[23px]">
        <h4 className="text-[30px] font-normal leading-[36px] -tracking-[0.66px] font-marcellus w-[100%]">{slide.title}</h4>
        <div className="flex bg-white h-[1px] w-full"></div>
        <span
          className="
            text-white
            text-[12px] font-medium leading-[14px] -tracking-[0.48px]
            font-jost transition uppercase
          "
        >
          {slide.span}
        </span>
      </div>
    </div>
  );
}

export default function Slider2({ slides }) {
  const slidesOriginal = slides || DEFAULT_SLIDES;
  const slidesCombined = [...slidesOriginal, ...slidesOriginal]; // Loop için ekstra slaytlar

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      containScroll: false,
      slidesToScroll: 1,
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
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap() % slidesOriginal.length); // Index düzeltildi
      });
    }
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden w-full ml-[11.6%]">
        <div className="flex h-[540px] w-auto">
          {slidesCombined.map((slide, index) => (
            <Slide key={index} slide={slide} marginClass="mr-4" />
          ))}         
        </div>
      </div>

      {/* Scroll Indicator (5 parça olacak) */}
      <div className="flex items-end justify-end w-[87.4%] ml-[11.6%] mt-[62px] relative">
        {slidesOriginal.map((_, i) => (
          <div
            key={i}
            className={`transition-all w-[25%]  h-[1px] bg-[#24292C] ${
              selectedIndex === i ? "p-[1px]" : "bg-[#848383]"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
          />
        ))}
      </div>
    </section>
  );
}



