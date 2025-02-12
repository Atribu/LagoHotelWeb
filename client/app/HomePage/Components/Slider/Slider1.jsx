"use client"

import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

// Resimler
import Slide1 from "./Images/Accommodation.webp"
import Slide2 from "./Images/BeachAndPool.webp"
import Slide3 from "./Images/Entertainment.webp"
import Slide4 from "./Images/Flavours.webp"
import Slide5 from "./Images/Kids.webp"

export default function Slider1() {
  // Asıl 5 slayt
  const slidesOriginal = [
    { src: Slide1, title: "Accommodation", link: "/accommodation" },
    { src: Slide2, title: "Beach & Pools", link: "/beachpool" },
    { src: Slide3, title: "Experiences", link: "/entertainment" },
    { src: Slide4, title: "Flavours", link: "/flavours" },
    { src: Slide5, title: "Kids", link: "/kidsclub" },
  ]
  // Kopya
  const slidesClone = [...slidesOriginal]
  // Birleştirilmiş => 10 slayt
  const slidesCombined = [...slidesOriginal, ...slidesClone]

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Embla Carousel
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,         
      slidesToScroll: 1,
      containScroll: false,
      skipSnaps: false
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
        playDirection: "forward"
      })
    ]
  )

  // Seçili index değişimini takip et
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap() % slidesOriginal.length;
      setSelectedIndex(index);
    };

    emblaApi.on("select", onSelect);
    onSelect(); // İlk yüklemede aktif olanı belirle

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, slidesOriginal.length]);

  // Seçili index'e göre kaydırma fonksiyonu
  const handleJump = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden items-end justify-end">
      <div ref={emblaRef} className="overflow-hidden w-full ml-60">
        <div className="flex">
          {slidesCombined.map((slide, index) => (
            <div
              key={index}
              className="relative basis-1/4 shrink-0 flex justify-center items-center -mr-9"
            >
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
                  className="
                  text-white 
                  text-[40px]
                  font-normal
                  leading-[20px]
                  tracking-[-0.88px]
                  font-marcellus
                  px-4 py-2
                  transition
                "
                >
                  {slide.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Bar */}
      <div className="flex items-end justify-end ml-[12.6%] w-[87.4%] mt-[50px] relative">
        {slidesOriginal.map((_, i) => (
          <div
            key={i}
            className={`transition-all mt-[20px] lg:mt-[30px] w-[25%] h-[2px] bg-[#24292C] rounded-full ${
              selectedIndex === i ? "bg-[#24292C] h-[4px]" : "bg-[#848383]"
            }`}
            onClick={() => handleJump(i)}
          />
        ))}
      </div>
    </section>
  );
}
