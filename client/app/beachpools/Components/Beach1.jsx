"use client"

import React, { useState, useEffect, useRef } from "react"
import Girl from "../Images/123.png"
import Yazı from "../Images/Beach&Poolsyazısı.webp"
import Dalga from "../Images/SeaBlue.webp"

export default function Beach1() {
  const [firstScrollDone, setFirstScrollDone] = useState(false)
  const [animate, setAnimate] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e) => {
      // Sadece firstScrollDone === false ve animate === false ise
      // (yani henüz hiç animasyon tetiklenmemişse) engelle
      if (!firstScrollDone && !animate) {
        e.preventDefault()
        setAnimate(true) // Dalga/yazı hareket başlasın

        // 700ms sonra anim biter => scroll serbest
        setTimeout(() => {
          setFirstScrollDone(true)
        }, 700)
      }
      // Eğer firstScrollDone === true => normal scroll
      // Eğer animate === true ama 700ms bitmemiş => anim devam
      //   (diğer wheel eventlerini ignore ediyoruz)
    }

    container.addEventListener("wheel", handleWheel, { passive: false })
    return () => {
      container.removeEventListener("wheel", handleWheel)
    }
  }, [firstScrollDone, animate])

  // Yazı animasyonu
  const yazıTransition = animate
    ? "translate-y-[200px] opacity-0"
    : "translate-y-0 opacity-100"

  // Dalga animasyonu
  //  - anim: top-[50%]
  //  - normal: top-[70%]
  //  - anim bitince => sabit kalır
  let dalgaStyle = "top-[70%] transition-all duration-700"
  if (animate) {
    dalgaStyle = "top-[50%] transition-all duration-700"
  }
  if (firstScrollDone && animate) {
    // Anim bitince => sabit (transition kaldırmak isterseniz):
    dalgaStyle = "top-[50%]"
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-no-repeat bg-cover overflow-auto"
      style={{
        backgroundImage: `url(${Girl.src})`,
        backgroundPosition: "center 13%",
      }}
    >
      {/* Yazı ortada */}
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

      {/* Dalga alt tarafta => ilk scroll => yukarı, sonra sabit */}
      <div className={`absolute left-0 w-full ${dalgaStyle}`}>
        <img
          src={Dalga.src}
          alt="Sea wave"
          className="w-full object-cover"
        />
      </div>

      {/* Uzun içerik => sonradan normal scroll */}
      <div className="mt-[120vh] text-white">
        <h2>After the first animation, normal scrolling is enabled.</h2>
        <p>Some more content here ...</p>
        <div style={{height:"2000px"}} />
      </div>
    </div>
  )
}
