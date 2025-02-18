"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";

// Import images
import hungry from "../images/hungry1.webp";
import hungry2 from "../images/hungry2.webp";
import hungry3 from "../images/hungry3.webp";
import hungry4 from "../images/hungry4.webp";
import hungry5 from "../images/hungry5.webp";
import hungry6 from "../images/hungry6.webp";
import hungry7 from "../images/hungry7.webp";
import hungry8 from "../images/hungry8.webp";

// Array of images
const images = [hungry, hungry2, hungry3, hungry4, hungry5, hungry6, hungry7, hungry8];

// Single slide component
const Slide = ({ slide, index }) => (
  <div className="flex-[0_0_100%] md:flex-[0_0_69%] lg:flex-[0_0_74%] xl:flex-[0_0_70.5%] min-w-0 mr-[1.8%]">
    <Image
      src={slide.src}
      alt={`Slide ${index + 1}`}
      width={slide.width}
      height={slide.height}
      style={{ objectPosition: "center" }}
      className="flex h-full w-full object-cover"
    />
  </div>
);

const BarCarouselSection = () => {
  const [emblaRef, emblaApi] = useCarousel({
    loop: true,
    align: "start",
    startIndex: 0,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    setSelectedIndex(emblaApi.selectedScrollSnap());
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <div className="flex w-screen h-auto items-center justify-center gap-[1%] max-w-[1440px]">
      {/* Text Column */}
      <div className="flex flex-col items-start justify-center lg:ml-[11.6%] w-[33.4%] gap-[35px] text-black font-jost">
        <span className="text-[12px] font-medium leading-normal uppercase tracking-[0.48px]">
          Experience traditional culture
        </span>
        <h2 className="text-[48px] font-marcellus font-normal leading-[57.6px]">
          Hungry for more?
        </h2>
        <p className="text-[14px] font-normal leading-normal w-[92%]">
          Discover our spacious snack restaurant, Snackspot, offers a variety of beverages as well as special tastes from Turkish and international cuisine. Between 11:30 and 18:00, our Snackspot restaurant—one of our places where you can enjoy every second of your holiday—is open.
        </p>
        <Link
          href="/"
          className="flex border border-lagoBrown py-[4px] px-[28px] w-[144px] whitespace-nowrap shadow-buttonCustom justify-center items-center text-center text-[14px] text-lagoBrown font-medium uppercase leading-[30px] bg-[#fbfbfb]"
        >
          LEARN MORE
        </Link>
      </div>
      
      {/* Carousel Column */}
      <div className="flex flex-col w-[54%] justify-end items-end h-full overflow-y-auto">
        <div
          className="flex overflow-hidden relative w-full h-full flex-col justify-end items-end"
          ref={emblaRef}
        >
          <div className="flex grid-flow-col">
            {images.map((img, index) => (
              <Slide key={index} slide={img} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarCarouselSection;
