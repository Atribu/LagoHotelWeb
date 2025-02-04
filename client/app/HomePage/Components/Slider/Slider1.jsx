"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

// Dosyalar gerçekte "app/Slider/Images/*.webp" içinde olsun
import Slide1 from "./Images/Accommodation.webp"
import Slide2 from "./Images/BeachAndPool.webp"
import Slide3 from "./Images/Entertainment.webp"
import Slide4 from "./Images/Flavours.webp"
import Slide5 from "./Images/Kids.webp"

export default function Slider1({ options }) {
  const slides = [Slide1, Slide2, Slide3, Slide4, Slide5]
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <section className="relative w-full overflow-hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slideUrl, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] flex justify-center items-center"
            >
              <Image
                        src={slideUrl}  // obje ama next/image anlıyor
                        alt=""
                        width={360}
                        height={540}
                        className="object-cover"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
