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
    link: "/rooms",
  },
  {
    src: require("./Images/BeachAndPool.webp"),
    title: "Beach & Pools",
    link: "/beachpools",
  },
  {
    src: require("./Images/Entertainment.webp"),
    title: "Experiences",
    link: "/entertainment",
  },
  {
    src: require("./Images/Flavours.webp"),
    title: "Flavours",
    link: "/restaurants",
  },
  {
    src: require("./Images/Kids.webp"),
    title: "Kids",
    link: "/kidsclub",
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
      <div className="absolute inset-0 flex items-center justify-center pb-4">
        <a
          href={slide.link}
          className="
            text-white
            text-[40px] font-normal leading-[20px] -tracking-[0.88px]
            font-marcellus transition
          "
        >
          {slide.title}
        </a>
      </div>
    </div>
  );
}

export default function Slider1({ slides }) {
  const slidesOriginal = slides || DEFAULT_SLIDES;
  const slidesCombined = [...slidesOriginal, ...slidesOriginal];

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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {});
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        ref={emblaRef}
        className="
          overflow-hidden
          w-full
          ml-[11.6%]
         
        "
      >
        <div className="flex">
          {slidesCombined.map((slide, index) => {
            const length = slidesOriginal.length;
            const isEndOfSet = (index + 1) % length === 0;
            // Örnek: Tüm slaytlara aynı boşluk "mr-4"
            // veya set sonu için farklı margin istersen: mr-8
            const marginClass = isEndOfSet ? "mr-4" : "mr-4";
            return (
              <Slide 
                key={index} 
                slide={slide} 
                marginClass="mr-4"
              />
            );
          })}
        </div>
      </div>


      <div className="flex items-end justify-end w-[87.4%] ml-[11.6%] mt-[62px] relative">
  {slidesCombined.map((_, i) => (
    <div
      key={i}
      className={`transition-all w-[20%] h-[2px] bg-[#24292C] rounded-full ${
        selectedIndex === i ? "p-[2px]" : "bg-[#848383] "
      }`}
      onClick={() => handleJump(i)}
    />
  ))}


</div>
    </section>
  );
}
