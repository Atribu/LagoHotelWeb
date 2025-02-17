"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

// Default slides if no slides prop is provided
const DEFAULT_SLIDES = [
  { src: require("./Images/Accommodation.webp"), title: "Accommodation", link: "/accommodation" },
  { src: require("./Images/BeachAndPool.webp"), title: "Beach & Pools", link: "/beachpool" },
  { src: require("./Images/Entertainment.webp"), title: "Experiences", link: "/entertainment" },
  { src: require("./Images/Flavours.webp"), title: "Flavours", link: "/flavours" },
  { src: require("./Images/Kids.webp"), title: "Kids", link: "/kidsclub" },
];

// Single slide component
const Slide = ({ slide }) => (
  <div className="relative w-[360px] h-[540px] basis-1/4 2xl:basis-[16%] shrink-0 flex justify-center items-center -mr-9">
    <Image
      src={slide.src}
      alt={slide.title}
      width={360}
      height={540}
      className="object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center pb-4">
      <a
        href={slide.link}
        className="text-white text-[40px] font-normal leading-[20px] tracking-[-0.88px] font-marcellus px-4 py-2 transition"
      >
        {slide.title}
      </a>
    </div>
  </div>
);

const Slider1 = ({ slides }) => {
  // Use provided slides, or fallback to default slides.
  const slidesOriginal = slides || DEFAULT_SLIDES;
  // Clone slides to create a continuous loop.
  const slidesCombined = [...slidesOriginal, ...slidesOriginal];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      containScroll: false,
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
    const onSelect = () => {
      const lastIndex = slidesCombined.length - 1;
      if (emblaApi.selectedScrollSnap() >= lastIndex - 1) {
        emblaApi.scrollTo(0, false);
      }
    };
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, slidesCombined.length]);

  return (
    <section className="relative w-full overflow-hidden mt-[100px]">
      <div ref={emblaRef} className="overflow-hidden w-full ml-60">
        <div className="flex">
          {slidesCombined.map((slide, index) => (
            <Slide key={index} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider1;
