"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Varsayılan slaytlar
const DEFAULT_SLIDES = [
  {
    src: require("./Images/Accommodation.webp"),
    title: "Accommodation",
    link: "/accommodation",
  },
  {
    src: require("./Images/BeachAndPool.webp"),
    title: "Beach & Pools",
    link: "/beachpool",
  },
  {
    src: require("./Images/Entertainment.webp"),
    title: "Experiences",
    link: "/entertainment",
  },
  {
    src: require("./Images/Flavours.webp"),
    title: "Flavours",
    link: "/flavours",
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

        /* Mobil (default) */
        w-[260px] h-[390px]

        /* sm (~640px ve üstü) */
        sm:w-[300px] sm:h-[450px]

        /* md (~768px ve üstü) */
        md:w-[360px] md:h-[540px]

        /* lg (~1024px ve üstü) */
        lg:w-[420px] lg:h-[630px]

        /* xl (~1280px ve üstü) */
        xl:w-[480px] xl:h-[720px]

        2xl:w-[750px] 2xl:h-[600px]
        basis-1/4 2xl:basis-[16%]
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
            text-[40px] font-normal leading-[20px] tracking-[-0.88px]
            font-marcellus px-4 py-2 transition
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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {});
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden mt-[100px]">
      <div
        ref={emblaRef}
        className="
          overflow-hidden
          w-full
          ml-4
          sm:ml-8
          md:ml-12
          lg:ml-16
          xl:ml-24
          2xl:ml-60
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
                marginClass={marginClass} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
