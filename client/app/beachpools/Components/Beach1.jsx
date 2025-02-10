"use client"

import React, { useState, useEffect, useRef } from "react"
import Girl from "../Images/GirlAndLongSand.webp"
import Yazı from "../Images/Beach&Poolsyazısı.webp"
import Dalga from "../Images/222.png"
import ClinaryReverseInfo from "@/app/restaurants/components/ClinaryReverseInfo"
import img1 from "../Images/beach1.webp"
import img2 from "../Images/beach2.webp"
import ClinaryInfoSection from "@/app/restaurants/components/ClinaryInfoSection"

export default function Beach1() {
  const [scrollAttempt, setScrollAttempt] = useState(0)
  const [animate, setAnimate] = useState(false)

  const texts = [
    "Lorem ipsum dolor sit amet consectetur. Libero ut pellentesque netus odio felis morbi est. Netus turpis pretium diam at ut orci. Sed pretium cras viverra viverra pulvinar aliquet dictum magna luctus.",
    "Special Feautures",
    "Complimentary sun loungers, umbrellas, and towels.",
    "Beach bars serving refreshing drinks and light snacks.",
    "Calm waters ideal for swimming and water sports."
  ]

  // EK: Bu state, dalga animasyonu bitince metni göstereceğiz.
  const [textVisible, setTextVisible] = useState(false)

  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      if (scrollAttempt === 0 && !animate) {
        e.preventDefault()
        setAnimate(true)
        // Dalga animasyonu 700ms sürüyor
        setTimeout(() => {
          setScrollAttempt(1)
          // Dalga hareketi bitince metni açalım
          setTextVisible(true)
        }, 700)
      }
      else if (scrollAttempt === 0 && animate) {
        e.preventDefault()
      }
      // scrollAttempt === 1 => normal scroll
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [scrollAttempt, animate])

  // Yazı (Beach&Pool) animasyonu
  const yazıTransition = animate
    ? "translate-y-[200px] opacity-0"
    : "translate-y-0 opacity-100"

  // Dalga animasyonu
  let dalgaStyle = "top-[70%] transition-all duration-700"
  if (animate) {
    dalgaStyle = "top-[50%] transition-all duration-700"
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen "
    >
      {/* Girl resmi => tam boy, arka planda */}
      <img
        src={Girl.src}
        alt="Girl"
        className="
                    absolute
                    w-full h-full
                    object-cover
                    object-[100%_12%]  /* x=50%, y=10% */
                    top-0 left-0
                    -z-10
                  "
      />

      {/* Yazı (Beach & Pools) ortada, ilk scroll animasyonu */}
      <div
        className={`
          absolute inset-0 top-[15%]
          flex items-center justify-center
          transition-all duration-700
          ${yazıTransition}
        `}
      >
        <img
          src={Yazı.src}
          alt="Beach & Pools Yazı"
          className="object-contain max-w-[80%] md:max-w-[40%]"
        />
      </div>

      {/* Dalga => ilk scroll => yukarı */}
      <div className={`absolute left-0 w-full ${dalgaStyle}`}>
        <img
          src={Dalga.src}
          alt="Sea wave"
          className="w-full object-cover [clip-path:inset(0_0_30%_0)]"

        />
      </div>

      {/* YENİ EKLENEN METİN BLOĞU 
          Dalga bitmeden görünmez (textVisible=false), 
          bitince fade in => (textVisible=true => opacity-100) 
      */}
      <div
        className={`
         absolute left-0 w-full
          top-[75%] flex flex-col justify-center items-center
          text-center 
          px-4
          gap-5
          mt-52
          transition-all
          text-[#1d3535]
          ${textVisible ? "opacity-100" : "opacity-0"}
        `}
      >
        <p className="uppercase text-[12px] leading-[14px] tracking-[0.48px] font-medium mb-2 font-jost">
          WELCOME TO LAGO HOTEL
        </p>
        <h1 className="font-marcellus text-[48px] leading-[57.6px] md:text-5xl font-normal mb-4">
          Immerse Yourself in the <br /> Deep Blue Waters
        </h1>
        <p className="w-full text-center font-jost text-[16px] leading-[24px] md:text-lg mb-6">
          We offer you a pleasant holiday experience that will feel like home
          in our rooms designed <br /> in accordance with varied tastes and needs,
          merging beauty and comfort with their eye- <br /> catching designs and
          efficient structures. Enjoy cooling off in pools of different sizes
          in the <br /> deep blue world of LAGO. Come to LAGO where everything is
          possible.
        </p>
        <button
          className="
            uppercase text-sm font-medium font-marcellus text-[18px] leading-[30px]
            underline
            underline-offset-4
          "
        >
          Discover More
        </button>
        <div className="flex relative mt-16">
          <ClinaryInfoSection img1={img1} img2={img2} span={"Perfect Fine Dine Experiences"} header={"Discover Our Exclusive Beach"} texts={texts} />
        </div>
      </div>
      
    </div>
  )
}
