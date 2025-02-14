"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

// Default resimler (Eğer prop gönderilmezse kullanılacak)
import Slide1Default from "./Images/Accommodation.webp"
import Slide2Default from "./Images/BeachAndPool.webp"
import Slide3Default from "./Images/Entertainment.webp"
import Slide4Default from "./Images/Flavours.webp"
import Slide5Default from "./Images/Kids.webp"

export default function Slider1({ slides }) {
  // Eğer dışarıdan slides prop'u gelmişse onu kullan, gelmemişse default olanları kullan.
  const slidesOriginal = slides || [
    { src: Slide1Default, title: "Accommodation", link: "/accommodation" },
    { src: Slide2Default, title: "Beach & Pools", link: "/beachpool" },
    { src: Slide3Default, title: "Experiences", link: "/entertainment" },
    { src: Slide4Default, title: "Flavours", link: "/flavours" },
    { src: Slide5Default, title: "Kids", link: "/kidsclub" },
  ]

  const slidesClone = [...slidesOriginal]
  const slidesCombined = [...slidesOriginal, ...slidesClone]

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

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      const lastIndex = slidesCombined.length - 1
      if (emblaApi.selectedScrollSnap() >= lastIndex - 1) {
        emblaApi.scrollTo(0, false) 
      }
    }

    emblaApi.on("select", onSelect)
    return () => emblaApi.off("select", onSelect)
  }, [emblaApi, slidesCombined.length])

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden w-full ml-60">
        <div className="flex">
          {slidesCombined.map((slide, index) => (
            <div
              key={index}
              className="relative w-[360px] h-[540px] basis-1/4 2xl:basis-[16%] shrink-0 flex justify-center items-center -mr-9"
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
    </section>
  )
}